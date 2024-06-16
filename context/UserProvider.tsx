import { getCurrentUser } from "@/lib/session";
import { User } from "@/types";
import React, { useState, useEffect, createContext, ReactNode } from "react";

// Define the context type
interface UserContextType {
  user: User | null;
  // getUser: () => Promise<void>;
}

// Create the context with a default value
export const UserContext = createContext<UserContextType | null>(null);

// Correct component name
const UserProvider = ({ children }: { children: ReactNode }) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [user, setUser] = useState<User | null>(null);

  // Function to fetch user data
  async function getUser() {
    setIsLoading(true);
    try {
      const user = await getCurrentUser();
      if (user) {
        setUser(user);
      }
    } catch (error) {
      console.error("Error fetching user:", error);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    getUser();
  }, []);

  return (
    <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>
  );
};

export default UserProvider;
