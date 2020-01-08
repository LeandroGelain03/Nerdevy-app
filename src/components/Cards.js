import React, { Component } from 'react';
import '../styles/CardSlick.css';
import Axios from 'axios';
import CardDetails from './CardDetails';

class AddCard extends Component {
    constructor(props){
        super(props);
        this.state = {
            card: [],
        };
    } 

    onOpenModal = () => {
        this.setState({ open:true });
    };
    onCloseModal = () => {
        this.setState({ open:false });
    }

    getCards() {
        Axios({
            method: 'POST',
            url: 'http://localhost:4000/card/listLimit',
            data: { initial_number : 5}
        }).then((response) => {
            this.setState({
                card: response.data
            })
        }).catch((error) => console.log(error))    
    }
    componentDidMount() {
        this.getCards();
    }
    CardIndividual() {
        return this.state.card.map( card =>   
            {
            return (
                <div className={'background'}>
                    <div className={'contentCard'}>
                        <div>
                            <p className={'titleStyle'}>{card.title}</p>
                        </div>  
                        <p className={'description'}>
                            {card.description_challenge}                             
                        </p>
                        <CardDetails>
                           {card.idChallenges} 
                        </CardDetails>
                    </div>
                </div>
            )
        });
    }

    render() {
        return (
            <div className={'cardsContainer'}>
                <div className="container-fluid py-2">
                    <div className="d-flex flex-row flex-nowrap">
                            {this.CardIndividual()}
                    </div>
                    
                </div>
            </div>
        )
    }
}

export default AddCard;