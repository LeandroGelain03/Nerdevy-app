import React, { Component } from 'react';

import NavBarComponent from '../components/layout/navBarPrivate';
import FooterComponent from '../components/layout/footer';
import SidebarComponent from '../components/layout/sidebarComponent';

import AddCardComponent from '../components/cards/addCards';
import CardsList from '../components/cards/Cards';
import AllCardsButton from '../components/cards/allCardsButton';

import CardsListBU from '../components/cardsByUser/Cards';
import AllCardsButtonBU from '../components/cardsByUser/allCardsButton';

import '../styles/DashboardPage.css';

class homePage extends Component {
    render() {
        return (
            <div className={'screen_dash'}>
                <div>
                    <SidebarComponent/>
                </div>
                <div className={'body'}>
                    <NavBarComponent/>
                        <div className={'body_content'}>
                            <div className={'text_color_dark'}>
                                <div>
                                    <div className={'titleChallenges'}>
                                        <h3>Desafios Aceitos</h3>
                                    </div>
                                    <div className={'cardsField'}>
                                        <div className={'cardSlick'}>
                                            <CardsListBU/>
                                        </div>
                                        <div className={'addCardButton'}>
                                            <AllCardsButtonBU/>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className={'titleChallenges'}>
                                    <h3>Desafios</h3>
                                </div>
                                <div className={'cardsField'}>
                                    <div className={'cardSlick'}>
                                        <CardsList/>
                                    </div>
                                    <div className={'addCardButton'}>
                                        <AddCardComponent/>
                                        <AllCardsButton/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    <FooterComponent/>
                </div>
            </div>
        )
    }
}

export default homePage;