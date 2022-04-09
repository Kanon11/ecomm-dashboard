import React, { Component, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
function Protected(props) {
    let CMP = props.Cmp;
    const navigate = useNavigate();
    useEffect(() => {
        if (!localStorage.getItem('uset-info')) {
            navigate('/register');
        }
    }, []);
    return (
        <>
            <CMP></CMP>
        </>
    );

}
export default Protected;