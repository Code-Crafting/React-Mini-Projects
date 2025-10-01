import { useState } from "react";

function EMICalculator() {
  const [EMIData, setEMIData] = useState({
    totalCost: "",
    interest: "",
    processingFee: "",
  });
  const [downPayment, setDownPayment] = useState(0);

  function updateDownPayment(e) {
    if (!EMIData.totalCost) return;

    setDownPayment(e.target.value);
  }

  return (
    <div className=" h-screen grid place-content-center">
      <div className="border border-black px-4 py-6 rounded-xl">
        <div>
          <h1 className="font-medium text-4xl">EMI Calculator</h1>

          <div className="flex flex-col gap-2 my-4">
            {/* total cost */}
            <label htmlFor="cost">Total Cost of Assets</label>
            <input
              type="number"
              id="cost"
              value={EMIData.totalCost}
              className="border border-black px-2"
              onChange={(e) =>
                setEMIData({ ...EMIData, totalCost: Number(e.target.value) })
              }
            />

            {/* interest rate */}
            <label htmlFor="interest">Interest Rate (in %)</label>
            <input
              type="number"
              id="interest"
              value={EMIData.interest}
              className="border border-black px-2"
              onChange={(e) =>
                setEMIData({ ...EMIData, interest: Number(e.target.value) })
              }
            />

            {/* processing fee */}
            <label htmlFor="precessing__fee">Processing Fee (in %)</label>
            <input
              type="number"
              id="precessing__fee"
              value={EMIData.processingFee}
              className="border border-black px-2"
              onChange={(e) =>
                setEMIData({
                  ...EMIData,
                  processingFee: Number(e.target.value),
                })
              }
            />
          </div>
        </div>

        <div className="flex flex-col gap-8">
          {/* down payment  */}
          <div className="font-medium" id="down__payment">
            <div className="flex gap-2 items-center">
              <p className="underline">Total Down Payment:</p>
              <p></p>
            </div>

            <input
              type="range"
              min={0}
              max={EMIData.totalCost}
              value={downPayment}
              onChange={(e) => updateDownPayment(e)}
              className="w-full  bg-sky-500 rounded-full mt-2 "
            />
            <div className="flex justify-between text-xl">
              <label> 0% </label>
              <label> {downPayment} </label>
              <label> 100% </label>
            </div>
          </div>

          {/* loan per month */}
          <div className="font-medium">
            <div className="flex gap-2 items-center">
              <p className="underline">Loan per Month:</p>
              <p></p>
            </div>

            <input
              type="range"
              min={0}
              max={EMIData.totalCost}
              value={downPayment}
              onChange={(e) => updateDownPayment(e)}
              className="w-full  bg-sky-500 rounded-full mt-2 "
            />
            <div className="flex justify-between text-xl">
              <label> ₹0 </label>
              <label> {downPayment} </label>
              <label> ₹100 </label>
            </div>
          </div>

          {/* tenure */}
          <div className="font-medium" id="down__payment">
            <div className="flex gap-2 items-center">
              <p>Tenure</p>
              <p></p>
            </div>

            <div className="flex gap-4 mt-4 text-white">
              <div className="bg-sky-500 w-[100px] h-[35px] rounded-full grid place-items-center hover:cursor-pointer ">
                12
              </div>
              <div className="bg-sky-500 w-[100px] h-[35px] rounded-full grid place-items-center hover:cursor-pointer ">
                24
              </div>
              <div className="bg-sky-500 w-[100px] h-[35px] rounded-full grid place-items-center hover:cursor-pointer ">
                48
              </div>
              <div className="bg-sky-500 w-[100px] h-[35px] rounded-full grid place-items-center hover:cursor-pointer ">
                60
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EMICalculator;
