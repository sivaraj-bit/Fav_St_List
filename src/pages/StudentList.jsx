
import { useContext, useMemo, useState } from "react";
import { StudentContext } from "../context/StudentContext";

function StudentList() {
  const {
    students,
    favourites,
    addStudent,
    deleteStudent,
    addFavourite,
    removeFavourite,
  } = useContext(StudentContext);

  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("all");
  const [sortBy, setSortBy] = useState("name-asc");

  const filteredStudents = useMemo(() => {
    const result = students.filter((student) => {
      const matchesSearch =
        student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        student.rollNo.toLowerCase().includes(searchTerm.toLowerCase());

      const isFavourite = favourites.some(
        (item) => item.id === student.id
      );

      const matchesFilter =
        filter === "all" ||
        (filter === "favourites" && isFavourite) ||
        (filter === "not-favourites" && !isFavourite);

      return matchesSearch && matchesFilter;
    });

    result.sort((a, b) => {
      switch (sortBy) {
        case "name-asc":
          return a.name.localeCompare(b.name);
        case "name-desc":
          return b.name.localeCompare(a.name);
        case "roll-asc":
          return a.rollNo.localeCompare(b.rollNo, undefined, {
            numeric: true,
          });
        case "roll-desc":
          return b.rollNo.localeCompare(a.rollNo, undefined, {
            numeric: true,
          });
        default:
          return 0;
      }
    });

    return result;
  }, [students, favourites, searchTerm, filter, sortBy]);

  function handleAddStudent() {
    const name = prompt("Enter student name:");
    if (name === null || !name.trim()) return;

    const rollNo = prompt("Enter student roll number:");
    if (rollNo === null || !rollNo.trim()) return;

    const success = addStudent(name.trim(), rollNo.trim());

    if (success) {
      alert("Student added successfully!");
      setSearchTerm("");
      setFilter("all");
      setSortBy("name-asc");
    } else {
      alert("This roll number already exists!");
    }
  }

  function handleDeleteStudent(student) {
    const confirmed = window.confirm(
      `Are you sure you want to delete ${student.name}?`
    );

    if (confirmed) {
      deleteStudent(student.id);
    }
  }

  function resetFilters() {
    setSearchTerm("");
    setFilter("all");
    setSortBy("name-asc");
  }

  return (
    <main className="min-h-screen bg-gray-50 px-4 py-10 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">
              Student List
            </h1>
            <p className="mt-2 text-gray-600">
              Add, search, sort, and manage your students.
            </p>
          </div>

          <button
            type="button"
            onClick={handleAddStudent}
            className="rounded-lg bg-green-600 px-5 py-3 font-semibold text-white hover:bg-green-700"
          >
            + Add New Student
          </button>
        </div>

        <div className="mb-8 mt-6 grid grid-cols-1 gap-4 md:grid-cols-3">
          <input
            type="text"
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
            placeholder="Search name or roll number..."
            className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 outline-none focus:border-blue-500"
          />

          <select
            value={filter}
            onChange={(event) => setFilter(event.target.value)}
            className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3"
          >
            <option value="all">All Students</option>
            <option value="favourites">Favourites Only</option>
            <option value="not-favourites">Not Favourites</option>
          </select>

          <select
            value={sortBy}
            onChange={(event) => setSortBy(event.target.value)}
            className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3"
          >
            <option value="name-asc">Name: A to Z</option>
            <option value="name-desc">Name: Z to A</option>
            <option value="roll-asc">Roll Number: Low to High</option>
            <option value="roll-desc">Roll Number: High to Low</option>
          </select>
        </div>

        <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
          <p className="text-sm text-gray-600">
            Showing {filteredStudents.length} of {students.length} students
          </p>

          <button
            type="button"
            onClick={resetFilters}
            className="rounded-lg border border-gray-300 px-4 py-2 text-sm hover:bg-gray-100"
          >
            Reset Search and Filters
          </button>
        </div>

        {filteredStudents.length === 0 ? (
          <div className="rounded-xl bg-white p-10 text-center shadow-sm">
            <h2 className="text-xl font-semibold text-gray-800">
              No students found
            </h2>
            <p className="mt-2 text-gray-500">
              Try another search or add a new student.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filteredStudents.map((student) => {
              const isFavourite = favourites.some(
                (item) => item.id === student.id
              );

              return (
                <article
                  key={student.id}
                  className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-lg font-bold text-blue-700">
                    {student.name.charAt(0).toUpperCase()}
                  </div>

                  <h2 className="text-xl font-semibold text-gray-800">
                    {student.name}
                  </h2>

                  <p className="mt-2 text-sm text-gray-500">
                    Roll Number: {student.rollNo}
                  </p>

                  <button
                    type="button"
                    onClick={() =>
                      isFavourite
                        ? removeFavourite(student.id)
                        : addFavourite(student)
                    }
                    className={`mt-5 w-full rounded-lg px-4 py-3 font-medium ${
                      isFavourite
                        ? "bg-gray-100 text-gray-700 hover:bg-gray-200"
                        : "bg-blue-600 text-white hover:bg-blue-700"
                    }`}
                  >
                    {isFavourite
                      ? "✓ Remove Favourite"
                      : "♡ Add Favourite"}
                  </button>

                  <button
                    type="button"
                    onClick={() => handleDeleteStudent(student)}
                    className="mt-3 w-full rounded-lg bg-red-600 px-4 py-3 font-medium text-white hover:bg-red-700"
                  >
                    Delete Student
                  </button>
                </article>
              );
            })}
          </div>
        )}
      </div>
    </main>
  );
}

export default StudentList;
