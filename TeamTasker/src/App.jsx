import React, { useContext, useEffect, useState } from 'react'
import EmployeeDashbord from './Componets/DashBord/EmployeeDashbord'
import AdminDashbord from './componets/DashBord/AdminDashbord'
import { AuthContext } from './Contex/AuthProvider'
import Login from './componets/Auth/Login'

const App = () => {

  const [user, setUser] = useState(null)
  const [loggedInUserData, setLoggedInUserData] = useState(null)
  const [userData,SetUserData] = useContext(AuthContext)

  useEffect(()=>{
    const loggedInUser = localStorage.getItem('loggedInUser')
    
    if(loggedInUser){
      const userData = JSON.parse(loggedInUser)
      SetUserData(userData.role)
      setLoggedInUserData(userData.data)
    }

  },[])


  const handleLogin = (email, password) => {
    if (email == 'admin@me.com' && password == '123') {
      setUser('admin')
      localStorage.setItem('loggedInUser', JSON.stringify({ role: 'admin' }))
    } else if (userData) {
      const employee = userData.find((e) => email == e.email && e.password == password)
      if (employee) {
        setUser('employee')
        setLoggedInUserData(employee)
        localStorage.setItem('loggedInUser', JSON.stringify({ role: 'employee',data:employee }))
      }
    }
    else {
      alert("Invalid Credentials")
    }
  }



  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ''}
      {user == 'admin' ? <AdminDashbord changeUser={setUser}/> : (user == 'employee' ? <EmployeeDashbord changeUser={setUser} data={loggedInUserData} /> : null) }
    </>
  )
}

export default App