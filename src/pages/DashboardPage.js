import React, { Component } from 'react';
import NavBarComponent from '../components/navBar';
import FooterComponent from '../components/footer';
import SidebarComponent from '../components/sidebarComponent';
import AddCardComponent from '../components/addCards';
import CardsList from '../components/Cards';
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
                                <div className={'titleChallenges'}>
                                    <h3>Desafios</h3>
                                </div>
                                <div className={'cardsField'}>
                                    <div className={'cardSlick'}>
                                        <CardsList/>
                                    </div>
                                    <div className={'addCardButton'}>
                                        <AddCardComponent/>
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