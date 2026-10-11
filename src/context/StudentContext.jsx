
import { createContext, useEffect, useState } from "react";
import initialStudents from "../data/students.js";

export const StudentContext = createContext(null);

export function StudentProvider({ children }) {
  const [students, setStudents] = useState(() => {
    try {
      const saved = localStorage.getItem("students");
      return saved ? JSON.parse(saved) : initialStudents;
    } catch {
      return initialStudents;
    }
  });

  const [favourites, setFavourites] = useState(() => {
    try {
      const saved = localStorage.getItem("favourites");
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("students", JSON.stringify(students));
  }, [students]);

  useEffect(() => {
    localStorage.setItem("favourites", JSON.stringify(favourites));
  }, [favourites]);

  function addStudent(name, rollNo) {
    const exists = students.some(
      (student) =>
        student.rollNo.trim().toLowerCase() ===
        rollNo.trim().toLowerCase()
    );

    if (exists) return false;

    setStudents((previous) => [
      ...previous,
      {
        id: Date.now(),
        name: name.trim(),
        rollNo: rollNo.trim(),
      },
    ]);

    return true;
  }

  function deleteStudent(studentId) {
    setStudents((previous) =>
      previous.filter((student) => student.id !== studentId)
    );

    setFavourites((previous) =>
      previous.filter((student) => student.id !== studentId)
    );
  }

  function addFavourite(student) {
    setFavourites((previous) =>
      previous.some((item) => item.id === student.id)
        ? previous
        : [...previous, student]
    );
  }

  function removeFavourite(studentId) {
    setFavourites((previous) =>
      previous.filter((student) => student.id !== studentId)
    );
  }

  return (
    <StudentContext.Provider
      value={{
        students,
        favourites,
        addStudent,
        deleteStudent,
        addFavourite,
        removeFavourite,
      }}
    >
      {children}
    </StudentContext.Provider>
  );
}
