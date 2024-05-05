import React, { useState, useEffect } from "react";
import { useUser } from "../contexts/userContext";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
axios.defaults.withCredentials = true;

const Dashboard = () => {
  const { user } = useUser();
  const userId = user._id;

  const [userInfo, setUserInfo] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3000/api/user/${userId}`,
        {
          withCredentials: true,
        }
      );

      setUserInfo(response.data.data);
    } catch (error) {
      console.error(`Error in fetching data: ${error}`);
    }
  };

  const deleteUser = async () => {
    try {
      const response = await axios.delete(
        `http://localhost:3000/api/user/${userId}`,
        {
          withCredentials: true,
        }
      );
      console.log(response);
      navigate("/signup");
    } catch (error) {
      console.error(`Error in deleting user: ${error}`);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8 pt-20 font-mono">
      <div className="max-w-md w-full bg-white shadow-md rounded-lg overflow-hidden">
        <div className="p-4 flex flex-col justify-center items-center">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            {userInfo.name}
          </h3>
          <p className="text-gray-600 mb-2">{userInfo.email}</p>
          <p className="text-gray-600 mb-2">{userInfo.phone}</p>
          <p className="text-gray-600 mb-4">{userInfo.gender}</p>
          <div className="flex justify-center">
            <Link
              to="/update"
              className="mr-2 px-2 py-1 bg-gray-300 text-gray-800 text-center rounded hover:bg-blue-400 hover:text-white focus:outline-none focus:bg-blue-400 focus:text-white w-24"
            >
              Edit
            </Link>
            <button
              onClick={deleteUser}
              className="px-2 py-1 bg-gray-300 text-gray-800 rounded hover:bg-red-400 hover:text-white focus:outline-none focus:bg-red-400 focus:text-white w-24"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
