import { useContext } from "react";
import { boardContext } from "../contexts";

export const useBoard = () => useContext(boardContext);
