import React, { Component } from 'react';
import { footer } from 'react-bootstrap';
import '../../styles/loginPage.css';

class Footer_component extends Component {
    render() {
        return (
            <div className={'footer_shadow'}>
                <footer className={'footer_style'}>
                    <div className={'align_text_center'}>
                        <span className={'footer_text'}> &copy; 2019 Nerdevy</span><br></br>
                        <span className={'footer_text'}>Create by Nerdevy corp</span>
                    </div>
                </footer>
            </div>
        )
    }
}

export default Footer_component;