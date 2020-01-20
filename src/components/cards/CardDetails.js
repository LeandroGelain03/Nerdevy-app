import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import Modal from 'react-responsive-modal';
import Axios from 'axios';
import DeleteCard from './deleteCardsComponent';
import EditCard from './editCardComponent';
export default class CardDetails extends Component{
    constructor(props){
        super(props);
        this.state = {
            open:false,
            details: []
        };
    }  
    onOpenModal = () => {
        this.setState({ open:true });
        this.getDetails()
    };
    onCloseModal = () => {
        this.setState({ open:false });
    }
    getDetails = () => {
        Axios({
            method: 'POST',
            url: 'http://localhost:3333/card/findById',
            data: { idCard: this.props.children._id }
        }).then((response) => {
            this.setState({
                details: response.data
            })
        }).catch((error) => console.log(error))
    }
    componentDidMount(props){
        this.getDetails();
    }
    render() {
        return (
            <div className={'details'}>
                <Button variant="secondary" onClick={this.onOpenModal}>detalhes</Button>
                <Modal open={this.state.open}
                        onClose={this.onCloseModal}
                        center
                        classNames={{modal:"modal-content"}}>
                    <div>
                        <div className={'titleStyleDetails'}>
                            {this.state.details.title}
                        </div>
                    </div>
                    <div>
                        <div className={'subtitleDetails'}>
                            categoria:
                        </div>
                        {this.state.details.category}
                    </div>
                    <div>
                        <div className={'subtitleDetails'}>
                            descrição
                        </div>
                        {this.state.details.description}
                    </div>
                    <div>
                        <div className={'subtitleDetails'}>
                            <p>{this.state.details.points} pontos</p>
                        </div>
                    </div>
                    <div>
                        <div className={'subtitleDetails'}>
                            {this.state.details.created_by}
                        </div>
                    </div>
                    <DeleteCard>
                        {this.props.children}
                    </DeleteCard>
                    <EditCard>
                        {this.props.children}
                    </EditCard>
                </Modal>
            </div>
        )
    }
}