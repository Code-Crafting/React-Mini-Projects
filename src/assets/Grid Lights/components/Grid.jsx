const Grid = ({ fn, selectedGrid, index }) => {
  return (
    <button
      className={`${
        selectedGrid.includes(index) ? "bg-green-300" : ""
      } aspect-square border border-black rounded-lg cursor-pointer grid place-items-center text-xl `}
      onClick={fn}
      disabled={selectedGrid.includes(index) ? true : false}
    >
      {selectedGrid.includes(index) && selectedGrid.indexOf(index) + 1}
    </button>
  );
};

export default Grid;
