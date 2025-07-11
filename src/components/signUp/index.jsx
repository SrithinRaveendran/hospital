import { Component } from "react";
import { useNavigate } from 'react-router-dom';

import './index.css'
class SignUp extends Component {
    state = { fullname: "", email: "", password: "", confirmPassword: "" }

    fullNameOnChange = (event) => {
        console.log(event.target)
        this.setState({ fullname: event.target.value })
    }
    emailonChange = (event) => {
        this.setState({ email: event.target.value })
    }
    passwordonChange = (event) => {
        this.setState({ password: event.target.value })
    }
    confirmPasswordonChange = (event) => {
        this.setState({ confirmPassword: event.target.value })
    }
    
    submithandle = (event) => {
        const navigate = useNavigate();
        event.preventDefault()
        const { fullname, password, confirmPassword,email } = this.state;
        if (password !== confirmPassword) {
            alert("Paswword should be same")
            return;
        }
        navigate('/login')
        localStorage.setItem('email', email)
        localStorage.setItem('password'.password)
        localStorage.setItem("name",fullname)

    }


    render() {
        const { fullname, email, password, confirmPassword } = this.state
        return (
            <div className="signup-box">
                <h2>Create Account</h2>
                <form onSubmit={this.submithandle}>
                    <input type="text" placeholder="Full Name" className="input-field" value={fullname} onChange={this.fullNameOnChange} required />
                    <input type="email" placeholder="Email Address" className="input-field" value={email} onChange={this.emailonChange} required />
                    <input type="password" placeholder="Create Password" className="input-field" value={password} onChange={this.passwordonChange} required />
                    <input type="password" placeholder="Confirm Password" className="input-field" value={confirmPassword} onChange={this.confirmPasswordonChange} required />
                    <button type="submit" className="signup-btn">Sign Up</button>
                </form>
            </div>

        )

    }
}

export default SignUp