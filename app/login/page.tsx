import LoginForm from "@/components/shared/LoginForm";
import { getUser } from "@/lib/helpers-server";
import { redirect } from "next/navigation";
import React from "react";

const page = async () => {
  const user = await getUser();

  if (user) {
    redirect("/dashboard");
  }

  return <LoginForm />;
};

export default page;
