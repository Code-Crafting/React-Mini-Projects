import { useContext } from "react";
import { InputContext } from "../../contexts/InputContext";

const TextInput = ({ id, minLength }) => {
  const { register } = useContext(InputContext);

  const validationRules = {
    required: { value: true, message: "This field is required" },
    ...(minLength && {
      minLength: {
        value: minLength,
        message: `Length cann't be less than ${minLength}`,
      },
    }),
  };

  return (
    <input
      {...register(id, validationRules)}
      id={id}
      type="text"
      className="border border-gray-400 outline-none rounded-md px-2 py-2"
    />
  );
};

export default TextInput;
