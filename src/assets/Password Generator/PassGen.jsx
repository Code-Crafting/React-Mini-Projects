import CheckBoxInput from "./CheckBoxInput";

function PassGen({ checkboxData }) {
  return (
    <div className="min-w-2xl p-4 bg-gray-800 border text-white rounded-lg">
      {/* password area */}
      <div className="flex justify-between py-2">
        <p className="text-2xl font-medium">545454545</p>
        {/* copy btn */}
        <button className="text-sm bg-blue-700 px-2 rounded-lg font-medium tracking-wider hover:cursor-pointer">
          {" "}
          COPY{" "}
        </button>
      </div>

      {/* modifier area */}
      <div className="flex flex-col gap-4">
        <div className="flex justify-between ">
          <p>Character Length </p>
          <p>8</p>
        </div>

        <input type="range" className="w-full" />

        <div className="grid  grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-2">
          {checkboxData.map((el) => {
            return (
              <CheckBoxInput inputName={el.title} id={el.id} key={el.id} />
            );
          })}
        </div>

        <div className="flex justify-between  mb-2">
          <p>Strength:</p>
          <p>Medium</p>
        </div>
      </div>

      {/* generate btn */}
      <button className="w-full bg-blue-700 py-4 rounded-lg hover:cursor-pointer">
        Generate Password
      </button>
    </div>
  );
}

export default PassGen;
