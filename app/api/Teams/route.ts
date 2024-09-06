import { NextResponse } from "next/server";

// Mock team data
const team = [
  {
    id: 1,
    name: "Sarthak Bhatt",
    role: "Web Developer",
    profilePicture: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    id: 2,
    name: "Jane Doe",
    role: "UI/UX Designer",
    profilePicture: "https://randomuser.me/api/portraits/women/1.jpg",
  },
  {
    id: 3,
    name: "John Smith",
    role: "Backend Developer",
    profilePicture: "https://randomuser.me/api/portraits/men/2.jpg",
  },
  {
    id: 4,
    name: "Emily Davis",
    role: "Frontend Developer",
    profilePicture: "https://randomuser.me/api/portraits/women/2.jpg",
  },
];

export async function GET() {
  return NextResponse.json(team);
}
