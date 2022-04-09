import React, { Component } from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
function Header() {
    let user = JSON.parse(localStorage.getItem('uset-info'));
    const navigate = useNavigate();
    function logout() {
        localStorage.clear();
        navigate('/register');
    }
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#">Stationary Product Sell</Navbar.Brand>
                    <Nav className="me-auto navebar-wrapper">
                        {
                            localStorage.getItem('uset-info') ?
                                <>
                                    <Link to="/">Products List</Link>
                                    <Link to="/add">Add Products</Link>
                                    <Link to="/update">Update Products</Link>
                                    <Link to="/search">Search Products</Link>
                                </> :
                                <>
                                    <Link to="/login">Login</Link>
                                    <Link to="/register">Register</Link>
                                </>
                        }


                    </Nav>
                    {
                        localStorage.getItem('uset-info') ?
                            <>
                                <Nav>
                                    <NavDropdown title={user && user.name}>
                                        <NavDropdown.Item onClick={logout} >Log out</NavDropdown.Item>
                                    </NavDropdown>
                                </Nav></> : null
                    }

                </Container>
            </Navbar>
        </div>
    );

}
export default Header;