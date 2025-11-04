import { useContext } from "react";
import { InputContext } from "../../contexts/InputContext";

const EmailInput = ({ id }) => {
  const { register } = useContext(InputContext);

  const validation = {
    required: { value: true, message: "This field is required" },
    validate: (value) => {
      if (value.length > 3 && value.includes("@")) {
        return true;
      } else {
        return "Enter a valid email address";
      }
    },
  };

  return (
    <input
      {...register(id, validation)}
      id={id}
      type="email"
      className="border border-gray-400 outline-none rounded-md px-2 py-2"
    />
  );
};

export default EmailInput;
