import React, { Component } from 'react';
import { Navbar, Dropdown } from 'react-bootstrap';
import '../../styles/loginPage.css';
import Axios from 'axios'
import { withRouter } from 'react-router';
class NavBar_component extends Component {

    constructor(props){
        super(props);
        this.state={
            profilePicture: require("../../img/logos/ProfileIcon.png"),
        }
    }
    getProfilePicture () {
        Axios({
            method: "POST",
            ulr: "http://localhost:3333/user/view",
            data : {username: localStorage.getItem("Username")}
        }).then((response) => {
            if(response.data.img){
                this.setState({profilePicture: response.data.img})
                }
            })
        }
    handleClick = () =>{
        this.props.history.push("/profile/view");
    }

    componentDidMount() {
        this.getProfilePicture()
    }

    render () {
        return (
            <div className={'navbar_default'} >
                <div className={'navbar_shadow'}>
                    <Navbar className={'navbar_shadow'}>
                        <Navbar.Brand href="/dashboard">
                        <img src={require("../../img/logos/verde_lado_lado.svg")}
                            className="d-inline-block align-top"
                            width='70%'
                            alt='logo'
                            />
                        </Navbar.Brand>
                        <div className={'profileIconStyle'}>
                            <Dropdown drop="left">
                                <Dropdown.Toggle className={'buttonDropdown'}></Dropdown.Toggle>
                                    <img onClick={this.handleClick} src={this.state.profilePicture} className={"profileImageStyleClickable"} alt="profile"/>
                                <Dropdown.Menu>
                                    <Dropdown.Item href="/profile/edit" >Editar Perfil</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                    </Navbar>
                </div>
            </div>
        )
    }
}

export default withRouter(NavBar_component);