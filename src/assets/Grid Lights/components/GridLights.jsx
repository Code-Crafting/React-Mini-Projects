import { useEffect, useState } from "react";
import Grid from "./Grid";

const GridLights = () => {
  const [selectedGrid, setSelectedGrid] = useState([]);
  const [allCllicked, setAllClicked] = useState(false);
  const boardSize = [
    [1, 0, 1],
    [0, 1, 0],
    [1, 0, 1],
  ];

  useEffect(() => {
    // check whether all grid are selected
    if (selectedGrid.length === boardSize.flat(1).filter((el) => el).length) {
      setAllClicked(true);
    }

    // reverse the color when all grids are selected
    if (allCllicked && selectedGrid.length > 0) {
      const intervalId = setTimeout(() => {
        const deletedGrids = selectedGrid.slice(0, -1);
        setSelectedGrid(deletedGrids);
      }, 1000);

      return () => clearTimeout(intervalId);
    }

    // set to default when the reversing process is completed
    if (!selectedGrid.length) setAllClicked(false);
  }, [allCllicked, selectedGrid]);

  return (
    <div className="h-screen grid place-items-center">
      <div
        className="grid w-2xs gap-2"
        style={{
          gridTemplateColumns: `repeat(${boardSize.length}, 1fr)`,
        }}
      >
        {boardSize
          .flat(1)
          .map((el, i) =>
            el ? (
              <Grid
                key={i}
                fn={() => setSelectedGrid((prev) => [...prev, i])}
                selectedGrid={selectedGrid}
                index={i}
              />
            ) : (
              <div key={i}></div>
            )
          )}
      </div>
    </div>
  );
};

export default GridLights;
