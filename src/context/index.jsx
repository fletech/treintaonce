import { createContext } from "react";
import { DefaultProvider } from "./provider";
import States from "./states";

const Context = createContext();

export function Provider({ children }) {
  return DefaultProvider(children, Context, States);
}

export default Context;
