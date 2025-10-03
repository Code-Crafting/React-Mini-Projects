function CheckBoxInput({ id, title, isChecked, setState }) {
  return (
    <div>
      <input
        type="checkbox"
        id={id}
        checked={isChecked}
        onChange={setState}
        className="hover:cursor-pointer"
      />
      <label htmlFor={id} className="hover:cursor-pointer">
        {" "}
        {title}{" "}
      </label>
    </div>
  );
}

export default CheckBoxInput;
