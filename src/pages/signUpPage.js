import React, { Component } from 'react';
import '../styles/signUpPage.css';
import NavBarComponent from '../components/navBar';
import FooterComponent from '../components/footer';

class signUpPage extends Component {
    render() {
        return (
            <div className={'screen'}>
                <NavBarComponent/>
                <div className={'body_style'}>
                    Form Sign Up
                </div>
                <FooterComponent/>
            </div>
        )
    }
}

export default signUpPage;