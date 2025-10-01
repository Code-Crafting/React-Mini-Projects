function NumberInput({ id, title, data, setData, max, min }) {
  return (
    <>
      <label htmlFor={id}>{title}</label>
      <input
        type="number"
        id={id}
        value={data > max ? max : data < min ? min : data}
        className="border border-black px-2"
        onChange={(e) => setData(Number(e.target.value))}
      />
    </>
  );
}

export default NumberInput;
