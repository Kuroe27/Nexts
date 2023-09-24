import React from "react";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
const page = async () => {
  const session = await getServerSession();

  if (!session) {
    redirect("/api/auth/signin");
  }
  return <div>page</div>;
};
export default page;
