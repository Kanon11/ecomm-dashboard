import React, { Component, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
function Register() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    function SignUP() {
        let item = { name, email, password };
        console.warn(item);
        (async () => {
            let result = await fetch("http://127.0.0.1:8000/api/register", {
                method: 'POST',
                body: JSON.stringify(item),
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': '*/*'
                }
            })
            result = await result.json();
            localStorage.setItem("uset-info", JSON.stringify(result));
            navigate('/add');
        })();

    }
    useEffect(() => {
        if (localStorage.getItem('uset-info')) {
            navigate('/add');
        }
    }, []);
    return (
        <>
            <Header></Header>

            <div className='col-sm-6 offset-sm-3'>
                <h1>Register Page</h1>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} className='form-control' placeholder='Name'></input>
                <br></br>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className='form-control' placeholder='Email'></input>
                <br></br>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className='form-control' placeholder='password'></input>
                <br></br>
                <button onClick={SignUP} className='btn btn-primary'>Sign Up</button>
            </div>
        </>
    );

}
export default Register;