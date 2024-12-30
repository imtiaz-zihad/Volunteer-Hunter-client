import React from "react";
import { Link } from "react-router-dom";
import { format } from "date-fns";

const VolunteerCard = ({ volunteer }) => {
  const {
    _id,
    thumbnail,
    title,
    description,
    category,
    location,
    volunteersNeeded,
    deadline,
    organizerName,
    organizerEmail,
  } = volunteer || {};

  return (
    <Link
      key={_id}
      to={`/allVolunteer/${_id}`} // Unique identifier for dynamic routing
      className="w-full max-w-sm px-4 py-3 bg-white rounded-md shadow-md hover:scale-[1.05] transition-all"
    >
      {/* Thumbnail */}
      <div className="relative w-full h-40 overflow-hidden rounded-md">
        <img
          src={thumbnail}
          alt={title}
          className="object-cover w-full h-full"
        />
      </div>

      {/* Details */}
      <div className="mt-3">
        {/* Header */}
        <div className="flex items-center justify-between">
          <span className="text-xs font-light text-gray-500">
            Deadline: {format(new Date(deadline), "P")}
          </span>
          <span className="px-3 py-1 text-[10px] text-white uppercase bg-blue-500 rounded-full">
            {category}
          </span>
        </div>

        {/* Title */}
        <h1 className="mt-2 text-lg font-semibold text-gray-800">{title}</h1>

        {/* View Details Button */}
        <div className="mt-4">
          <Link
            to={`/allVolunteer/${_id}`}
            className="px-3 py-2 text-sm font-medium text-white bg-sky-400 rounded-lg hover:bg-sky-500"
          >
            View Details
          </Link>
        </div>
      </div>
    </Link>
  );
};

export default VolunteerCard;
