import React, { useState } from 'react'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Profile from './pages/Profile'
import { createTheme, Box } from '@mui/material'
import { ThemeProvider } from '@emotion/react'
import { useSelector } from 'react-redux';
import EditProfile from './pages/EditProfile'
import SendOtp from './pages/auth/SendOtp'
import ForgotPassword from './pages/auth/ForgotPassword'
import ResetPassword from './pages/auth/ResetPassword'
const App = () => {
  const [mode, setMode] = useState('dark')

  const darkTheme = createTheme({
    palette: {
      // mode: mode
    }
  })
  const user = useSelector((state) => state.user.currentUser);
  return (
    <ThemeProvider theme={darkTheme}>
      <Router bgcolor={"Background.default"}>
        <Box>
          {
            user &&
            <Navbar />
          }
          <Routes>
            <Route path='/'>
              <Route index element={user ? <Home setMode={setMode} mode={mode} /> : <Navigate to='login' />} />
              <Route path='/login' element={user ? <Navigate to='/' /> : <Login />} />
              <Route path='/register' element={user ? <Navigate to='/' /> : <Register />} />
              <Route path='/profile/:id' element={user ? <Profile /> : <Navigate to='/login' />} />
              <Route path='/edit-profile' element={user && <EditProfile />} />
              <Route path='/reset-password' element={user && <ResetPassword />} />
              <Route path='/send-otp' element={!user && <SendOtp />} />
              <Route path='/forgot-password/:email' element={!user && <ForgotPassword />} />
            </Route>
          </Routes>
        </Box>
      </Router>
    </ThemeProvider>
  )
}

export default App