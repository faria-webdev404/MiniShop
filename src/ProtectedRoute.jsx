// src/components/ProtectedRoute.jsx
import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext"; // Import the useAuth hook

const ProtectedRoute = ({ component }) => {
  const { user } = useAuth(); // Check if user is authenticated

  // If user is not logged in, redirect to login
  if (!user) {
    return <Navigate to="/login" />;
  }

  // If user is logged in, render the component
  return component;
};

export default ProtectedRoute;
