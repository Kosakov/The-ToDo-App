import { useState } from "react";
import type InputProps from "../interfaces/InputProps.interface";

export default function TaskInput({ addTask }: InputProps) {
  const [inputValue, setInputValue] = useState<string>("");
  function handleInput(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.value) {
      setInputValue(e.target.value);
    }
    return;
  }

  function handleAddTask() {
    if (inputValue.trim() === "") return;
    addTask(inputValue);
    setInputValue("");
  }

  return (
    <>
      <h2>What you have ToDo?</h2>
<section>
      <input
      name="taskInput"
        type="text"
        value={inputValue}
        onChange={(e) => {
          handleInput(e);
        }}
        placeholder="Type here..."
        className="max-w-120 bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
      />
      <button
        type="button"
        className="rounded-md bg-blue-600 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-blue-700 focus:shadow-none active:bg-blue-700 hover:bg-blue-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2"
        onClick={() => {
          handleAddTask();
        }}
      >
        Add
      </button>
    </section>
    </>
  );
}
