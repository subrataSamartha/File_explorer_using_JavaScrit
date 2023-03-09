import { useState } from "react";
import "./App.css";
import Folder from "./components/Folder";
import explorer from "./data/foldeData";

function App() {
  const [explorerData, setExplorerData] = useState(explorer);
  console.log(explorerData);
  return (
    <div className="m-5">
      <h1 className="mb-5 text-2xl font-bold">File Explorer</h1>
      <Folder explorer={explorerData} />
    </div>
  );
}

export default App;
