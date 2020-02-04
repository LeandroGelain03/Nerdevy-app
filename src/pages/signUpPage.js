import React, { Component } from 'react';
import { Form, Col, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { LoginContext } from './loginContext';
import NavBarComponent from '../components/layout/navBar';
import FooterComponent from '../components/layout/footer';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import '../styles/signUpPage.css';
class signUpPage extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            first_name: '',
            last_name:'',
            email:'',
            username:'',
            category:'',
            instituition:'',
            born_date :new Date(),
            city:'',
            state:'',
            country:'',
            pwd:'',
            pwd_confirm:'',
            
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleChangeCalendar = this.handleChangeCalendar.bind(this)
    };
       
    handleChange(event) {
        let data = {};
        data[event.target.name] = event.target.value;
        this.setState(data);
    }
    handleChangeCalendar(event, name) {
        let data = {};
        data[name] = event
        this.setState(data)
    }
    async postSignUp() {
        await axios.post('http://localhost:3333/user/signup', 
        {   "email":this.state.email,
            "username":this.state.username,
            "first_name": this.state.first_name,
            "last_name":this.state.last_name,
            "pwd":this.state.pwd,
            "category":this.state.category,
            "institution":this.state.instituition,
            "born_date":String( this.state.born_date.getDate()) +'/'+String(this.state.born_date.getMonth()+1)+'/'+String(this.state.born_date.getFullYear()),
            "city":this.state.city,
            "state":this.state.state,
            "country":this.state.country, }
        )
        .then (response => {
            console.log(response);
                localStorage.setItem('Token', response.data['token']);
                this.context.getUser(response.data.tokrn);
                this.props.history.push(`/dashboard/`)
        })
        .catch(error => {
            console.log(error.response)
            alert('Email já cadastrado')
        })
    }
    handleSubmit = (event) =>{
        event.preventDefault();
        this.postSignUp()
    }
              
    render() {        
        return (
            <div className={'screen'}>
                <NavBarComponent/>
                <div className={'body_style'}>
                <div className={'text_init'}>
                    <h1 className={'text_color_dark'}>
                        Novo por aqui?
                    </h1>
                    <h5 className='text_color_dark'>Venha fazer parte da nossa comunidade e cresça junto conosco!!</h5>
                </div>
                    <div className={'Form_style'}>
                        <Form>
                            <Form.Row>
                                <Col>
                                    <Form.Group  className={'space_between_FN'}>
                                        <Form.Label className={'text_color_dark'}>Primeiro nome</Form.Label>
                                        <Form.Control onChange={this.handleChange} placeholder='Primeiro nome' name='first_name' ></Form.Control>
                                    </Form.Group>
                                </Col>
                               
                                <Col>
                                    <Form.Group className={'space_between_LN'}>
                                        <Form.Label className={'text_color_dark'}>Sobrenome</Form.Label>
                                        <Form.Control onChange={this.handleChange} placeholder='Sobrenome' name='last_name'></Form.Control>
                                    </Form.Group>
                                </Col>
                            </Form.Row>
                            <Form.Row>
                                <Col>
                                    <Form.Group className={'space_between_FN'}>
                                        <Form.Label className={'text_color_dark'}>Cidade</Form.Label>
                                        <Form.Control onChange={this.handleChange} placeholder='Sua cidade' name='city'></Form.Control>
                                    </Form.Group>
                                </Col>
                               
                                <Col>
                                    <Form.Group className={'space_between_LN'}>
                                        <Form.Label className={'text_color_dark'}>Estado (região)</Form.Label>
                                        <Form.Control onChange={this.handleChange} placeholder='Estado' name='state'></Form.Control>
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group className={'space_between_LN'}>
                                        <Form.Label className={'text_color_dark'}>País</Form.Label>
                                        <Form.Control onChange={this.handleChange} placeholder='País' name='country'></Form.Control>
                                    </Form.Group>
                                </Col>
                            </Form.Row>
                                <Form.Group>
                                    <Form.Label className={'text_color_dark'}>Email address</Form.Label>
                                    <Form.Control onChange={this.handleChange} type="email" placeholder="Enter email" name="email"/>
                                </Form.Group>
                            <Form.Row>
                                <Col>
                                    <Form.Group className={'space_between_FN'}>
                                        <Form.Label className={'text_color_dark'}>Username</Form.Label>
                                        <Form.Control onChange={this.handleChange} type='text' placeholder='Username' name='username'></Form.Control>
                                    </Form.Group>
                                </Col>
                               
                                <Col>
                                    <Form.Group className={'space_between_LN'}>
                                        <Form.Label className={'text_color_dark'}>Categoria</Form.Label>
                                        <Form.Control as='select' onChange={this.handleChange} name='category' >
                                            <option> Escolha... </option>
                                            <option> Estudante </option>
                                            <option> Estudante - Empregado </option>
                                            <option> Estudante em busca de emprego </option>
                                            <option> Programador Junior </option>
                                            <option> Programador Pleno </option>
                                            <option> Programador Sênior </option>
                                            <option> Professor - Mestre </option>
                                            <option> Professor - Doutor </option>
                                        </Form.Control>
                                    </Form.Group>
                                </Col>
                                <Col className={'calendar_container'}>
                                    <div className={'calendar_style'}>
                                        <Form.Group>
                                            <Form.Label className={'text_color_dark'}>Data de Nascimento</Form.Label><br/>
                                            <DatePicker dateFormat='dd/mm/yyyy' selected={this.state.born_date} onChange={(date) => {this.handleChangeCalendar(date, 'born_date')}} className={'calendar_block'}/>
                                        </Form.Group>
                                    </div>
                                </Col>
                            </Form.Row>
                            <Form.Row>
                                <Col>
                                    <Form.Group>
                                        <Form.Label className={'text_color_dark'}>Instuição que pertence</Form.Label>
                                        <Form.Control onChange={this.handleChange} placeholder="Nome da faculdade ou empresa que frequenta" name='instituition'></Form.Control>
                                    </Form.Group>
                                </Col>
                            </Form.Row>
                            <Form.Row>
                                <Col>
                                    <Form.Group className={'space_between_FN'}>
                                        <Form.Label className={'text_color_dark'}>Senha</Form.Label>
                                        <Form.Control onChange={this.handleChange} type='password' placeholder='Senha' name='pwd'></Form.Control>
                                    </Form.Group>
                                </Col>
                               
                                <Col>
                                    <Form.Group className={'space_between_LN'}>
                                        <Form.Label className={'text_color_dark'}>Confirme a senha</Form.Label>
                                        <Form.Control onChange={this.handleChange} type='password' placeholder='Confirmação de senha' name='pwd_confirm'></Form.Control>
                                    </Form.Group>
                                </Col>
                            </Form.Row>
                            <div className={'btn_signUp'}>
                                <LinkContainer to='/home'>
                                    <Button variant="light" type='submit' onClick={this.handleSubmit}>
                                        Cadastre!
                                    </Button>
                                </LinkContainer>
                            </div>
                        </Form>
                    </div>
                </div>
                <FooterComponent/>
            </div>
        )
    }
}
signUpPage.contextType = LoginContext;
export default signUpPage;