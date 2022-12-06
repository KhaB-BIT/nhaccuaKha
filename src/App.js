import { useState } from "react";

function App() {
  const [value, setValue] = useState("");

  return (
    <div className="flex gap-8 justify-center items-center h-screen">
      <input
        type="text"
        className="border-blue-500 border outline-none w-[400px] px-4 py-2"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button className="bg-blue-400 rounded-md px-4 py-2 text-white">
        Add
      </button>
    </div>
  );
}

export default App;
