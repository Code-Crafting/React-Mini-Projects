import { useState } from "react";
import CheckBoxInput from "./CheckBoxInput";
import usePasswordGenerator from "../hooks/usePasswordGenerator";
import Button from "./Button";

function PassGen({ minLength, maxLength, checkBoxData, setCheckBoxData }) {
  const [rangeValue, setRangeValue] = useState(minLength);
  const [password, strenght, generatePassword] = usePasswordGenerator();
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(password);
    setIsCopied(true);

    setTimeout(() => setIsCopied(false), 1500);
  };

  const handleCheckboxState = (i) => {
    const allData = [...checkBoxData];
    allData[i].isChecked = !allData[i].isChecked;
    setCheckBoxData(allData);
  };

  return (
    <div className="min-w-2xl p-4 bg-gray-800 border text-white rounded-lg">
      {/* password area */}
      {password && (
        <div className="flex justify-between py-2">
          <p className="text-2xl font-medium">{password}</p>
          {/* copy btn */}
          <Button
            text={isCopied ? "COPIED" : "COPY"}
            customStying="text-sm px-2 rounded-lg font-medium tracking-wider"
            fn={handleCopy}
          />
        </div>
      )}

      {/* modifier area */}
      <div className="flex flex-col gap-4 my-4">
        <div className="flex justify-between ">
          <p>Character Length </p>
          <p>{rangeValue}</p>
        </div>

        <input
          type="range"
          min={minLength}
          max={maxLength}
          value={rangeValue}
          onChange={(e) => setRangeValue(Number(e.target.value))}
          className="w-full"
        />

        <div className="grid  grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-2">
          {checkBoxData.map((el, i) => {
            return (
              <CheckBoxInput
                key={el.id}
                id={el.id}
                title={el.title}
                isChecked={el.isChecked}
                setState={() => handleCheckboxState(i)}
              />
            );
          })}
        </div>

        {strenght && (
          <div className="flex justify-between  mb-2">
            <p>Strength:</p>
            <p>{strenght}</p>
          </div>
        )}
      </div>

      {/* generate btn */}
      <Button
        text="Generate Password"
        customStying="w-full py-4 rounded-lg"
        fn={() => generatePassword(checkBoxData, rangeValue)}
      />
    </div>
  );
}

export default PassGen;
