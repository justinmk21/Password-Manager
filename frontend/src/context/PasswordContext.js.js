import { createContext, useContext } from "react";

export const PasswordContext = createContext();
export const usePasswordContext = () => useContext(PasswordContext);