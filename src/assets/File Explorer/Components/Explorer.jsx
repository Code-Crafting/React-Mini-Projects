import { useState } from "react";

function Explorer({ expData }) {
  const [explorerData, setExplorerData] = useState(expData);
  const [expand, setExpand] = useState(false);
  console.log(explorerData);

  const [showInput, setShowInput] = useState({
    visible: false,
    isFolder: null,
  });

  // show input field
  const handleShowInput = (isFolder) => {
    setExpand(true);
    setShowInput({ visible: true, isFolder: isFolder });
  };

  // add new folder or file
  const onAddData = (e, items) => {
    if (e.code === "Enter" && e.target.value) {
      // Logic
      const newData = {
        id: crypto.randomUUID(),
        name: e.target.value,
        isFolder: showInput.isFolder,
        items: [],
      };

      showInput.isFolder ? items.unshift(newData) : items.push(newData);

      setShowInput({ ...showInput, visible: false });
    }
  };

  if (explorerData.isFolder) {
    return (
      <>
        <div className="w-2xs bg-gray-300 py-1 flex justify-between items-center px-1 hover:cursor-pointer">
          <div onClick={() => setExpand(!expand)}>
            📁
            {explorerData.name}
          </div>

          {/* btns */}
          <div className="flex gap-2 text-sm">
            <div className="btn" onClick={() => handleShowInput(true)}>
              Folder+
            </div>
            <div className="btn" onClick={() => handleShowInput(false)}>
              File+
            </div>
          </div>
        </div>

        {/* inside a folder */}
        <div className={`${expand ? "block" : "hidden"}`}>
          {/* create folder/file */}
          {showInput.visible && (
            <span className="ml-4 mt-2">
              {showInput.isFolder ? "📁" : "📃"}
              <input
                type="text"
                className="border border-black"
                autoFocus
                onBlur={() => setShowInput({ ...showInput, visible: false })}
                onKeyDown={(e) => onAddData(e, explorerData.items)}
              />
            </span>
          )}
          {/* folder data */}
          {explorerData.items.map((el) => (
            <div key={el.id} className="ml-4 mt-2">
              <Explorer expData={el} />
            </div>
          ))}
        </div>
      </>
    );
  } else {
    return (
      <div>
        📃
        {explorerData.name}
      </div>
    );
  }
}
export default Explorer;
