import React, { Component } from "react";

import NavBarComponent from '../components/layout/navBarPrivate';
import FooterComponent from '../components/layout/footer';
import SidebarComponent from '../components/layout/sidebarComponent';

import "../styles/DashboardPage.css"
class ViewProfilePage extends Component {

    constructor(props){
        super(props);
        this.state = {
            data: []
        }
    }

    render(){
        return (
            <div>
                <div>
                    <SidebarComponent/>
                </div>
                <div className={'body'}>
                    <NavBarComponent/>
                        <div className={'body_content'}>
                        </div>
                    <FooterComponent/>
                </div>
            </div>
        )
    }
}
export default ViewProfilePage;