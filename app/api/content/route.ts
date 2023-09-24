import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
// Dummy data
const posts = [
  {
    title: "Lorem fsafs",
    slug: "a-a",
    content: "as",
  },
  {
    title: "Lorem fsafs",
    slug: "a",
    content: "as",
  },
];

export async function GET() {
  const session = await getServerSession();
  return NextResponse.json(posts);
}
