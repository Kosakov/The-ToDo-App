📝 The ToDo App — A Small React App That Gets the Job Done

The ToDo App is a clean and lightweight task manager built with React + TypeScript, structured to be beginner-friendly, easy to extend, and pleasant to maintain. It won't change the world… but it works reliably and looks good doing it.

🚀 Features

Add new tasks through a dedicated input component

Mark tasks as completed

Delete tasks

Each task gets a unique ID via a simple NewTask class

Clear, centralized state management using useState in the App component

🧩 Architecture

The app is split into simple, focused components:

App — holds the task list and main logic

TaskInput — manages its own local input state + receives addTask as a prop

TaskList — displays all tasks

TaskItem — represents a single task and handles its own interactions

This structure keeps components small, predictable, and easy to navigate.

🛠️ Tech Stack

React 18 + TypeScript

Vite for fast development

CSS (or any styling approach you prefer)

🎯 Why This Exists

Sometimes you just need a small, clean project where you can practice new concepts, experiment with architecture, and keep your thoughts organized. The ToDo App is exactly that — a compact sandbox with a professional structure.

📦 Getting Started
npm install
npm run dev

🧠 Planned Improvements

Filters: active / completed

Local storage persistence

More polished UI

❤️ Final Note

A small project, but built with intention — clean code, clear responsibilities, and a bit of personality. A simple React app that doesn’t try to be more than it is, yet still gets things done the right way.