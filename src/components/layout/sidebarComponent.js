import React, { Component } from 'react';
import  { createHashHistory }  from 'history';
import SideNav, { NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import '../../styles/DashboardPage.css';

export default class SidebarComponent extends Component{
    constructor(props) {
        super(props);
        this.state = {
            selected: this.getSelected()
        }
        this.changeSelected = this.changeSelected.bind(this)
        this.logout = this.logout.bind(this);
      }
    getSelected () {
        if (!localStorage.getItem("Selected")){
            localStorage.setItem("Selected","home")
        }  return localStorage.getItem("Selected")
    }
    logout = () =>{
        localStorage.clear()
        console.log('clear localstorage')
        const history = createHashHistory()
        history.push('/')    
    }
    redirectPage(path) {
        const history = createHashHistory()
        history.push(path)
    }
    changeSelected (selected, path) {
        this.setState({selected:localStorage.setItem("Selected",selected)})
        window.location.href = path
    }
    render() {
        return (
            <div className={'sidebar_full'}>
            <SideNav className={'sidebar_color'}>
                <SideNav.Toggle />
                <SideNav.Nav defaultSelected={this.state.selected} className={'init_sidebar'}>
                    <NavItem eventKey="home">
                        <NavIcon>
                            <img src={require('../../img/logos/home-icon.svg')} style={{width: '40%'}} alt='home-icon'onClick={() => this.changeSelected("home","/dashboard")}/>
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
                        <NavItem eventKey="friends/busca" navitemStyle={{color:'#6b6b6b'}} onClick={() => this.changeSelected("friends","/addfriends")} >
                            <NavText >
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