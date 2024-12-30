import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthContext";
import axios from "axios";
import { format } from "date-fns";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";

const MyPostedVolunteer = () => {
  const { user } = useContext(AuthContext);
  const [volunteersPost, setVolunteersPost] = useState([]);
  const [volunteersRequest, setVolunteersRequest] = useState([]);
  const [isPostTableLayout, setIsPostTableLayout] = useState(true);
  const [isRequestTableLayout, setIsRequestTableLayout] = useState(true);
  useEffect(() => {
    fetchAllVolunteerPost();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);
  const fetchAllVolunteerPost = async () => {
    const { data } = await axios.get(
      `${import.meta.env.VITE_API_URL}/volunteer/${user?.email}`,{withCredentials: true}
    );
    setVolunteersPost(data);
  };
  const handleDeletePost = async (id) => {
    try {
      const { data } = await axios.delete(
        `${import.meta.env.VITE_API_URL}/volunteer/${id}`
      );
      // console.log(data);

      fetchAllVolunteerPost();
    } catch (err) {
      // console.log(err);
      toast.error(err.message);
    }
  };

  const deleteNow = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        handleDeletePost(id);
        Swal.fire({
          title: "Deleted!",
          text: "Your post has been deleted.",
          icon: "success",
        });
      }
    });
  };
  //================for request section====================
  useEffect(() => {
    fetchAllVolunteerRequest();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);
  const fetchAllVolunteerRequest = async () => {
    const { data } = await axios.get(
      `${import.meta.env.VITE_API_URL}/volunteer-request/${user?.email}`,{withCredentials: true}
    );
    setVolunteersRequest(data);
  };

  const handleDeleteRequest = async (id) => {
    try {
      const { data } = await axios.delete(
        `${import.meta.env.VITE_API_URL}/volunteer-request/${id}`
      );
      // console.log(data);

      fetchAllVolunteerRequest();
    } catch (err) {
      // console.log(err);
      toast.error(err.message);
    }
  };

  const deleteNowRequest = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        handleDeleteRequest(id);
        Swal.fire({
          title: "Deleted!",
          text: "Your post has been deleted.",
          icon: "success",
        });
      }
    });
  };

  const togglePostLayout = () => setIsPostTableLayout(!isPostTableLayout);
  const toggleRequestLayout = () =>
    setIsRequestTableLayout(!isRequestTableLayout);

  return (
    <section className="container px-4 mx-auto pt-12">
      <Helmet>
        <title>My Posts</title>
      </Helmet>

      <div className="container p-2 mx-auto sm:p-4 dark:text-gray-800">
  <h2 className="mb-4 text-2xl font-semibold leading-tight">
    My Volunteer Posts
  </h2>

  {/* Toggle Button for Layout */}
  <button
    onClick={togglePostLayout}
    className="mb-4 px-4 py-2 flex text-white bg-blue-500 rounded hover:bg-blue-600 ml-auto"
  >
    {isPostTableLayout
      ? "Switch to Card Layout"
      : "Switch to Table Layout"}
  </button>

  {volunteersPost.length === 0 ? (
    <div className="flex flex-col items-center justify-center mt-10">
      <p className="text-lg font-medium text-gray-600">
        You have no volunteer posts at the moment.
      </p>
    </div>
  ) : isPostTableLayout ? (
    <div className="overflow-x-auto">
      <table className="min-w-full text-xs">
        <colgroup>
          <col />
          <col />
          <col />
          <col />
          <col />
          <col className="w-2" />
        </colgroup>
        <thead className="dark:bg-gray-300">
          <tr className="text-left">
            <th className="p-3">Title</th>
            <th className="p-3">Deadline</th>
            <th className="p-3">Volunteers Needed</th>
            <th className="p-3">Category</th>
            <th className="p-3">Description</th>
            <th className="p-3">Action</th>
          </tr>
        </thead>
        <tbody>
          {volunteersPost.map((volunteer) => (
            <tr
              key={volunteer._id}
              className="border-b border-opacity-20 dark:border-gray-300 dark:bg-gray-50"
            >
              <td className="p-3">
                <p>{volunteer.title}</p>
              </td>
              <td className="p-3">
                <p>{format(new Date(volunteer.deadline), "P")}</p>
              </td>
              <td className="p-3 font-bold text-black">
                <p>{volunteer.volunteersNeeded}</p>
              </td>
              <td className="p-3">
                <p
                  className={`px-3 py-1 rounded-full text-xs ${
                    volunteer.category === "HealthCare" &&
                    "text-blue-500 bg-blue-100/60"
                  } ${
                    volunteer.category === "Education" &&
                    "text-green-500 bg-green-100/60"
                  } ${
                    volunteer.category === "Social Service" &&
                    "text-red-500 bg-red-100/60"
                  } ${
                    volunteer.category === "Animal Welfare" &&
                    "text-yellow-500 bg-red-100/60"
                  }`}
                >
                  {volunteer.category}
                </p>
              </td>
              <td className="p-3">
                <p>{volunteer.description.substring(0, 18)}...</p>
              </td>
              <td className="p-3 text-right">
                <div className="flex items-center gap-x-4">
                  <button
                    onClick={() => deleteNow(volunteer._id)}
                    className="text-gray-500 hover:text-red-500"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                      />
                    </svg>
                  </button>
                  <Link
                    to={`/update/${volunteer._id}`}
                    className="text-gray-500 hover:text-yellow-500"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                      />
                    </svg>
                  </Link>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  ) : (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {volunteersPost.map((volunteer) => (
        <div
          key={volunteer._id}
          className="p-4 border rounded shadow dark:bg-gray-50"
        >
          <h3 className="text-lg font-bold">{volunteer.title}</h3>
          <p>Deadline: {format(new Date(volunteer.deadline), "P")}</p>
          <p>Volunteers Needed: {volunteer.volunteersNeeded}</p>
          <p>Category: {volunteer.category}</p>
          <p>{volunteer.description.substring(0, 50)}...</p>
          <div className="flex gap-2 mt-4">
            <button
              onClick={() => deleteNow(volunteer._id)}
              className="px-3 py-1 font-semibold rounded-md dark:bg-red-600 dark:text-gray-50"
            >
              Delete
            </button>
            <Link
              to={`/update/${volunteer._id}`}
              className="px-3 py-1 font-semibold rounded-md dark:bg-yellow-600 dark:text-gray-50"
            >
              Edit
            </Link>
          </div>
        </div>
      ))}
    </div>
  )}
</div>

{/* My Volunteer Request Section */}
<div className="container p-2 mx-auto sm:p-4 dark:text-gray-800">
  <h2 className="mb-4 text-2xl font-semibold leading-tight">
    My Volunteer Request
  </h2>

  {/* Toggle Button for Layout */}
  <button
    onClick={toggleRequestLayout}
    className="mb-4 px-4 py-2 flex text-white bg-blue-500 rounded hover:bg-blue-600 ml-auto"
  >
    {isRequestTableLayout
      ? "Switch to Card Layout"
      : "Switch to Table Layout"}
  </button>

  {volunteersRequest.length === 0 ? (
    <div className="flex flex-col items-center justify-center mt-10">
      <p className="text-lg font-medium text-gray-600">
        You have no active volunteer requests at the moment.
      </p>
    </div>
  ) : isRequestTableLayout ? (
    <div className="overflow-x-auto">
      <table className="min-w-full text-xs">
        <colgroup>
          <col />
          <col />
          <col />
          <col />
          <col className="w-2" />
        </colgroup>
        <thead className="dark:bg-gray-300">
          <tr className="text-left">
            <th className="p-3">Title</th>
            <th className="p-3">Deadline</th>
            <th className="p-3">Location</th>
            <th className="p-3">Category</th>
            <th className="p-3">Action</th>
          </tr>
        </thead>
        <tbody>
          {volunteersRequest.map((request) => (
            <tr
              key={request._id}
              className="border-b border-opacity-20 dark:border-gray-300 dark:bg-gray-50"
            >
              <td className="p-3">
                <p>{request.title}</p>
              </td>
              <td className="p-3">
                <p>{format(new Date(request.deadline), "P")}</p>
              </td>
              <td className="p-3">
                <p>{request.location}</p>
              </td>
              <td className="p-3">
                <p>{request.category}</p>
              </td>
              <td className="p-3 text-right">
                <span className="px-3 py-1 font-semibold rounded-md dark:bg-red-600 dark:text-gray-50">
                  <button>
                    <span onClick={() => deleteNowRequest(request._id)}>
                      Cancel
                    </span>
                  </button>
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  ) : (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {volunteersRequest.map((request) => (
        <div
          key={request._id}
          className="p-4 border rounded shadow dark:bg-gray-50"
        >
          <h3 className="text-lg font-bold">{request.title}</h3>
          <p>Deadline: {format(new Date(request.deadline), "P")}</p>
          <p>Location: {request.location}</p>
          <p>Category: {request.category}</p>
          <div className="flex gap-2 mt-4">
            <button
              onClick={() => deleteNowRequest(request._id)}
              className="px-3 py-1 font-semibold rounded-md dark:bg-red-600 dark:text-gray-50"
            >
              Cancel
            </button>
          </div>
        </div>
      ))}
    </div>
  )}
</div>



    </section>
  );
};

export default MyPostedVolunteer;
