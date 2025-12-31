import React from "react";

export default function AdminDashboard() {
  return (
    <div className="flex h-screen">
   <div className="w-64 bg-gray-900 text-white p-5 flex flex-col h-screen">
  <h2 className="text-2xl font-bold text-center">Admin Panel</h2>
  
  {/* Buttons Wrapper - Move it closer to the title */}
  <div className="flex flex-col space-y-4 mt-8">
    <button className="p-3 bg-gray-700 rounded-md cursor-pointer text-center hover:bg-gray-600 transition w-full">
      Manage News
    </button>
    <button className="p-3 bg-gray-700 rounded-md cursor-pointer text-center hover:bg-gray-600 transition w-full">
      View Registrations
    </button>
  </div>
</div>

      {/* Main Content */}
      <div className="flex-1 p-10 bg-orange-500 text-white flex flex-col justify-center items-center">
        <h1 className="text-4xl font-bold">User213</h1>
        <h2 className="text-3xl font-bold mt-3">Welcome to Admin Dashboard</h2>
        <p className="mt-2 text-gray-200 text-lg">Manage news and player registrations from here.</p>
      </div>
    </div>
  );
};


