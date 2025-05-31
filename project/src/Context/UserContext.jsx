import React, { createContext, useEffect, useState } from 'react'
export const userDataContext=createContext()
import axios from "axios"

const UserContext = ({children}) => {
    const [userData, setUserData] = useState( 
       () => {
        // Try to get initial data from localStorage
        const savedUserData = sessionStorage.getItem('user')
        return savedUserData ? JSON.parse(savedUserData) : null
    }
      )
     useEffect(() => {
        const checkAuth = async () => {
            const token = sessionStorage.getItem('token')
            if (token && !userData) {
                try {
                    const response = await axios.get('http://localhost:3030/api/user/profile', {
                        withCredentials: true
                    })
                    
                    if (response.status === 200) {
                        setUserData(response.data.user)
                    }
                } catch (error) {
                    console.error('Auth check failed:', error)
                    // Clear invalid token
                    sessionStorage.removeItem('token')
                    sessionStorage.removeItem('user')
                    setUserData(null)
                }
            }
        }

        checkAuth()
    }, [userData])
  return (
  <userDataContext.Provider value={{userData,setUserData}}>
    {children}
  </userDataContext.Provider>
  )
}

export default UserContext