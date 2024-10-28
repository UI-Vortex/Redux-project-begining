import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Main from './components/Main'
import Register from './components/Register'
import Login from './components/Login'
import Navbar from './components/Navbar'

function App() {
    return (
        <div>
            <BrowserRouter>
                <Navbar /> 
                <Routes>
                    <Route path='/' element={<Main />} />
                    <Route path='/register' element={<Register />} />
                    <Route path='/login' element={<Login />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App
