import { SwitchType } from "@/types/switch";

const Switcher = ({view, setView}: SwitchType) => {
  return (
    <div className="bg-gray-300 text-sm text-gray-500 leading-none border-2 border-gray-200 rounded-full inline-flex">
      <button
        className={`inline-flex items-center transition-colors duration-300 ease-in focus:outline-none hover:text-blue-400 focus:text-blue-400 rounded-full px-4 py-2 ${
          view === "list" ? "active" : ""
        }`}
        id="list"
        onClick={() => setView("list")}
      >
        <span>List</span>
      </button>
      <button
        className={`inline-flex items-center transition-colors duration-300 ease-in focus:outline-none hover:text-blue-400 focus:text-blue-400 rounded-full px-4 py-2 ${
          view === "grid" ? "active" : ""
        }`}
        id="grid"
        onClick={() => setView("grid")}
      >
        <span>Grid</span>
      </button>
    </div>
  );
};

export default Switcher;
