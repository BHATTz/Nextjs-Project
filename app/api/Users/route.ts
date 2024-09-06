import { NextApiRequest, NextApiResponse } from "next";

// Define a type for the user data
interface User {
  id: number;
  name: string;
  role: string;
  profilePicture?: string; // Optional if you plan to include profile pictures
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const route: User[] = [
    { id: 1, name: "John Doe", role: "Developer" },
    { id: 2, name: "Jane Smith", role: "Designer" },
    { id: 3, name: "Bob Johnson", role: "Project Manager" },
  ];

  res.status(200).json(route);
}
