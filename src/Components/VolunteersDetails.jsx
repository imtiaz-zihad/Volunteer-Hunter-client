import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthContext";
import axios from "axios";
import { Helmet } from "react-helmet";
import toast from "react-hot-toast";

const VolunteersDetails = () => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const { id } = useParams();
  const [volunteer, setVolunteer] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [suggestion, setSuggestion] = useState("");

  useEffect(() => {
    fetchJobData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    
  }, [id]);

  const fetchJobData = async () => {
    try {
      const { data } = await axios.get(
        `${import.meta.env.VITE_API_URL}/allVolunteer/${id}`,{withCredentials: true}
      );
      setVolunteer(data);
    } catch (error) {
      console.error("Error fetching volunteer details:", error);
    }
  };

  const handleRequest = async () => {
    if (volunteersNeeded <= 0) {
      toast.error("No more volunteers are needed for this opportunity.");
      return;
    }
    const requestData = {
      thumbnail: volunteer.thumbnail,
      title: volunteer.title,
      description: volunteer.description,
      category: volunteer.category,
      location: volunteer.location,
      deadline: volunteer.deadline,
      organizerName: volunteer.organizerName,
      organizerEmail: volunteer.organizerEmail,
      volunteersNeeded: volunteer.volunteersNeeded,
      volunteerName: user?.displayName,
      volunteerEmail: user?.email,
      suggestion,
      status: "requested",
      volunteerPostId: volunteer._id,
    };

   

    try {
      await axios.post(
        `${import.meta.env.VITE_API_URL}/volunteerRequests`,
        requestData
      );
      
      toast.success("Request submitted successfully!");
      navigate('/my-posted-volunteer')
      setIsModalOpen(false);
      fetchJobData();
    } catch (error) {
      console.error("Error submitting request:", error);
      toast.error("Failed to submit request.");
    }
  };

  const {
    thumbnail,
    title,
    description,
    category,
    location,
    organizer,
    deadline,
    volunteersNeeded,
  } = volunteer || {};

  console.table({
    thumbnail,
    title,
    description,
    category,
    location,
    organizer,
    deadline,
    volunteersNeeded,
  });

  return (
    <div className="container mx-auto p-6">
      <Helmet>
        <title>Volunteer Details</title>
      </Helmet>
      <h2 className="text-4xl font-bold text-center text-sky-400 mb-8">
        Volunteer Opportunity Details
      </h2>

      <div className="flex flex-col lg:flex-row bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="w-full lg:w-1/2 h-64 lg:h-auto">
          <img
            src={thumbnail}
            alt={title}
            className="object-cover w-full h-full"
          />
        </div>

        <div className="w-full lg:w-1/2 p-6">
          <h1 className="text-3xl font-semibold text-gray-800">{title}</h1>
          <span className="inline-block mt-2 px-3 py-1 text-sm text-white bg-blue-500 rounded-full">
            {category}
          </span>
          <p className="mt-4 text-gray-600">{description}</p>
          <p className="mt-4 text-gray-600">
            <span className="font-bold">Location:</span> {location}
          </p>
          <p className="mt-4 text-gray-600">
            <span className="font-bold">Deadline:</span>{" "}
            {deadline ? new Date(deadline).toLocaleString() : ""}
          </p>
          <p className="mt-4 text-gray-600">
            <span className="font-bold">Volunteers Needed:</span>{" "}
            {volunteersNeeded}
          </p>

          <div className="mt-6">
            <h2 className="text-xl font-bold text-gray-800">Organizer Info</h2>
            <p className="mt-2 text-gray-600">
              <span className="font-bold">Name:</span> {organizer?.name}
            </p>
            <p className="mt-2 text-gray-600">
              <span className="font-bold">Email:</span>
              {organizer?.email}
            </p>
          </div>

          <button
            onClick={() => setIsModalOpen(true)}
            className="mt-6 px-5 py-2 text-sm font-medium text-white bg-gray-500 rounded-lg hover:bg-sky-400"
          >
            Be a Volunteer
          </button>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 overflow-y-auto">
    <div className="bg-white p-6 rounded-lg shadow-lg w-11/12 sm:w-10/12 md:w-8/12 lg:w-1/2 max-h-screen overflow-y-auto">
      <h2 className="text-2xl font-bold text-center mb-4">
        Volunteer Request Form
      </h2>
      <div className="space-y-4">
        {/* Thumbnail */}
        <p>
          <span className="font-bold">Thumbnail:</span>
          <img
            src={thumbnail}
            alt={title}
            className="w-full h-32 object-cover mt-2 rounded-md"
          />
        </p>

        {/* Title */}
        <p>
          <span className="font-bold">Title:</span> {title}
        </p>

        {/* Description */}
        <p>
          <span className="font-bold">Description:</span> {description}
        </p>

        {/* Category */}
        <p>
          <span className="font-bold">Category:</span> {category}
        </p>

        {/* Location */}
        <p>
          <span className="font-bold">Location:</span> {location}
        </p>

        {/* Deadline */}
        <p>
          <span className="font-bold">Deadline:</span>{" "}
          {deadline ? new Date(deadline).toLocaleString() : ""}
        </p>

        {/* Organizer Name */}
        <p>
          <span className="font-bold">Organizer Name:</span> {organizer?.name}
        </p>

        {/* Organizer Email */}
        <p>
          <span className="font-bold">Organizer Email:</span> {organizer?.email}
        </p>

        {/* Volunteer Name */}
        <p>
          <span className="font-bold">Volunteer Name:</span> {user?.displayName}
        </p>

        {/* Volunteer Email */}
        <p>
          <span className="font-bold">Volunteer Email:</span> {user?.email}
        </p>

        {/* Suggestion Textarea */}
        <textarea
          className="w-full p-2 border rounded focus:ring focus:ring-blue-300"
          placeholder="Your suggestion..."
          value={suggestion}
          onChange={(e) => setSuggestion(e.target.value)}
        ></textarea>
      </div>

      {/* Buttons */}
      <div className="flex justify-end mt-4 space-x-2">
        <button
          onClick={() => setIsModalOpen(false)}
          className="px-4 py-2 text-gray-600 bg-gray-200 rounded-lg hover:bg-gray-300"
        >
          Cancel
        </button>
        <button
          onClick={handleRequest}
          className="px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600"
        >
          Request
        </button>
      </div>
    </div>
  </div>
)}


    </div>
  );
};

export default VolunteersDetails;
