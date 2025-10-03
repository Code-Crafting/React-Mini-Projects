import { useState } from "react";

const usePasswordGenerator = () => {
  const [password, setPassword] = useState("");
  const [passwordStrength, setPasswordStrength] = useState("");

  const generatePassword = (data, length) => {
    const selectedBox = data.filter((el) => el.isChecked);
    if (!selectedBox.length) {
      alert("atleast select one option");
      return;
    }

    let char = "";
    let generatedPassword = "";

    // setting characters
    selectedBox.forEach((el) => {
      switch (el.id) {
        case "includeUppercase":
          char += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
          break;
        case "includeLowercase":
          char += "abcdefghijklmnopqrstuvwxyz";
          break;
        case "includeSymbols":
          char += "@#$^&*!~`<>";
          break;
        case "includeNumbers":
          char += "0123456789";
          break;
      }
    });

    // creating password
    for (let i = 0; i < length; i++) {
      generatedPassword += char[Math.floor(Math.random() * char.length)];
    }

    // checking password strength
    const strength =
      generatedPassword.length <= 8
        ? "Weak"
        : generatedPassword.length <= 12
        ? "Medium"
        : "Hard";

    setPassword(generatedPassword);
    setPasswordStrength(strength);
  };

  return [password, passwordStrength, generatePassword];
};

export default usePasswordGenerator;
