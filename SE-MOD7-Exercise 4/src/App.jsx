import { useState } from 'react'
import MyThemeProvider from './contexts/MyThemeContext'
import NavBar from './NavBar'
import AppRoutes from './routes/AppRoutes'
import { UserProvider} from "./contexts/UserContext"
import './App.css'

function App() {


  return (
    <>
       <UserProvider>
        <MyThemeProvider>
          <NavBar />
          <AppRoutes />
        </MyThemeProvider>
      </UserProvider>
    </>
  )
}

export default App
