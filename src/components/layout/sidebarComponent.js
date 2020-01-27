import React, { Component } from 'react';
import  { createHashHistory }  from 'history';
import SideNav, { NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import '../../styles/DashboardPage.css';

export default class SidebarComponent extends Component{
    constructor(props) {
        super(props);
        this.logout = this.logout.bind(this);
      }
    
    logout = () =>{
        localStorage.clear()
        console.log('clear localstorage')
        const history = createHashHistory()
        history.push('/')    
    }

    render() {
        return (
            <div  className={'sidebar_full'}>
            <SideNav onSelect={(selected) => {}} className={'sidebar_color'}>
                <SideNav.Toggle />
                <SideNav.Nav defaultSelected="home" className={'init_sidebar'}>
                    <NavItem eventKey="home">
                        <NavIcon>
                            <img src={require('../../img/logos/home-icon.svg')} style={{width: '40%'}} alt='home-icon'/>
                        </NavIcon>
                        <NavText>
                            Home
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="friends">
                        <NavIcon eventKey='friends'>
                            <img src={require('../../img/logos/friend-icon.svg')} style={{width: '50%'}} alt='friends-icon'/>
                        </NavIcon>
                        <NavText>
                            Amigos
                        </NavText>
                        <NavItem eventKey="friends/add"  navitemStyle={{color:'#6b6b6b'}}>
                            <NavText>
                                Amigos adicionados
                            </NavText>
                        </NavItem>
                        <NavItem eventKey="friends/busca" navitemStyle={{color:'#6b6b6b'}} >
                            <NavText>
                                Buscar amigos
                            </NavText>
                        </NavItem>
                    </NavItem>
                    <NavItem>
                        <NavIcon eventKey='group'>
                            <img src={require('../../img/logos/group-icon.svg')} style={{width: '50%'}} alt='friends-icon'></img>
                        </NavIcon>
                        <NavText>
                            Grupos
                        </NavText>
                    </NavItem>
                    <NavItem className={'logout_button'} onClick={this.logout}>
                        <NavIcon eventKey='logout'>
                            <img src={require('../../img/logos/logout-icon.svg')} style={{width: '50%'}} alt='friends-icon'></img>
                        </NavIcon>
                        <NavText>
                            Logout
                        </NavText>
                    </NavItem>
                </SideNav.Nav>
            </SideNav> 
        </div>
        )
    }
}