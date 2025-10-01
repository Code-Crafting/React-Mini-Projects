function Slider({
  id,
  title,
  calculateFnc,
  min,
  max,
  value,
  updateFnc,
  labelMin,
  labelMax,
}) {
  return (
    <div className="font-medium" id={id}>
      <div className="flex gap-2 items-center">
        <p className="underline">{title}</p>
        <p>{calculateFnc}</p>
      </div>

      <input
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={updateFnc}
        className="w-full  bg-sky-500 rounded-full mt-2 "
      />
      <div className="flex justify-between text-xl">
        <label> {labelMin} </label>
        <label> {value} </label>
        <label> {labelMax} </label>
      </div>
    </div>
  );
}

export default Slider;
