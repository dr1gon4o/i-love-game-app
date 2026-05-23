import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { loginUser } from '../authentication/authes';

export default function Login() {
    
    const navigate = useNavigate();
    // ako e samo s localstorage
    // const users = JSON.parse(localStorage.getItem("users")) || [];
    // const user = users.find(u => u.email === email);
    // if (!user) {
    //     return alert("Email does not exist");
    // }

    // if (user.password !== password) {
    //     return alert("Wrong password");
    // }

    const login = async (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        if (email.indexOf('@') === -1) {
            return alert('Email must contain @');
        }

        if (password.length < 6) {
            return alert('Password must be at least 6 characters long');
        }
        if (email === '') {
            return alert('Email is required');
        }
        if (password === '') {
            return alert('Password is required');
        }

        try {
            await loginUser(email, password);
            alert('Login successful');
            e.target.reset();
            navigate('/');
        } catch (error) {
            alert(error.message);
        }
    }

    return (
        <>
            {/* Login Page ( Only for Guest users ) */}
            <section id="login-page">
                <form id="login" onSubmit={login}>
                    <div className="container">
                        <h1>Login</h1>
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" placeholder="Your Email" />
                        <label htmlFor="login-pass">Password</label>
                        <input
                            type="password"
                            id="login-password"
                            name="password"
                            placeholder="Password"
                        />
                        <input type="submit" className="btn submit" defaultValue="Login" />
                    </div>
                </form>
            </section>
        </>

    )
}