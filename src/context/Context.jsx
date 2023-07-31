import {useState, createContext} from "react";

export const Context = createContext();

export const Data = ({children}) => {
  const [onContactPage, isOnContactPage] = useState(false);
  return (
    <Context.Provider 
      value={{
        onContactPage,
        isOnContactPage
      }}
    >
      {children}
    </Context.Provider>
  )
}