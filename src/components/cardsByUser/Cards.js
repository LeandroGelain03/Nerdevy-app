import React, { Component } from 'react';
import '../../styles/CardSlick.css';
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

    async getCards() {
        await Axios({
            method: 'POST',
            url: 'http://localhost:3333/card/findByMember',
            data: { email : localStorage.getItem("Email")},
            headers: { "Access-Control-Allow-Origin": "*", }
        }).then((response) => {
            this.setState({
                card: response.data
            })
            console.log(this.state.card)
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
                            {card.description}                              
                        </p>
                        <div className={"alignButtonsCards"}>
                            <CardDetails>
                                {card} 
                            </CardDetails>
                        </div>
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