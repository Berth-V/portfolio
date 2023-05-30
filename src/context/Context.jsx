import { useState,createContext } from "react";

export const Context = createContext();

export const Data = ({children}) => {
  const [pageTransition,setPageTranstion] = useState(true);
  return (
    <Context.Provider value={({
      pageTransition, 
      setPageTranstion
    })}
    >
      {children}
    </Context.Provider>
  )
}