import { useEffect, useState } from "react";
import axios from "axios";
import VolunteerCard from "./VolunteerCard";
import { Helmet } from "react-helmet";

const AllVolunteer = () => {
  const [volunteers, setVolunteers] = useState([]);
  const [search, setSearch] = useState([]);
  useEffect(() => {
    const fetchAllVolunteers = async () => {
      const { data } = await axios.get(
        `${import.meta.env.VITE_API_URL}/all-Volunteer?search=${search}`
      );
      setVolunteers(data);
    };
    fetchAllVolunteers();
  }, [search]);

  return (
    <div className="container px-6 py-10 mx-auto min-h-[calc(100vh-306px)] flex flex-col justify-between">
       <Helmet>
        <title>All Volunteer</title>
      </Helmet>
      <div>
        <div>
          <form className="flex justify-end">
            <div className="flex p-1 overflow-hidden border rounded-lg w-80   focus-within:ring focus-within:ring-opacity-40 focus-within:border-blue-400 focus-within:ring-blue-300">
              <input
                className="px-6 py-2 text-gray-700 border-2 placeholder-gray-500 bg-white outline-none focus:placeholder-transparent"
                type="text"
                name="search"
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search By Title"
                aria-label="Enter Job Title"
              />
            </div>
          </form>
        </div>
        <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {volunteers.map((volunteer) => (
            <VolunteerCard key={volunteer._id} volunteer={volunteer} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllVolunteer;
