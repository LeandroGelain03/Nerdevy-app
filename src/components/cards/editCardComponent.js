import React, { Component } from 'react';
import '../../styles/AddCards.css';
import Modal from 'react-responsive-modal';
import Axios from 'axios';
import {Form, Col, Button } from 'react-bootstrap'

class EditCard extends Component { 
    
    constructor(props) {
        super(props);
        this.state = {
            open2:false,
            details: this.props.children,
            title_card:this.props.children.title,
            points:this.props.children.points,
            description:this.props.children.description,
            category:this.props.children.category,
            members:[]
        };
        this.handleChanges = this.handleChanges.bind(this);
    };
    async updateCard() {
        await Axios({
            method:"POST",
            url:'http://localhost:3333/card/update',
            data: {
                idCard: this.props.children.idCard,
                username : localStorage.getItem('Username'),
                category: this.state.category,
                title: this.state.title_card,
                description: this.state.description,
                points: this.state.points,
                members:[]
            }
        })
        window.location.reload()  
    }
    onOpenModal = () => {
        this.setState({ open2:true });
    };
    onCloseModal = () => {
        this.setState({ open2:false });
    }
    handleChanges(event){
        let data = {};
        data[event.target.name] = event.target.value;
        this.setState(data);
    };
    render() {
        return (
            <div>
                <Button variant="dark" onClick={this.onOpenModal}>editar</Button>
                <Modal open={this.state.open2} 
                       onClose={this.onCloseModal}
                       center 
                       classNames={{modal:"modal-content"}}
                       styles={styles.modalStyles}
                    >
                    <div className={'formContainer'}>
                        <Form>
                            <Form.Row>
                                <Form.Group>
                                    <Form.Label className={'labelForm'}>Titulo do Card</Form.Label>
                                    <Form.Control onChange={this.handleChanges} name="title_card" defaultValue={this.props.children.title}></Form.Control>
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Col>
                                    <Form.Group>
                                        <Form.Label className={'labelForm'}>Categoria</Form.Label>
                                        <Form.Control onChange={this.handleChanges} name="category" defaultValue={this.props.children.category}></Form.Control>
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group>
                                        <Form.Label className={'labelForm'}>Pontos por dificuldade</Form.Label>
                                        <Form.Control as='select' onChange={this.handleChanges} name="points" defaultValue={this.props.children.points}>
                                            <option>10</option>
                                            <option>20</option>
                                            <option>30</option>
                                            <option>40</option>
                                            <option>50</option>
                                            <option>60</option>
                                            <option>70</option>
                                            <option>80</option>
                                            <option>90</option>
                                            <option>100</option>
                                        </Form.Control>
                                    </Form.Group>
                                </Col>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group className={'descriptionContainer'}>
                                    <Form.Label className={'labelForm'}>Descrição do Card</Form.Label>
                                    <Form.Control onChange={this.handleChanges} 
                                                  as="textarea" 
                                                  className={'descriptionSize'} 
                                                  rows="5" name="description"
                                                  defaultValue={this.props.children.description}
                                                  />
                                </Form.Group>
                            </Form.Row>
                        </Form>
                        <div className={'buttonContainer'}>
                            <Button variant="secondary" type='submit' onClick={()=>this.updateCard()}>Salvar</Button>
                        </div>
                    </div>
                </Modal>
            </div>
        )
    }
}
const styles = {
    modalStyles: {
        modal: {
            borderRadius: "10px",
            width: "90%",
            height: "75%",
        },
        closeButton: {
            cursor:"pointer",
            color: "black"
        },
        closeIcon: {
            fill: "gray",
        }
    }
}
export default EditCard;