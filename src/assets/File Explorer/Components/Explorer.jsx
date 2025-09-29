import { useState } from "react";

function Explorer({ expData }) {
  const [explorerData, setExplorerData] = useState(expData);
  const [showExplorer, setShowExplorer] = useState(false);

  if (explorerData.isFolder) {
    return (
      <>
        <div className="min-w-2xs bg-gray-300 py-1 flex justify-between items-center px-1">
          <div
            onClick={() => setShowExplorer(!showExplorer)}
            className="hover:cursor-pointer"
          >
            📁
            {explorerData.name}
          </div>

          {/* btns */}
          <div className="flex gap-2 text-sm">
            <div className="btn">Folder+</div>
            <div className="btn">File+</div>
          </div>
        </div>

        {/* folder data */}
        <div className={`${showExplorer ? "block" : "hidden"}`}>
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
