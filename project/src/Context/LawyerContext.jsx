import React, { createContext, useEffect, useState } from 'react'
export const lawyerDataContext=createContext()

const LawyerContext = ({children}) => {
    const [lawyerData, setLawyerData] = useState(null)
    useEffect(()=>{
      if(!isNaN(lawyerData)){
        setLawyerData(sessionStorage.getItem("lawyer"))
      }
    },[lawyerData])
  return (
  <lawyerDataContext.Provider value={{lawyerData,setLawyerData}}>
    {children}
  </lawyerDataContext.Provider>
  )
}

export default LawyerContext