import { useState } from "react";
import PassGen from "./PassGen";

function PassGenCon() {
  const [checkBoxData, setCheckBoxData] = useState([
    {
      id: "includeUppercase",
      title: "include uppercase letters",
      isChecked: false,
    },
    {
      id: "includeLowercase",
      title: "include lowercase letters",
      isChecked: false,
    },
    {
      id: "includeNumbers",
      title: "include numbers",
      isChecked: false,
    },
    {
      id: "includeSymbols",
      title: "include symbols",
      isChecked: false,
    },
  ]);

  return (
    <div className="h-screen grid place-items-center">
      <PassGen
        minLength={5}
        maxLength={15}
        checkBoxData={checkBoxData}
        setCheckBoxData={setCheckBoxData}
      />
    </div>
  );
}
export default PassGenCon;
