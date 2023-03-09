import { useState } from "react";

function Folder({ explorer }) {
  const [expand, setExpand] = useState(true);
  const [showInput, setShowInput] = useState({
    visible: false,
    isFolder: null,
  });

  const handleNewFolder = (e, isFolder) => {
    e.stopPropagation();
    setExpand(false);
    setShowInput({
      visible: true,
      isFolder,
    });
  };

  if (explorer.isFolder) {
    return (
      <div className="-5">
        <div
          className="w-[300px] flex justify-between items-center mt-1 p-2 bg-slate-300 cursor-default"
          onClick={() => setExpand(!expand)}>
          <span>📁 {explorer.name}</span>

          <div className="flex gap-1">
            <button
              className="px-2 py-1 bg-white rounded cursor-pointer hover:bg-slate-100 hover:duration-300"
              onClick={(e) => handleNewFolder(e, true)}>
              Folder +
            </button>
            <button
              className="px-2 py-1 bg-white rounded cursor-pointer hover:bg-slate-100 hover:duration-300"
              onClick={(e) => handleNewFolder(e, false)}>
              File +
            </button>
          </div>
        </div>

        <div className={`${expand ? "hidden" : "block"} pl-5`}>
          {showInput.visible && (
            <div className="p-2 my-1 w-[300px] flex justify-between items-center gap-2">
              <span>{showInput.isFolder ? "📁" : "📄"}</span>
              <input
                type="text"
                onBlur={() => setShowInput({ ...showInput, visible: false })}
                className=" border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2"
                autoFocus
              />
            </div>
          )}
          {explorer.items.map((exp) => {
            return <Folder explorer={exp} key={exp.id} />;
          })}
        </div>
      </div>
    );
  } else {
    return (
      <div className="px-2 py-1">
        <span>📄 {explorer.name}</span>
      </div>
    );
  }
}

export default Folder;
