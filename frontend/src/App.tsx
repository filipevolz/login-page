import { BrowserRouter, Route, Routes } from 'react-router-dom'
import DefaultLoginLayout from './app/components/default-login-layout'
import User from './app/pages/user'
import PrivateRoute from './app/components/private-route'

export default function App(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<DefaultLoginLayout />}/>
        <Route path="/signup" element={<DefaultLoginLayout />}/>
        <Route path="/user" element={
          <PrivateRoute>
            <User />
          </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  )
}