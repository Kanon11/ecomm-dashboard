import React, { Component, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    function Login() {
        let item = { email, password };
        console.warn(item);
        (async () => {
            let result = await fetch("http://127.0.0.1:8000/api/login", {
                method: 'POST',
                body: JSON.stringify(item),
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': '*/*'
                }
            })
            result = await result.json();
            if (result.error) {
                alert(result.error);
            }
            else {
                localStorage.setItem("uset-info", JSON.stringify(result));
                navigate('/add');
            }

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
                <h1>Login Page</h1>
                <input type="text" onChange={(e) => setEmail(e.target.value)} placeholder='email' className='form-control'></input>
                <br></br>
                <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder='password' className='form-control'></input>
                <br></br>
                <button onClick={Login} className='btn btn-primary'>Log In</button>
            </div>
        </>
    );

}
export default Login;