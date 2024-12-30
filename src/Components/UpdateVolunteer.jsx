import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthContext";
import axios from "axios";
import DatePicker from "react-datepicker";
import toast from "react-hot-toast";

const UpdateVolunteer = () => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const { id } = useParams();
  const [startDate, setStartDate] = useState(new Date());
  const [volunteer, setVolunteer] = useState({});
  useEffect(() => {
    fetchJobData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  const fetchJobData = async () => {
    const { data } = await axios.get(
      `${import.meta.env.VITE_API_URL}/allVolunteer/${id}`
    );
    setVolunteer(data);
    setStartDate(new Date(data.deadline));
  };
  const updateData = async (event) => {
    event.preventDefault();

    const form = event.target;
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
      await axios.put(
        `${import.meta.env.VITE_API_URL}/update-volunteer/${id}`,
        formData
      );
      // 2. Reset form
      form.reset();
      // 3. Show toast and navigate
      toast.success("Data Updated Successfully!!!");
      navigate("/my-posted-volunteer");
    } catch (err) {
      // console.log(err);
      toast.error(err.message);
    }
  };
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50 py-12">
      <section className="w-full max-w-3xl p-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-xl font-bold text-gray-800 mb-6">Update Event</h2>

        <form onSubmit={updateData} className="space-y-6">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div>
              <label
                className="block text-sm font-medium text-gray-700"
                htmlFor="thumbnail"
              >
                Thumbnail URL
              </label>
              <input
                id="thumbnail"
                name="thumbnail"
                defaultValue={volunteer?.thumbnail}
                type="text"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>

            <div>
              <label
                className="block text-sm font-medium text-gray-700"
                htmlFor="title"
              >
                Title
              </label>
              <input
                id="title"
                name="title"
                defaultValue={volunteer?.title}
                type="text"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>

            <div>
              <label
                className="block text-sm font-medium text-gray-700"
                htmlFor="description"
              >
                Description
              </label>
              <textarea
                id="description"
                name="description"
                defaultValue={volunteer?.description}
                rows="4"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              ></textarea>
            </div>

            <div className="">
              <label
                htmlFor="category"
                className="block font-medium text-gray-700"
              >
                Category
              </label>
              <select
                name="category"
                id="category"
                defaultValue={volunteer?.category}
                className="mt-1 block w-full p-2 border rounded-md focus:ring focus:ring-blue-300"
              >
                <option value="HealthCare">HealthCare</option>
                <option value="Education">Education</option>
                <option value="Social Service">Social Service</option>
                <option value="Animal Welfare">Animal Welfare</option>
              </select>
            </div>

            <div>
              <label
                className="block text-sm font-medium text-gray-700"
                htmlFor="location"
              >
                Location
              </label>
              <input
                id="location"
                name="location"
                defaultValue={volunteer?.location}
                type="text"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>

            <div>
              <label
                className="block text-sm font-medium text-gray-700"
                htmlFor="volunteersNeeded"
              >
                Volunteers Needed
              </label>
              <input
                id="volunteersNeeded"
                name="volunteersNeeded"
                defaultValue={volunteer?.volunteersNeeded}
                type="number"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>

            <div>
              <label
                className="block text-sm font-medium text-gray-700"
                htmlFor="deadline"
              >
                Deadline
              </label>
              <DatePicker
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                selected={startDate}
                onChange={(date) => setStartDate(date)}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div>
              <label
                className="block text-sm font-medium text-gray-700"
                htmlFor="organizerEmail"
              >
                Organizer Email
              </label>
              <input
                id="organizerEmail"
                name="organizerEmail"
                defaultValue={user?.email}
                type="email"
                disabled
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm bg-gray-100 sm:text-sm"
              />
            </div>

            <div>
              <label
                className="block text-sm font-medium text-gray-700"
                htmlFor="organizerName"
              >
                Organizer Name
              </label>
              <input
                id="organizerName"
                name="organizerName"
                defaultValue={user?.displayName}
                type="text"
                disabled
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm bg-gray-100 sm:text-sm"
              />
            </div>

            <div>
              <label
                className="block text-sm font-medium text-gray-700"
                htmlFor="organizerPhoto"
              >
                Organizer Photo URL
              </label>
              <input
                id="organizerPhoto"
                name="organizerPhoto"
                defaultValue={user?.photoURL}
                type="text"
                disabled
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm bg-gray-100 sm:text-sm"
              />
            </div>
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              className="px-6 py-2 text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Update
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default UpdateVolunteer;
