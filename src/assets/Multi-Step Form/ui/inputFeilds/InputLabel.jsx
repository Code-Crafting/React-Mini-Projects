const InputLabel = ({ htmlFor, labelTitle }) => {
  return (
    <label htmlFor={htmlFor} className="font-semibold">
      {labelTitle}
    </label>
  );
};

export default InputLabel;
