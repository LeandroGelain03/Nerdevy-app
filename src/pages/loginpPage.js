import React, { Component } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import '../styles/loginPage.css';
import NavBarComponent from '../components/navBar';
import FooterComponent from '../components/footer';

class loginPage extends Component{    
    
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    
    handleChange(event) {
        let data = {};
        data[event.target.name] = event.target.value;
        this.setState(data);
        console.log(this.state)
    }
    
    handleSubmit(event) {
        event.preventDefault();
        
    }

    render() {
        return(
        <div className={'screen'}>
            <NavBarComponent/>
            <div className={"container_div"}>
                <Row className={'screen'}>
                    <Col className={'container_left'}>
                        <img src={require('../img/green1.jpg')} width="100%" height='100%' alt=''></img>
                    </Col>
                    <Col className={'container_right'}>
                    <Form>
                        <Form.Group controlId="formBasicEmail" className={'form_align'}>
                            <Form.Label className={'text_color_dark'}>Email address</Form.Label>
                            <Form.Control onChange={this.handleChange} type="email" placeholder="Enter email" name="email"/>
                        </Form.Group>
                    
                        <Form.Group controlId="formBasicPassword" className={'form_align'}>
                            <Form.Label className={'text_color_dark'}>Password</Form.Label>
                            <Form.Control onChange={this.handleChange} type="password" placeholder="Password" name="password"/>
                        </Form.Group>
                        <div align='center' className={'top_space2'}>
                            <Container>
                                <Row align='center'>
                                    <Col className={'col_left'}>
                                        <Button variant="light" type="submit">
                                            Login
                                        </Button>
                                    </Col>
                                    <Col className={'col_right'}>
                                        <div className='text_signup'>
                                            <p>
                                                Ainda não tem uma conta?
                                            </p>
                                        </div>
                                        <LinkContainer to='signup/'>
                                        <Button variant="light" type='button' onClick={this.signup}>
                                            Cadastro
                                        </Button>
                                        </LinkContainer>
                                    </Col>
                                </Row>
                            </Container>
                        </div>
                    </Form>
                    </Col>
                </Row>
            </div>
            <FooterComponent/>
        </div>
        )
    }
}

export default loginPage;