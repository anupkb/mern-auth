import React, { useState, useEffect } from "react";
import axios from "axios";
axios.defaults.withCredentials = true;

const Home = () => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:3000/api/users", {
        withCredentials: true,
      });
      console.log(response);
      setUserData(response.data.data);
    } catch (error) {
      console.error(`Error in fetching data: ${error}`);
    }
  };
  console.log(userData);
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 pt-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {userData.map((user) => (
          <div
            key={user._id}
            className="bg-white shadow-md rounded-lg overflow-hidden p-4"
          >
            <h3 className="text-xl font-semibold text-gray-800">{user.name}</h3>
            <p className="text-gray-600 mb-2">{user.email}</p>
            <p className="text-gray-600 mb-2">{user.phone}</p>
            <p className="text-gray-600">{user.gender}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
