import React, { Component } from 'react';
import '../styles/CardSlick.css';
import Axios from 'axios';
import { Button } from 'react-bootstrap';

class AddCard extends Component {
    constructor(props){
        super(props);
        this.state = {
            card: [],
        };
    }  

    alert_number_card = (number_card) => {
        alert(number_card)
    }

    getCards() {
        Axios({
            method: 'POST',
            url: 'http://localhost:4000/card/view',
            data: { initial_number : 5}
        }).then((response) => {
            this.setState({
                card: response.data
            })
            // console.log(this.state.card)
        }).catch((error) => console.log(error))    
    }
    componentDidMount() {
        this.getCards();
    }

    CardIndividual() {
        return this.state.card.map( card =>   
            {
            var cardID = card.idChallenges 
                return (
                <div className={'background'}>
                    <div className={'contentCard'}>
                        <div className={'titleStyle'}>
                            <p>{card.title}</p>
                        </div>  
                        <p className={'description'}>
                            {card.description_challenge}                             
                        </p>
                        <div className={'details'}>
                            <Button variant="secondary" onClick={() => this.alert_number_card(cardID)}>detalhes</Button>
                        </div>
                    </div>
                </div>
            )
        });
    }

    render() {
        return (
            <div className="container-fluid py-2">
                <div className="d-flex flex-row flex-nowrap">
                        {this.CardIndividual()}
                </div>
            </div>
        )
    }
}

export default AddCard;