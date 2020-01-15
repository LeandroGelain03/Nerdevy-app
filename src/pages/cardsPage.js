import React, { Component } from 'react';
import NavBarComponent from '../components/navBar';
import FooterComponent from '../components/footer';
import SidebarComponent from '../components/sidebarComponent';
import CardDetails from '../components/CardDetails';
import Axios from 'axios';
import Columns from 'react-columns';
import '../styles/CardSlick.css';

class CardPage extends Component {
    constructor (props){
        super(props);
        this.state ={
            card : [],
        }
    }
    onOpenModal = () => {
        this.setState({ open:true });
    };
    onCloseModal = () => {
        this.setState({ open:false });
    }
    listCards () {
        Axios({
            method : "POST",
            url: "http://localhost:4000/card/listLimit",
            data: { initial_number: 0},
        }).then((response) => {
            this.setState({
                card: response.data
            })
        }).catch((error) => console.log(error))
    }
    componentDidMount() {
        this.listCards();
    }
    CardIndividual() {
        return this.state.card.map( card =>   
            {
            return (
                <div className={'grid_cards'}>
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
                </div>
            )
        });
    }
    grid_cards(){
        var queries = [{
            columns: 2,
            query: 'min-width: 500px'
        }, {
            columns: 3,
            query: 'min-width: 750px'
        }, {
            columns: 4,
            query: 'min-width: 1000px'
        }, {
            columns: 5,
            query: 'min-width: 1200px'
        }];
            return(
                <Columns queries={queries}>
                    {this.CardIndividual()}
                </Columns>
        )
    
    }
    render() {
        return (
            <div className={'screen_dash'}>
                <div>
                    <SidebarComponent/>
                </div>
                <div className={'body'}>
                    <NavBarComponent/>
                        <div className={'body_content'}>
                            <div className={'cardSlick'}>
                                {this.grid_cards()}
                            </div>
                        </div>
                    <FooterComponent/>
                </div>
            </div>
        )
    }
}

export default CardPage;