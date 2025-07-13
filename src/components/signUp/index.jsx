import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './index.css'

const SignUp = () => {
    const [fullname, setFullname] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    const navigate = useNavigate()

    const handleSubmit = (event) => {
        event.preventDefault()

        if (password !== confirmPassword) {
            alert("Password should be the same")
            return
        }

        localStorage.setItem('email', email)
        localStorage.setItem('password', password)
        localStorage.setItem('name', fullname)

        navigate('/login')
    }

    return (
        <div className='signup-bg  '>      


        <div className="signup-box">
            <h2>Create Account</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Full Name"
                    className="input-field"
                    value={fullname}
                    onChange={(e) => setFullname(e.target.value)}
                    required
                />
                <input
                    type="email"
                    placeholder="Email Address"
                    className="input-field"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Create Password"
                    className="input-field"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Confirm Password"
                    className="input-field"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                />
                <button type="submit" className="signup-btn">Sign Up</button>
            </form>
        </div>
        </div>  
    )
}

export default SignUp
