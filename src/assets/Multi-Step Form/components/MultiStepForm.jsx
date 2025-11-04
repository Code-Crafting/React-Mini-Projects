import { useState } from "react";
import Button from "../ui/Button";
import ProgressBar from "./ProgressBar/ProgressBar";
import { currentStepPage } from "../constant/currentStepPage";
import { useForm } from "react-hook-form";
import { InputContext } from "../contexts/InputContext";

const MultiStepForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [stepCompleted, setStepCompleted] = useState({
    step1: false,
    step2: false,
    step3: false,
  });
  const { Page, title } = currentStepPage[currentStep - 1];
  const formMethods = useForm({
    mode: "onBlur",
  });

  const handleNext = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    const valid = await formMethods.trigger();
    if (!valid) return;
    if (currentStep < currentStepPage.length && valid) {
      setCurrentStep((prev) => prev + 1);
      setStepCompleted((prev) => ({ ...prev, [`step${currentStep}`]: true }));
    }
  };

  const handlePrev = () => {
    setCurrentStep((prev) => prev - 1);
    setStepCompleted((prev) => ({ ...prev, [`step${currentStep}`]: false }));
  };

  const onSubmit = (data) => {
    console.log(data);
    setStepCompleted((prev) => ({ ...prev, [`step${currentStep}`]: true }));
  };

  return (
    <div className="h-screen grid place-items-center bg-gray-300 ">
      <div className="w-xl bg-white min-h-72 shadow-box rounded-xl p-4">
        <ProgressBar currentStep={currentStep} stepCompleted={stepCompleted} />
        <form
          className="space-y-4 my-4"
          onSubmit={formMethods.handleSubmit(onSubmit)}
        >
          <h1 className="text-xl font-bold mb-2">{title}</h1>
          <InputContext.Provider value={formMethods}>
            <Page />
          </InputContext.Provider>

          <div
            className={`flex ${
              currentStep > 1 ? "justify-between" : "justify-end"
            }`}
          >
            {currentStep > 1 && (
              <Button
                text="Previous"
                customStyle="bg-gray-200 border-gray-500 text-black"
                fn={handlePrev}
              />
            )}

            {currentStep === currentStepPage.length ? (
              <Button text="Submit" type="submit" />
            ) : (
              <Button text="Next" fn={handleNext} />
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default MultiStepForm;
