"use client"
import { createContext, useContext, useState, ReactNode } from "react";

// Define the type for the context state
type FormContextType = {
  countryCode: string | null;
  setCountryCode: (user: string | null) => void;
};

// Initialize the context with a default value
const FormContext = createContext<FormContextType | undefined>(undefined);

export const FormContextProvider = ({ children }: { children: ReactNode }) => {
  const [countryCode, setCountryCode] = useState<string | null>(null);
  console.log(countryCode);

  return (
    <FormContext.Provider value={{ countryCode, setCountryCode }}>
      {children}
    </FormContext.Provider>
  );
};

// Custom hook to use context easily
export const useFormContext = () => {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error("useUserContext must be used within a UserProvider");
  }
  return context;
};
