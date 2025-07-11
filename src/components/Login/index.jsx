import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './index.css'

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()

    const handleEmailChange = (event) => {
        setEmail(event.target.value)
    }

    const handlePasswordChange = (event) => {
        setPassword(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        const storedEmail = localStorage.getItem('email')
        const storedPassword = localStorage.getItem('password')

        if (storedPassword !== password) {
            alert("Incorrect password")
        }

        if (storedEmail === email && storedPassword === password) {
            navigate('./')
        }
    }

    return (
        <div className="login-bg">
            <div className='form-container'>
                <h1>Welcome to Srithin's Hospital</h1>
                <form onSubmit={handleSubmit}>
                    <div className='forms'>
                        <label htmlFor="email" className='text-forms'>Email</label>
                        <input
                            id="email"
                            type="email"
                            placeholder='Email'
                            value={email}
                            onChange={handleEmailChange}
                            className='input-box'
                        />
                    </div>
                    <br />
                    <div className='forms'>
                        <label htmlFor="password" className='text-forms'>Password</label>
                        <input
                            id="password"
                            type="password"
                            placeholder='Password'
                            value={password}
                            onChange={handlePasswordChange}
                            className='input-box'
                        />
                    </div>
                    <br />
                    <button type="submit" className='btn'>Login</button>
                </form>
            </div>
        </div>
    )
}

export default Login
