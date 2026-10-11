
import { useContext } from "react";
import { Link } from "react-router-dom";
import { StudentContext } from "../context/StudentContext";

function Dashboard() {
  const { students, favourites } = useContext(StudentContext);

  const stats = [
    {
      title: "Total Students",
      count: students.length,
      color: "bg-blue-100 text-blue-700",
    },
    {
      title: "Favourite Students",
      count: favourites.length,
      color: "bg-pink-100 text-pink-700",
    },
    {
      title: "Not Favourites",
      count: students.filter(
        (student) =>
          !favourites.some((item) => item.id === student.id)
      ).length,
      color: "bg-orange-100 text-orange-700",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-10 sm:px-8">
      <div className="mx-auto max-w-5xl">
        {/* Dashboard Heading */}
        <h1 className="text-3xl font-bold text-gray-800">
          Student Dashboard
        </h1>

        <p className="mb-8 mt-2 text-gray-600">
          Manage your students and favourite list in one place.
        </p>

        {/* Statistics Cards */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {stats.map((stat) => (
            <div
              key={stat.title}
              className="rounded-xl bg-white p-6 shadow-sm transition hover:shadow-md"
            >
              <p className="mb-4 text-sm font-medium text-gray-500">
                {stat.title}
              </p>

              <p
                className={`inline-flex rounded-lg px-4 py-2 text-3xl font-bold ${stat.color}`}
              >
                {stat.count}
              </p>
            </div>
          ))}
        </div>

        {/* Navigation Section */}
        <section className="mt-8 rounded-xl bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-gray-800">
            Manage Students
          </h2>

          <p className="mb-5 mt-2 text-gray-600">
            Browse the student list or view your saved favourites.
          </p>

          <div className="flex flex-wrap gap-3">
            <Link
              to="/students"
              className="inline-block rounded-lg bg-blue-600 px-5 py-3 font-medium text-white transition hover:bg-blue-700"
            >
              View Students
            </Link>

            <Link
              to="/favourites"
              className="inline-block rounded-lg bg-pink-600 px-5 py-3 font-medium text-white transition hover:bg-pink-700"
            >
              View Favourites
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Dashboard;
