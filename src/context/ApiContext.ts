import { createContext, useContext } from "react";

const ApiContext = createContext("localhost:8080/");

export const useApi = () => useContext(ApiContext);

export default ApiContext;
