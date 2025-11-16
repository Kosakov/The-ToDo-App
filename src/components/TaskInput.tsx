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
    <section className="bg-blue-400">
      <h1>What is your next task?</h1>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => {
          handleInput(e);
        }}
        className="m-3 border-2 rounded-md"
      />
      <button
        className="cursor-pointer border-2 rounded-md"
        onClick={() => {
          handleAddTask();
        }}
      >
        Add Task
      </button>
    </section>
  );
}
