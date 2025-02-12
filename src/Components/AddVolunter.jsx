import React, { useContext, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import { toast } from "react-hot-toast";
import { AuthContext } from "../AuthProvider/AuthContext";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";
const AddVolunter = () => {
  const [startDate, setStartDate] = useState(new Date());
  const { user } = useContext(AuthContext);

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const thumbnail = form.thumbnail.value;
    const title = form.title.value;
    const description = form.description.value;
    const category = form.category.value;
    const location = form.location.value;
    const volunteersNeeded = parseInt(form.volunteersNeeded.value, 10);
    const deadline = startDate;

    const formData = {
      thumbnail,
      title,
      description,
      category,
      location,
      volunteersNeeded,
      deadline,
      organizer: {
        email: user?.email,
        name: user?.displayName,
        photo: user?.photoURL,
      },
    };
    try {
      // 1. make a post request
      await axios.post(
        `${import.meta.env.VITE_API_URL}/addVolunteer`,
        formData
      );
      // 2. Reset form
      form.reset();
      // 3. Show toast and navigate
      toast.success("Data Added Successfully!!!");
      navigate("/my-posted-volunteer");
    } catch (err) {
      // console.log(err);
      toast.error(err.message);
    }
  };

  return (
    <div className="p-4 sm:p-6 lg:p-8 bg-gray-50 min-h-screen">
    <Helmet>
      <title>Add Volunteer</title>
    </Helmet>
    <form
      className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-lg space-y-6"
      onSubmit={handleSubmit}
    >
      <h2 className="text-2xl text-center font-bold mb-4">
        Make Volunteer Need Post
      </h2>
  
      {/* Parent Grid for better responsiveness */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Thumbnail */}
        <div>
          <label htmlFor="thumbnail" className="block font-medium text-gray-700">
            Thumbnail (URL)
          </label>
          <input
            type="url"
            id="thumbnail"
            name="thumbnail"
            className="mt-1 block w-full p-2 border rounded-md focus:ring focus:ring-blue-300"
          />
        </div>
  
        {/* Post Title */}
        <div>
          <label htmlFor="title" className="block font-medium text-gray-700">
            Post Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            className="mt-1 block w-full p-2 border rounded-md focus:ring focus:ring-blue-300"
          />
        </div>
      </div>
  
      {/* Description */}
      <div>
        <label htmlFor="description" className="block font-medium text-gray-700">
          Description
        </label>
        <textarea
          id="description"
          name="description"
          rows="4"
          className="mt-1 block w-full p-2 border rounded-md focus:ring focus:ring-blue-300"
        />
      </div>
  
      {/* Grid for Category and Location */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Category */}
        <div>
          <label htmlFor="category" className="block font-medium text-gray-700">
            Category
          </label>
          <select
            name="category"
            id="category"
            className="mt-1 block w-full p-2 border rounded-md focus:ring focus:ring-blue-300"
          >
            <option value="HealthCare">HealthCare</option>
            <option value="Education">Education</option>
            <option value="Social Service">Social Service</option>
            <option value="Animal Welfare">Animal Welfare</option>
          </select>
        </div>
  
        {/* Location */}
        <div>
          <label htmlFor="location" className="block font-medium text-gray-700">
            Location
          </label>
          <input
            type="text"
            id="location"
            name="location"
            className="mt-1 block w-full p-2 border rounded-md focus:ring focus:ring-blue-300"
          />
        </div>
      </div>
  
      {/* Grid for Volunteers Needed and Deadline */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Volunteers Needed */}
        <div>
          <label
            htmlFor="volunteersNeeded"
            className="block font-medium text-gray-700"
          >
            No. of Volunteers Needed
          </label>
          <input
            type="number"
            id="volunteersNeeded"
            name="volunteersNeeded"
            className="mt-1 block w-full p-2 border rounded-md focus:ring focus:ring-blue-300"
          />
        </div>
  
        {/* Deadline */}
        <div>
          <label className="block font-medium text-gray-700">Deadline</label>
          <DatePicker
            className="w-full p-2 border rounded-md"
            selected={startDate}
            onChange={(date) => setStartDate(date)}
          />
        </div>
      </div>
  
      {/* Organizer Info */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Organizer Name */}
        <div>
          <label
            htmlFor="organizerName"
            className="block font-medium text-gray-700"
          >
            Organizer Name
          </label>
          <input
            type="text"
            defaultValue={user?.displayName}
            id="organizerName"
            readOnly
            name="organizerName"
            className="mt-1 block w-full p-2 bg-gray-100 border rounded-md"
          />
        </div>
  
        {/* Organizer Email */}
        <div>
          <label
            htmlFor="organizerEmail"
            className="block font-medium text-gray-700"
          >
            Organizer Email
          </label>
          <input
            type="email"
            defaultValue={user?.email}
            id="organizerEmail"
            name="organizerEmail"
            readOnly
            className="mt-1 block w-full p-2 bg-gray-100 border rounded-md"
          />
        </div>
      </div>
  
      {/* Submit Button */}
      <div>
        <button
          type="submit"
          className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:ring focus:ring-blue-300"
        >
          Add Post
        </button>
      </div>
    </form>
  </div>
  
  );
};

export default AddVolunter;
