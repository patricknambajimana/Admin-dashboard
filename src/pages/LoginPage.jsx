import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const userList = [
  { email: "admin@gmail.com", password: "1234abc", role: "admin" },
  { email: "user@gmail.com", password: "abcd123", role: "user" },
];

const LoginPage = () => {
  const { setAuth } = useAuth();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState({});

  const validateForm = () => {
    const newError = {};

    if (!formData.email.includes("@")) {
      newError.email = "Valid email required";
    }
    if (formData.password.length <= 6) {
      newError.password = "Password must be longer than 6 characters";
    }

    setError(newError);
    return Object.keys(newError).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleForm = (e) => {
    e.preventDefault();

    const isValid = validateForm();
    if (!isValid) return;

    const matchedUser = userList.find(
      (u) =>
        u.email.toLowerCase() === formData.email.toLowerCase() &&
        u.password === formData.password
    );

    if (!matchedUser) {
      setError({ general: "Invalid email or password" });
      return;
    }

    setAuth(matchedUser);

    if (matchedUser.role === "admin") {
      navigate("/adminPage");
    } else {
      navigate("/ErrorPage");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="p-5 text-2xl capitalize shadow-xl rounded-2xl max-w-md bg-white">
        <form className="space-y-4" onSubmit={handleForm}>
          <h2 className="text-center text-primary-500 uppercase">
            Login to <span className="lowercase">i</span>huza
          </h2>

          {error.general && (
            <p className="text-red-500 text-sm text-center">{error.general}</p>
          )}

          <div>
            <label htmlFor="email">Email</label>
            <input
              className="border w-full rounded-md p-2 mt-1 focus:outline-none"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            <p className="text-sm text-red-500">{error.email}</p>
          </div>

          <div>
            <label htmlFor="password">Password</label>
            <input
              className="border w-full rounded-md p-2 mt-1 focus:outline-none"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
            <p className="text-sm text-red-500">{error.password}</p>
          </div>

          <button
            type="submit"
            className="bg-primary-500 hover:bg-primary-600 text-white w-full rounded-md py-2 mt-4">
            Login
          </button>

          <div className="text-center text-sm text-blue-500 hover:underline mt-2">
            <a href="#">Forgot your password?</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
