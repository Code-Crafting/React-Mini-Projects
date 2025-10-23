import { useEffect, useState } from "react";
import { tenure } from "../constants/tenure";
import NumberInput from "./NumberInput";
import Slider from "./Slider";

function EMICalculator() {
  const [totalCost, setTotalCost] = useState(0);
  const [interest, setInterest] = useState(10);
  const [processingFee, setProcessingFee] = useState(1);
  const [period, setPeriod] = useState(12);
  const [downPayment, setDownPayment] = useState(0);
  const [emi, setEmi] = useState(0);

  function calculateEmi(dp) {
    // EMI = [P * R * (1+R)^N]/[(1+R)^N - 1]
    const principal = totalCost - dp;
    const rate = interest / 100;
    const periodInMonths = period;

    const EMI =
      (principal * rate * (1 + rate) ** periodInMonths) /
      ((1 + rate) ** periodInMonths - 1);

    return Number(EMI).toFixed(0);
  }

  function calculateDp(emi) {
    const dpPercentage = 100 - (emi / calculateEmi(0)) * 100;
    return Number((dpPercentage / 100) * totalCost).toFixed(0);
  }

  function updateDownPayment(e) {
    if (!totalCost) return;
    setDownPayment(e.target.value);

    // update emi slider
    const emi = calculateEmi(e.target.value);
    setEmi(emi);
  }

  function updateEmi(e) {
    if (!totalCost) return;
    setEmi(Number(e.target.value));

    // update downpayment slider
    const dp = calculateDp(e.target.value);
    setDownPayment(dp);
  }

  function calculateTotalDownPayment() {
    return Number(
      Number(downPayment) + ((totalCost - downPayment) * processingFee) / 100
    ).toFixed(0);
  }

  useEffect(() => {
    if (totalCost >= 0) {
      setEmi(0);
      setDownPayment(0);
    }
    setEmi(calculateEmi(downPayment));
  }, [totalCost, tenure, interest]);

  return (
    <div className=" h-screen grid place-content-center ">
      <div className="border border-black px-4 py-6 rounded-xl bg-gray-100">
        <div>
          <h1 className="font-medium text-4xl">EMI Calculator</h1>

          <div className="flex flex-col gap-2 my-4">
            {/* total cost */}
            <NumberInput
              id="cost"
              title="Total Cost of Assets"
              data={totalCost}
              setData={setTotalCost}
              min={0}
            />

            {/* interest rate */}
            <NumberInput
              id="interest"
              title="Interest Rate (in %)"
              data={interest}
              setData={setInterest}
              min={0}
              max={100}
            />

            {/* processing fee */}
            <NumberInput
              id="precessing__fee"
              title="Processing Fee (in %)"
              data={processingFee}
              setData={setProcessingFee}
              min={0}
              max={100}
            />
          </div>
        </div>

        <div className="flex flex-col gap-8">
          {/* down payment  */}
          <Slider
            id="down__payment"
            title="Total Down Payment:"
            calculateFnc={calculateTotalDownPayment()}
            min={0}
            max={totalCost}
            value={downPayment}
            updateFnc={(e) => updateDownPayment(e)}
            labelMin="0%"
            labelMax="100%"
          />

          {/* total loan*/}
          <Slider
            id="total__loan"
            title="Total Loan:"
            calculateFnc={(emi * period).toFixed(0)}
            min={calculateEmi(totalCost)}
            max={calculateEmi(0)}
            value={emi}
            updateFnc={(e) => updateEmi(e)}
            labelMin="₹0"
            labelMax={`₹${calculateEmi(0)}`}
          />

          {/* tenure */}
          <div className="font-medium">
            <p>Tenure</p>

            <div className="flex gap-4 mt-4 text-white">
              {tenure.map((el, i) => {
                return (
                  <div
                    key={i}
                    className={` w-[100px] h-[35px] rounded-full grid place-items-center hover:cursor-pointer ${
                      period === el ? "bg-sky-500" : "bg-gray-400"
                    } `}
                    onClick={() => setPeriod(el)}
                  >
                    {el}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EMICalculator;
