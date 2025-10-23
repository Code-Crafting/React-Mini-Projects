import { folderData } from "../constants/folderData";
import Explorer from "./explorer";
function ExplorerCon() {
  return (
    <div className=" h-screen">
      <Explorer expData={folderData} />
    </div>
  );
}
export default ExplorerCon;
