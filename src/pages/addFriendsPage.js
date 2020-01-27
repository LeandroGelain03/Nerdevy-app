import React, { Component } from 'react';
import NavBarComponent from '../components/layout/navBarPrivate';
import FooterComponent from '../components/layout/footer';
import SidebarComponent from '../components/layout/sidebarComponent';
import { Container ,Row, Col } from 'react-bootstrap';
import Axios from 'axios';
import Columns from 'react-columns';
import '../styles/Friend.css';

class CardPage extends Component {
    constructor (props){
        super(props);
        this.state ={
            users : [],
        }
    }
    async listFriends () {
        await Axios({
            method : "GET",
            url: "http://localhost:3333/user/list",
        }).then((response) => {
            this.setState({
                users: response.data
            })
        }).catch((error) => console.log(error))
    }
    componentDidMount() {
        this.listFriends();
    }
    UserIndividual() {
        return this.state.users.map( user =>   
            {
            return (
                <div className={'gridUsers'}>
                    <div className={'backgroundFriends'}>
                        <Container>
                            <Row>
                                <Col md="auto">
                                    <img src={require('../img/green1.jpg')} className={'imgStyle'} alt=''/>
                                </Col>
                                <Col>
                                    <p className={'textStyle'}>
                                        { user.username }
                                    </p>
                                    <p className={'textStyle'}>
                                        { user.email }
                                    </p>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </div>
            )
        });
    }
    grid_Friends(){
        var queries = [{
            columns: 2,
            query: 'min-width: 1300px'
        }, {
            columns: 3,
            query: 'min-width: 1650px'
        }, {
            columns: 4,
            query: 'min-width: 2000px'
        }];
            return(
                <Columns queries={queries}>
                    {this.UserIndividual()}
                </Columns>
        )
    }
    render() {
        return (
            <div >
                <div>
                    <SidebarComponent/>
                </div>
                <div className={'body'}>
                    <NavBarComponent/>
                        <div className={'body_content'}>
                            {this.grid_Friends()}
                        </div>
                    <FooterComponent/>
                </div>
            </div>
        )
    }
}

export default CardPage;