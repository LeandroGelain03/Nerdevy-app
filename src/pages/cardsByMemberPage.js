import React, { Component } from 'react';
import Axios from 'axios';
import Columns from 'react-columns';

import NavBarComponent from '../components/layout/navBarPrivate';
import FooterComponent from '../components/layout/footer';
import SidebarComponent from '../components/layout/sidebarComponent';
import CardDetails from '../components/cardsByUser/CardDetails';

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
    async listCards () {
        await Axios({
            method : "POST",
            url: "http://localhost:3333/card/findByMember",
            data: { email: localStorage.getItem("Email")},
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
                                {card.description}                              
                            </p>
                            <div className={"alignButtonsCards"}>
                                <CardDetails>
                                    {card} 
                                </CardDetails>
                            </div>
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