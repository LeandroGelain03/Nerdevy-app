import React, { Component } from 'react';
import '../../styles/AddCards.css';
import Modal from 'react-responsive-modal';
import Axios from 'axios';
import { Button } from 'react-bootstrap';

class DeleteCard extends Component { 
    
    constructor(props) {
        super(props);
        this.state = {
            open: false,
        };
    };
    async deleteCard() {
        await Axios({
            method:"POST",
            url:'http://localhost:3333/card/delete',
            data: {
                idCard: this.props.children
            }
        })
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
                <Button variant="danger" onClick={this.onOpenModal}> deletar </Button>
                <Modal open={this.state.open} 
                       onClose={this.onCloseModal}
                       center 
                       classNames={{modal:"modal-content"}}
                       styles={styles.modalStyles}
                    >
                    <p>Realmente deseja deletar esse card?</p>
                    <div className={'spaceBetween'}>
                        <Button variant="danger" onClick={() => this.deleteCard()}>Sim</Button>
                        <Button variant="secondary" onClick={this.onCloseModal}>Não</Button>
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
            width: "25vw",
            height: "10vw",
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

export default DeleteCard;