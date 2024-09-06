import { useEffect, useState } from "react";

// Define a type for the user data
interface User {
  id: number; // Changed to `number` to match the API response
  name: string;
  role: string;
  profilePicture?: string; // Optional if you plan to include profile pictures
}

const Team: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("/api/users/route");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data: User[] = await response.json();
        setUsers(data);
      } catch (error) {
        console.error("Failed to fetch users:", error);
      }
    };

    fetchUsers();
  }, []);

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
            <img
              src={user.profilePicture || "https://dummyimage.com/80x80"} // Fallback image if profilePicture is not provided
              alt={`${user.name}'s profile`}
              className="w-16 h-16 rounded-full object-cover"
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

export default Team;
