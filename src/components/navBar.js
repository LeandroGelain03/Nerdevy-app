import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';
import '../styles/loginPage.css';

class NavBar_component extends Component {
    render () {
        return (
            <div className={'navbar_default'} >
                <div className={'navbar_shadow'}>
                    <Navbar className={'navbar_shadow'}>
                        <Navbar.Brand href="/dashboard">
                        <img src={require("../img/logos/verde_lado_lado.svg")}
                            className="d-inline-block align-top"
                            width='70%'
                            alt='logo'
                            />
                        </Navbar.Brand>
                    </Navbar>
                </div>
            </div>
        )
    }
}

export default NavBar_component;