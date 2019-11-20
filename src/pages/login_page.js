import React from 'react';
import { Navbar, Form, Button, Container, Row, Col, footer } from 'react-bootstrap';
import '../styles/login_page.css'

class login_page extends React.Component{    
    
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

        this.setState(data, () => {
            let { email, password } = this.state;
        });
    }
    
    handleSubmit(event) {
        event.preventDefault();
        
    }

    render() {
        return(
        <div className={'screen'}>
            <div className={'navbar_default'} >
                <div className={'navbar_shadow'}>

                    <Navbar className={'navbar_shadow'}>
                        <Navbar.Brand href="/login">
                        <img src={require("../img/logos/verde_lado_lado.svg")}
                            className="d-inline-block align-top"
                            width='70%'
                            />
                        </Navbar.Brand>
                    </Navbar>
                </div>
            </div>
            <div className={"container_div"}>
                {/* <Container> */}
                    <Row className={'screen'}>
                        <Col className={'container_left'}>
                            <img src={require('../img/green1.jpg')} width="100%" height='100%'></img>
                        </Col>
                        <Col className={'container_right'}>
                        <Form>
                            <Form.Group controlId="formBasicEmail" className={'form_align'}>
                                <Form.Label className={'text_color_dark'}>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email"/>
                            </Form.Group>
                        
                            <Form.Group controlId="formBasicPassword" className={'form_align'}>
                                <Form.Label className={'text_color_dark'}>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Password" />
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
                                            <Button variant="light" type="submit">
                                                Cadastro
                                            </Button>
                                        </Col>
                                    </Row>
                                </Container>
                            </div>
                        </Form>
                        </Col>
                    </Row>
                {/* </Container> */}
            </div>
            <div className={'footer_shadow'}>
            <footer class="app-footer" className={'footer_style'}>
                <div className={'align_text_center'}>
                    <span className={'footer_text'}> &copy; 2019 Nerdevy</span><br></br>
                    <span className={'footer_text'}>Create by Nerdevy corp</span>
                </div>
            </footer>
            </div>
        </div>
        )
    }
}

export default login_page;