import { useContext } from "react";
import { createContext } from "react";

const FirebaseContext = createContext();

export const useFirebase = useContext();
