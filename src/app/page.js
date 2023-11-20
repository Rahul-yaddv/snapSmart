import ProfileClient from "@/components/client/profileClient";
import React from "react";

export default function page() {
  return (
    <div>
      <div>hi</div>
      <a href="/api/auth/login">Login</a>
      <ProfileClient />
    </div>
  );
}
