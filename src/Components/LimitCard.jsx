import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { format } from "date-fns";

const LimitCard = () => {
  const [volunteers, setVolunteers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchAllVolunteers();
  }, []);

  const fetchAllVolunteers = async () => {
    try {
      const { data } = await axios.get(
        `${import.meta.env.VITE_API_URL}/allVolunteer/limit`
      );
      setVolunteers(data);
      setError(null);
    } catch (err) {
      setError("Failed to fetch volunteers. Please try again later.");
      console.error("Error fetching volunteers:", err);
    }
  };

  return (
    <div className="mx-auto container px-3">
      <h1 className="text-3xl font-bold text-sky-400 my-8">
        Volunteer Needs Now
      </h1>

      {error && <p className="text-red-500 text-sm mt-4">{error}</p>}

      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-8">
        {volunteers.map((volunteer) => {
          const { _id, thumbnail, title, category, deadline } = volunteer;

          return (
            <Link
              key={_id}
              to={`/allVolunteer/${_id}`}
              className="w-full max-w-sm px-4 py-3 bg-white rounded-md shadow-md hover:scale-[1.05] transition-all"
            >
              <div className="relative w-full h-40 overflow-hidden rounded-md">
                <img
                  src={thumbnail}
                  alt={title}
                  className="object-cover w-full h-full"
                />
              </div>

              <div className="mt-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-light text-gray-500">
                    Deadline: {deadline ? format(new Date(deadline), "P") : "N/A"}
                  </span>
                  <span className="px-3 py-1 text-[10px] text-white uppercase bg-blue-500 rounded-full">
                    {category}
                  </span>
                </div>

                <h1 className="mt-2 text-lg font-semibold text-gray-800">
                  {title}
                </h1>

                <div className="mt-4">
                  <button className="px-3 py-2 text-sm font-medium text-white bg-sky-400 rounded-lg hover:bg-sky-500">
                    View Details
                  </button>
                </div>
              </div>
            </Link>
          );
        })}
      </div>

      <div className="mt-7">
        <Link
          to="/allVolunteer"
          className="w-1/2 px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 bg-gray-500 rounded-lg shrink-0 sm:w-auto hover:bg-sky-400"
        >
          See All Volunteers
        </Link>
      </div>
    </div>
  );
};

export default LimitCard;
