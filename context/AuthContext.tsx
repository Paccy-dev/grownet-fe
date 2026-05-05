"use client";

import { createContext, useContext, useState, useEffect } from "react";

// Shape of our user object
type User = {
  id: number;
  email: string;
  username: string;
};

// Shape of what the context provides to the whole app
type AuthContextType = {
  user: User | null;
  token: string | null;
  login: (token: string, user: User) => void;
  logout: () => void;
  isLoading: boolean;
};

// Create the context with a default empty value
const AuthContext = createContext<AuthContextType>({
  user: null,
  token: null,
  login: () => {},
  logout: () => {},
  isLoading: true,
});

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // On first load — check if user was already logged in
  // We store the token in localStorage so it survives page refreshes
  useEffect(() => {
    const savedToken = localStorage.getItem("grownet_token");
    const savedUser = localStorage.getItem("grownet_user");

    if (savedToken && savedUser) {
      setToken(savedToken);
      setUser(JSON.parse(savedUser));
    }

    // Done checking — page can now render
    setIsLoading(false);
  }, []);

  // Called after successful login — saves to state AND localStorage
  const login = (token: string, user: User) => {
    setToken(token);
    setUser(user);
    localStorage.setItem("grownet_token", token);
    localStorage.setItem("grownet_user", JSON.stringify(user));
  };

  // Clears everything on logout
  const logout = () => {
    setToken(null);
    setUser(null);
    localStorage.removeItem("grownet_token");
    localStorage.removeItem("grownet_user");
  };

  return (
    <AuthContext.Provider value={{ user, token, login, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
}

// Custom hook — any component can call useAuth() to get user/token/login/logout
export const useAuth = () => useContext(AuthContext);
