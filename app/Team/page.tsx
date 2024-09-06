"use client"; // Ensure this is at the top

import Image from "next/image";
import { useEffect, useState } from "react";

interface User {
  id: number;
  name: string;
  role: string;
  profilePicture: string;
}

const TeamPage = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("/api/Teams"); // Correct API path
        const data = await response.json();
        setUsers(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching team data:", error);
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) {
    return <p className="text-center text-xl">Loading...</p>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
        Meet Our Team
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {users.map((user) => (
          <div
            key={user.id}
            className="bg-white shadow-lg rounded-lg p-6 border border-gray-200 flex items-center space-x-4"
          >
            <Image
              src={user.profilePicture}
              alt={`${user.name}'s profile`}
              width={64} // Define width explicitly
              height={64} // Define height explicitly
              className="rounded-full object-cover"
            />
            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                {user.name}
              </h2>
              <p className="text-gray-600">Role: {user.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamPage;
