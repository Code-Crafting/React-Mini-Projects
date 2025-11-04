import { useContext } from "react";
import { InputContext } from "../../contexts/InputContext";

const NumberInput = ({ id, minLength, maxLength }) => {
  const { register } = useContext(InputContext);

  const validationRules = {
    required: { value: true, message: "This field is required" },
    ...(minLength && {
      minLength: {
        value: minLength,
        message: `Length cann't be less than ${minLength}`,
      },
    }),
    ...(maxLength && {
      maxLength: {
        value: minLength,
        message: `Length cann't be greater than ${maxLength}`,
      },
    }),
  };

  return (
    <input
      {...register(id, validationRules)}
      id={id}
      type="number"
      className="border border-gray-400 outline-none rounded-md px-2 py-2 [-moz-appearance:_textfield] [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
    />
  );
};

export default NumberInput;
