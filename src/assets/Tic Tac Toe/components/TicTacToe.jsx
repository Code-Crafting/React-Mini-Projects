import { useTicTacToe } from "../hooks/useTicTacToe";

const TicTacToe = () => {
  const [handleInput, getMsg, handleReset, handleClick, board, gridNum] =
    useTicTacToe();
  return (
    <div className="min-h-dvh flex flex-col gap-4 items-center justify-center">
      {/* Board Size */}
      <div>
        <label htmlFor="boardSize" className="text-2xl">
          Board Size
        </label>
        <input
          type="number"
          id="boardSize"
          onKeyUp={(e) => handleInput(e)}
          className="border-2 ml-4"
        />
      </div>

      {/* Remarks and Reset */}
      <div className="flex justify-between items-center gap-12">
        <h1 className="text-2xl">{getMsg()}</h1>
        <button
          className="border-2 px-4 py-1 bg-gray-300 rounded-md font-semibold cursor-pointer"
          onClick={handleReset}
        >
          Reset
        </button>
      </div>

      {/* Board */}
      <div
        className="grid gap-1"
        style={{
          gridTemplateColumns: `repeat(${gridNum ? gridNum : 3}, 1fr)`,
        }}
      >
        {board.map((el, i) => {
          return (
            <button
              className={`w-24 aspect-square ${
                el && "bg-gray-300"
              } border-2 cursor-pointer rounded-md grid place-items-center text-4xl `}
              key={i}
              onClick={() => handleClick(i)}
              disabled={el && true}
            >
              {el}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default TicTacToe;
