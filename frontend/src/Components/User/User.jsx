import React, { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function User() {
  const { userid } = useParams();
  const [players, setPlayers] = useState([]);
  const [showPlayers, setShowPlayers] = useState(false);

  // Fetch players from MongoDB
  const fetchPlayers = async () => {
    try {
      const response = await axios.get("http://localhost:3000/api/players");
      setPlayers(response.data);
      setShowPlayers(true); // Show table after fetching
    } catch (error) {
      console.error("Error fetching players", error);
    }
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-64 bg-gray-900 text-white p-5 flex flex-col">
        <h2 className="text-2xl font-bold text-center">Admin Panel</h2>
        <ul className="mt-6 space-y-4">
          <li className="p-3 bg-gray-700 rounded-md cursor-pointer text-center hover:bg-gray-600 transition">
            Manage News
          </li>
          <li
            className="p-3 bg-gray-700 rounded-md cursor-pointer text-center hover:bg-gray-600 transition"
            onClick={fetchPlayers}
          >
            View Registrations
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-10 bg-orange-500 text-white flex flex-col items-center">
        <h1 className="text-4xl font-bold">{userid}</h1>
        <h2 className="text-3xl font-bold mt-3">Welcome to Admin Dashboard</h2>
        <p className="mt-2 text-gray-200 text-lg">
          Manage news and player registrations from here.
        </p>

        {/* Player Table */}
        {showPlayers && (
         <div className="mt-5 bg-white p-5 rounded-lg shadow-lg w-full overflow-x-auto">
         <h2 className="text-2xl font-bold text-black mb-4">
           Player Registrations
         </h2>
         <div className="overflow-x-auto">
           <table className="min-w-full border-collapse border border-gray-300 text-black">
             <thead>
               <tr className="bg-gray-200 text-center">
                 <th className="border p-2 min-w-[150px]">Full Name</th>
                 <th className="border p-2 min-w-[180px]">Email</th>
                 <th className="border p-2 min-w-[130px]">Phone</th>
                 <th className="border p-2 min-w-[120px]">DOB</th>
                 <th className="border p-2 min-w-[120px]">Height</th>
                 <th className="border p-2 min-w-[120px]">Weight</th>
                 <th className="border p-2 min-w-[120px]">Gender</th>
                 <th className="border p-2 min-w-[150px]">Jersey Size</th>
                 <th className="border p-2 min-w-[150px]">Country of Birth</th>
                 <th className="border p-2 min-w-[150px]">Nationality</th>
                 <th className="border p-2 min-w-[180px]">Nationality Status</th>
                 <th className="border p-2 min-w-[130px]">City</th>
                 <th className="border p-2 min-w-[130px]">State</th>
                 <th className="border p-2 min-w-[120px]">Pincode</th>
                 <th className="border p-2 min-w-[300px]">Full Address</th>
                 <th className="border p-2 min-w-[150px]">Parent Name</th>
                 <th className="border p-2 min-w-[200px]">Parent Occupation</th>
                 <th className="border p-2 min-w-[150px]">Parent Phone</th>
                 <th className="border p-2 min-w-[180px]">Parent Email</th>
                 <th className="border p-2 min-w-[180px]">Experience Level</th>
                 <th className="border p-2 min-w-[200px]">Preferred Position</th>
                 <th className="border p-2 min-w-[200px]">State/National Level</th>
                 <th className="border p-2 min-w-[200px]">Any Clubs</th>
                 <th className="border p-2 min-w-[200px]">Other Academies</th>
                 <th className="border p-2 min-w-[200px]">Medical Conditions</th>
                 <th className="border p-2 min-w-[250px]">Other Info</th>
               </tr>
             </thead>
             <tbody>
               {players.map((player) => (
                 <tr key={player._id} className="text-center">
                   <td className="border p-2">{player.fullname}</td>
                   <td className="border p-2">{player.emailid}</td>
                   <td className="border p-2">{player.mobilenumber}</td>
                   <td className="border p-2">{player.dob}</td>
                   <td className="border p-2">{player.height}</td>
                   <td className="border p-2">{player.weight}</td>
                   <td className="border p-2">{player.gender}</td>
                   <td className="border p-2">{player.jerseysize}</td>
                   <td className="border p-2">{player.countryofbirth}</td>
                   <td className="border p-2">{player.nationality}</td>
                   <td className="border p-2">{player.nationalitystatus}</td>
                   <td className="border p-2">{player.city}</td>
                   <td className="border p-2">{player.state}</td>
                   <td className="border p-2">{player.pincode}</td>
                   <td className="border p-2">{player.fulladdress}</td>
                   <td className="border p-2">{player.parent?.parentname}</td>
                   <td className="border p-2">{player.parent?.parentoccupation}</td>
                   <td className="border p-2">{player.parent?.phonenumber}</td>
                   <td className="border p-2">{player.parent?.pEmailid}</td>
                   <td className="border p-2">{player.footballexp?.explevel}</td>
                   <td className="border p-2">{player.footballexp?.preferredpos}</td>
                   <td className="border p-2">{player.footballexp?.stateornational}</td>
                   <td className="border p-2">{player.footballexp?.anyclubs}</td>
                   <td className="border p-2">{player.footballexp?.anyotheracademies}</td>
                   <td className="border p-2">{player.footballexp?.medicalconditions}</td>
                   <td className="border p-2">{player.footballexp?.otherinfo}</td>
                 </tr>
               ))}
             </tbody>
           </table>
         </div>
       </div>
       
        )}
      </div>
    </div>
  );
}

export default User;
