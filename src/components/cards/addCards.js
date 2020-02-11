import React, { Component } from 'react';
import '../../styles/AddCards.css';
import Modal from 'react-responsive-modal'
import {Form, Col, Button } from 'react-bootstrap'
import Axios from 'axios';
class AddCard extends Component { 
    
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            title_card:'',
            points:"10",
            description:'',
            category:'',
            username: localStorage.getItem('Username')
        };
        this.handleChanges = this.handleChanges.bind(this);
    };

    handleChanges(event){
        let data = {};
        data[event.target.name] = event.target.value;
        this.setState(data);
    };
     async handleSubmit(event){
        await Axios({
            headers: {
                'Access-Control-Allow-Origin':'*'
            },
            method:"POST",
            url:'http://localhost:3333/card/add',
            data: {
                username: this.state.username,
                category: this.state.category,
                title: this.state.title_card,
                description: this.state.description,
                points: parseInt(this.state.points)
            }
         })
        .then(
            (response)=>{console.log(response)},
            (error)=>{console.log(error)}
        );
        this.setState({open:false})
        window.location.reload()
    }

    onOpenModal = () => {
        this.setState({ open:true });
    };
    onCloseModal = () => {
        this.setState({ open:false });
    }

    render() {
        return (
            <div>
                <div  onClick={this.onOpenModal} className={'backgroundColor'}>
                    <div className={'contentCardAdd'}>
                        <p>Adicionar card</p>
                    </div>
                </div>
                <Modal open={this.state.open} 
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
                                    <Form.Control onChange={this.handleChanges} name="title_card"></Form.Control>
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Col>
                                    <Form.Group>
                                        <Form.Label className={'labelForm'}>Categoria</Form.Label>
                                        <Form.Control onChange={this.handleChanges} name="category"></Form.Control>
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group>
                                        <Form.Label className={'labelForm'}>Pontos por dificuldade</Form.Label>
                                        <Form.Control as='select' onChange={this.handleChanges} name="points">
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
                                                  />
                                </Form.Group>
                            </Form.Row>
                        </Form>
                        <div className={'buttonContainer'}>
                            <Button variant="secondary" type='submit' onClick={() => this.handleSubmit()}>Salvar</Button>
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
            width: "60%",
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

export default AddCard;