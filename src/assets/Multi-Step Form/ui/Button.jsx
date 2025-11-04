const Button = ({
  text = "Button",
  customStyle = "bg-black text-white",
  fn,
  type = "button",
}) => {
  return (
    <button
      type={type}
      className={`${customStyle} w-32 h-8 rounded-md font-semibold cursor-pointer flex justify-center items-center gap-1`}
      onClick={fn}
    >
      {text}
    </button>
  );
};

export default Button;
