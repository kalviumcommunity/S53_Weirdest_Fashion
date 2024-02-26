import React, { createContext,useState } from 'react'

export const AppContext = createContext();

const ParentContext = ({children}) => {
    const [data, setData] = useState([]);

  return (
    <AppContext.Provider value={{data,setData}}>{children}</AppContext.Provider>
  )
}

export default ParentContext