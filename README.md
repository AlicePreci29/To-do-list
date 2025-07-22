To-Do List Web App

A simple and clean **To-Do List** application built using HTML, CSS, and JavaScript. It allows users to add, check off, and delete tasks, with persistent storage using the browser's `localStorage`.

Features

- Add new tasks
- Mark tasks as completed
- Delete individual tasks
- Stores tasks in browser local storage (data persists even after refresh)
- Visual indication of completed tasks with a checkmark
- Responsive and user-friendly design

Project Structure


project-folder/
│
├── to-do.html         # Main HTML file
├── list.css           # CSS styles for layout and design
├── script.js          # JavaScript for interactivity and local storage
└── image/
├── circle.png     # Icon used for unchecked tasks
└── tick.jpg       # Icon used for checked tasks

 Note: Ensure `circle.png` and `tick.jpg` are present inside an `image/` folder in the project directory for the checkbox icons to render correctly.

 How to Use

1. Clone or download the repository.
2. Open `to-do.html` in a web browser.
3. Enter your task in the input field and click **Add**.
4. Click on a task to mark it as completed (it will get a tick and a line-through style).
5. Click the **×** icon beside a task to delete it.

 How Data is Stored

- The task list is saved in the browser's `localStorage`.
- All changes (add, check/uncheck, delete) automatically update the stored data.
- On reload, tasks are loaded back into the list.
 Key JavaScript Concepts Used

- DOM manipulation (`document.createElement`, `appendChild`, `addEventListener`)
- Local storage API (`localStorage.setItem`, `localStorage.getItem`)
- Event delegation for managing clicks on dynamically created list items

 UI Overview

- Soft white and pink theme using the **Poppins** font
- Responsive design that works well on all screen sizes
- Checkmark icons change based on task status (unchecked/checked)
- Hover effects for better UX on delete icons

 Future Improvements

- Task due dates and reminders
- Task categories or priorities
- Drag and drop to reorder tasks
- Dark mode toggle

 Author

This project was created as part of a beginner-friendly front-end web development learning exercise.
