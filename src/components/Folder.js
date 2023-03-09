import { useState } from "react";

function Folder({ explorer }) {
  const [expand, setExpand] = useState(true);

  if (explorer.isFolder) {
    return (
      <div className="-5">
        <div
          className="w-[300px] mt-1 p-2 bg-slate-300 cursor-pointer"
          onClick={() => setExpand(!expand)}>
          <span>📁 {explorer.name}</span>
        </div>

        <div className={`${expand ? "hidden" : "block"} pl-5`}>
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
