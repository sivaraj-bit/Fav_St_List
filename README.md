# 🎓 Favourite Student List

A responsive student management web application built with **React, JavaScript, React Router, Context API, and Tailwind CSS**. The application allows users to manage students, search and sort student records, and maintain a favourite student list.

## 🌐 Live Demo

- **Live Website:** https://fav-st-list.vercel.app/
- **GitHub Repository:** [Fav_st_List](https://github.com/sivaraj-bit/Fav_st_List)

## 📌 About the Project

Favourite Student List is a React application developed to practise component-based architecture, state management, client-side routing, and dynamic rendering.

It provides a simple interface to add, view, search, sort, and delete student records. Users can also add students to their favourites and remove them whenever needed.

Student and favourite data are stored in the browser's `localStorage`, allowing the data to persist after refreshing the page.

## ✨ Features

- **Student Management:** Add and delete student records.
- **Favourite Management:** Add students to favourites and remove them.
- **Duplicate Prevention:** Prevent duplicate roll numbers and favourite entries.
- **Search Students:** Search by student name or roll number.
- **Filter Students:** View all students, favourites only, or students who are not favourites.
- **Sort Students:** Sort by name or roll number in ascending or descending order.
- **Persistent Storage:** Save student and favourite data using `localStorage`.
- **React Router:** Navigate between pages without full-page reloads.
- **Responsive Design:** Layout adapts to desktop, tablet, and mobile screens.
- **Empty States:** Display helpful messages when no students or favourites are available.

## 🛠️ Technologies Used

- **React** – Build reusable UI components.
- **JavaScript (ES6+)** – Application logic and event handling.
- **React Router DOM** – Client-side navigation.
- **Context API** – Share student and favourite data across components.
- **React Hooks** – `useState`, `useContext`, `useEffect`, and `useMemo`.
- **Tailwind CSS** – Responsive styling and UI design.
- **Vite** – Development server and production build tool.
- **Git and GitHub** – Version control and source code hosting.
- **localStorage** – Persist application data in the browser.

## 📂 Project Structure

```text
Fav_st_List/
├── public/
│   └── favicon.png
├── src/
│   ├── components/
│   │   └── Navbar.jsx
│   ├── context/
│   │   └── StudentContext.jsx
│   ├── data/
│   │   └── students.js
│   ├── pages/
│   │   ├── Dashboard.jsx
│   │   ├── StudentList.jsx
│   │   └── FavouriteStudents.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md
```

## 🚀 Getting Started

Follow these steps to run the project locally.

### Prerequisites

Make sure you have installed:

- [Node.js](https://nodejs.org/)
- npm (included with Node.js)
- Git

### 1. Clone the Repository

```bash
git clone https://github.com/sivaraj-bit/Fav_st_List.git
```

### 2. Navigate to the Project Directory

```bash
cd Fav_st_List
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Start the Development Server

```bash
npm run dev
```

Open the local URL shown in your terminal, usually:

```text
http://localhost:5173/
```

### 5. Create a Production Build

```bash
npm run build
```

Vite generates the production-ready files inside the `dist/` directory.

### 6. Preview the Production Build

```bash
npm run preview
```

Open the local URL displayed in the terminal to preview the production build.

## 🧭 Application Pages

### Dashboard
The main landing page for the application, providing access to the student management features.

### Student List
View all student records, add new students, search, filter, sort, manage favourites, and delete student records.

### Favourite Students
View all favourite students, remove students from favourites, and navigate back to the student list when the favourites list is empty.

## 🧠 React Concepts Practised

- Functional components
- Props and component composition
- `useState` for managing component state
- `useContext` and `createContext` for shared state
- `useEffect` for synchronizing state with `localStorage`
- `useMemo` for memoizing filtered and sorted student lists
- React Router routes and navigation
- JavaScript array methods such as `map`, `filter`, and `some`
- Conditional rendering
- Event handling
- Responsive UI development with Tailwind CSS

## 💾 Data Persistence

The application stores student records and favourite student records in the browser's `localStorage`.

This means saved data remains available after a page refresh in the same browser. The data is browser-specific and is not synchronized between different devices.

## 🚀 Deployment

This project can be deployed using [Vercel](https://vercel.com/).

Recommended settings for a standard Vite React project:

- **Framework Preset:** Vite
- **Build Command:** `npm run build`
- **Output Directory:** `dist`
- **Install Command:** `npm install`

Connect the GitHub repository to Vercel and deploy the project. After successful deployment, add your live website URL to the **Live Demo** section above.

## 🎯 Project Objective

The objective of this project is to strengthen practical knowledge of React fundamentals, global state management, routing, reusable components, array operations, browser storage, and responsive design through a student management application.

## 👨‍💻 Author

**Sivaraj G**

- GitHub: [@sivaraj-bit](https://github.com/sivaraj-bit)

---

⭐ If you find this project useful, feel free to explore the repository and its implementation.
