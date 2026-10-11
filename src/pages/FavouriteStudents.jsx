
import { useContext } from "react";
import { Link } from "react-router-dom";
import { StudentContext } from "../context/StudentContext";

function FavouriteStudents() {
  const { favourites, removeFavourite } = useContext(StudentContext);

  return (
    <main className="min-h-screen bg-gray-50 px-4 py-10 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <h1 className="text-3xl font-bold text-gray-800">
          Favourite Students
        </h1>

        <p className="mb-8 mt-2 text-gray-600">
          You have {favourites.length} favourite student(s).
        </p>

        {favourites.length === 0 ? (
          <div className="rounded-xl bg-white p-10 text-center shadow-sm">
            <h2 className="text-xl font-semibold text-gray-800">
              No favourites yet
            </h2>

            <p className="mb-5 mt-2 text-gray-500">
              Add students from the student list to see them here.
            </p>

            <Link
              to="/students"
              className="inline-block rounded-lg bg-blue-600 px-5 py-3 font-medium text-white hover:bg-blue-700"
            >
              Browse Students
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {favourites.map((student) => (
              <article
                key={student.id}
                className="rounded-xl bg-white p-6 shadow-sm transition hover:shadow-md"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-pink-100 text-lg font-bold text-pink-700">
                  {student.name.charAt(0)}
                </div>

                <h2 className="text-xl font-semibold text-gray-800">
                  {student.name}
                </h2>

                <p className="mt-2 text-sm text-gray-500">
                  Roll Number: {student.rollNo}
                </p>

                <button
                  type="button"
                  onClick={() => removeFavourite(student.id)}
                  className="mt-5 w-full rounded-lg bg-red-50 px-4 py-3 font-medium text-red-600 hover:bg-red-100"
                >
                  Remove Favourite
                </button>
              </article>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}

export default FavouriteStudents;
