import React from "react";

const Dashboard = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8 pt-20 font-mono">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <div className="bg-white shadow-md rounded-lg overflow-hidden p-4">
          <h3 className="text-xl font-semibold text-gray-800">User Name</h3>
          <p className="text-gray-600 mb-2">user@example.com</p>
          <p className="text-gray-600 mb-2">1234567890</p>
          <p className="text-gray-600">Male</p>
          <div className="flex justify-end mt-4">
            <button className="mr-2 px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 focus:outline-none focus:bg-indigo-700">
              Update
            </button>
            <button className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 focus:outline-none focus:bg-red-700">
              Delete
            </button>
          </div>
        </div>
        {/* Repeat the above div for each user */}
      </div>
    </div>
  );
};

export default Dashboard;
