import React, { Component } from 'react';
import '../styles/AddCards.css';

class AddCard extends Component { 
    handleClick = () => {
        alert("Adicionar modal form (exemplo nos favoritos)")
    }
    render() {
        return (
            <div  onClick={this.handleClick}>
                <div className={'backgroundColor'}>
                    <div className={'contentCardAdd'}>
                        <p>Adicionar card</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default AddCard;