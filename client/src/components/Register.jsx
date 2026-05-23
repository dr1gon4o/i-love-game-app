import React from 'react'
import { Link, redirect } from 'react-router-dom'
import { registerUser } from '../authentication/authes';



export default function Register() {

    const register = async (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        const confirmPassword = e.target['confirm-password'].value;

        if (password !== confirmPassword) {
            return alert('Passwords do not match');
        }
        if (password.length < 6) {
            return alert('Password must be at least 6 characters long');
        }
        if (email.indexOf('@') === -1) {
            return alert('Email must contain @');
        }
        if (email === '') {
            return alert('Email is required');
        }
        if (password === '') {
            return alert('Password is required');
        }
        if (confirmPassword === '') {
            return alert('Confirm Password is required');
        }

        try {
            await registerUser(email, password);

            alert('Registration successful');
            e.target.reset();
            redirect('/login');
        } catch (error) {
            alert(error.message);
        }
    }


    return (
        <>
            {/* Register Page ( Only for Guest users ) */}
            <section id="register-page" className="content auth">
                <form id="register" onSubmit={register}>
                    <div className="container">
                        <div className="brand-logo" />
                        <h1>Register</h1>
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" placeholder="Your Email" />
                        <label htmlFor="pass">Password:</label>
                        <input
                            type="password"
                            name="password"
                            id="register-password"
                            placeholder="Password"
                        />
                        <label htmlFor="con-pass">Confirm Password:</label>
                        <input
                            type="password"
                            name="confirm-password"
                            id="confirm-password"
                            placeholder="Repeat Password"
                        />
                        <input className="btn submit" type="submit" defaultValue="Register" />
                    </div>
                </form>
            </section>
        </>
    )
}