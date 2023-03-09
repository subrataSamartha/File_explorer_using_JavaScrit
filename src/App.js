import { useState } from "react";
import "./App.css";
import Folder from "./components/Folder";
import explorer from "./data/foldeData";
import useTraaverseTree from "./hooks/use-traverse-tree";

function App() {
  const [explorerData, setExplorerData] = useState(explorer);
  console.log(explorerData);
  const { insertNode } = useTraaverseTree();
  const handleInsertNode = (folderId, item, isFolder) => {
    const finalTree = insertNode(explorerData, folderId, item, isFolder);
    setExplorerData(finalTree);
  };
  return (
    <div className="m-5">
      <h1 className="mb-5 text-2xl font-bold">File Explorer</h1>
      <Folder handleInsertNode={handleInsertNode} explorer={explorerData} />
    </div>
  );
}

export default App;
