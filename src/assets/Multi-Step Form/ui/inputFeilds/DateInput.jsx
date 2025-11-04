import { useContext } from "react";
import { InputContext } from "../../contexts/InputContext";

const DateInput = ({ id }) => {
  const { register } = useContext(InputContext);

  const validation = {
    required: { value: true, message: "This field is required" },
  };

  return (
    <input
      {...register(id, validation)}
      id={id}
      type="date"
      className="border border-gray-400 outline-none rounded-md px-2 py-2"
    />
  );
};

export default DateInput;
