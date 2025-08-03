import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/LoginContext";

const AuthLogin = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({ email: "", password: "" });
  const [submitting, setSubmitting] = useState(false);
  const [loginError, setLoginError] = useState("");

  // Real-time validation
  useEffect(() => {
    const errs = {};
    if (!formData.email) errs.email = "Email is required.";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      errs.email = "Invalid email.";
    if (!formData.password) errs.password = "Password is required.";
    else if (formData.password.length < 6)
      errs.password = "At least 6 characters.";
    setErrors(errs);
  }, [formData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    setLoginError("");

    const newErrors = {};
    if (!formData.email) newErrors.email = "Email is required.";
    if (!formData.password) newErrors.password = "Password is required.";
    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      setSubmitting(false);
      return;
    }

    const result = login(formData);
    if (result.success) {
      navigate(result.role === "admin" ? "/AdminPage" : "/userPage");
    } else {
      setLoginError(result.message);
    }

    setSubmitting(false);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-10 rounded-md bg-white shadow-md">
        <form onSubmit={handleSubmit} className="space-y-3">
          <h2 className="text-center text-2xl pb-4">Login</h2>

          {loginError && (
            <p className="text-red-600 text-center">{loginError}</p>
          )}

          <div>
            <label>Email</label>
            <input
              name="email"
              type="email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="w-full border p-2 rounded"
            />
            {errors.email && (
              <span className="text-red-500 text-sm">{errors.email}</span>
            )}
          </div>

          <div>
            <label>Password</label>
            <input
              name="password"
              type="password"
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
              className="w-full border p-2 rounded"
            />
            {errors.password && (
              <span className="text-red-500 text-sm">{errors.password}</span>
            )}
          </div>

          <button
            type="submit"
            disabled={submitting}
            className="w-full bg-blue-500 hover:bg-blue-600 text-white p-2 rounded"
          >
            {submitting ? "Logging in..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AuthLogin;
