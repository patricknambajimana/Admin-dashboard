import React from 'react'
import { useAuth } from "../context/LoginContext";
export const UserPage = () => {
  const { user } = useAuth();
  return (
     <div className="p-6">
      <h1 className="text-2xl">Welcome User</h1>
      <p>Your email: {user?.email}</p>
    </div>
  );
}
