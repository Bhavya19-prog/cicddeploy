// ✅ Updated useAuth.ts
"use client";

import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";

interface DecodedToken {
  exp: number;
  [key: string]: any;
}

const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("jwtToken");
    if (!token) {
      setLoading(false);
      return;
    }

    try {
      const decoded = jwtDecode<DecodedToken>(token);
      if (Date.now() >= decoded.exp * 1000) {
        localStorage.removeItem("jwtToken");
        setLoading(false);
      } else {
        setIsAuthenticated(true);
        setLoading(false);
      }
    } catch (err) {
      console.log("Token decode error:", err);
      setLoading(false);
    }
  }, []);

  return { isAuthenticated, loading };
};

export default useAuth;