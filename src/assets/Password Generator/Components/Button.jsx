function Button({ text, customStying, fn }) {
  return (
    <button
      className={`${customStying} hover:cursor-pointer  bg-blue-700 `}
      onClick={fn}
    >
      {text}
    </button>
  );
}

export default Button;
