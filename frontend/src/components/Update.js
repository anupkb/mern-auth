import React, { useState, useEffect } from "react";
import { useUser } from "../contexts/userContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
axios.defaults.withCredentials = true;

function Update() {
  const { user } = useUser();
  const userId = user._id;
  const navigate = useNavigate();

  useEffect(() => {
    fetchData();
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    gender: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.put(
        `http://localhost:3000/api/user/${userId}`,
        formData,
        { withCredentialstrue: true }
      );

      navigate("/dashboard");
    } catch (error) {
      console.error(`Error in updating data: ${error}`);
    }
    console.log(formData);
  };

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3000/api/user/${userId}`,
        {
          withCredentials: true,
        }
      );

      setFormData(response.data.data);
    } catch (error) {
      console.error(`Error in fetching data: ${error}`);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8 pt-20 font-mono">
      <div className="max-w-md w-full space-y-8 rounded-lg p-5 bg-white shadow-md">
        <div>
          <h2 className="mt-6 text-center text-2xl font-extrabold text-gray-500 underline">
            Update
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              name="name"
              id="name"
              autoComplete="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Name"
            />
          </div>
          <div>
            <input
              type="email"
              name="email"
              id="email"
              autoComplete="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Email"
            />
          </div>
          <div>
            <input
              type="tel"
              name="phone"
              id="phone"
              autoComplete="tel"
              required
              value={formData.phone}
              onChange={handleChange}
              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Phone"
            />
          </div>
          <div>
            <select
              name="gender"
              id="gender"
              required
              value={formData.gender}
              onChange={handleChange}
              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Update;
