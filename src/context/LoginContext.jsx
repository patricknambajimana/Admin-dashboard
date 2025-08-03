import React, { createContext, useContext, useState } from "react";

const LoginContext = createContext();

export const LoginProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = ({ email, password }) => {
    if (email === "admin@gmail.com" && password === "admin123") {
      setUser({ email, role: "admin" });
      return { success: true, role: "admin" };
    } else if (email === "user@gmail.com" && password === "user123") {
      setUser({ email, role: "user" });
      return { success: true, role: "user" };
    } else {
      return { success: false, message: "Invalid credentials" };
    }
  };

  const logout = () => setUser(null);

  return (
    <LoginContext.Provider value={{ user, login, logout }}>
      {children}
    </LoginContext.Provider>
  );
};

export const useAuth = () => useContext(LoginContext);
