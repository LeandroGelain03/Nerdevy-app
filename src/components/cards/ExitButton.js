import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import Notifications, {notify} from 'react-notify-toast';
import Axios from 'axios';
import '../../styles/CardSlick.css';
class ExitButton extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    async exitCard() {
        const response = await Axios({
            method:"POST",
            url: "http://localhost:3333/card/removeMember",
            data:{
                idCard:this.props.children.idCard,
                username:localStorage.getItem('Username')
            }
        })
        if (response.data.message === "Membro removido."){
            await notify.show('Você saiu do card!',"error",2000);
            window.location.reload()
        } 
        if (response.data.message === "Membro não estava no card."){
            notify.show('Você não está participando do card!',"error",2000);
        } 
    }
    render() {
        return(
            <div>
                <Button variant='secondary' onClick={() => this.exitCard()}>Sair do card</Button>
                <Notifications/>
            </div>
        )
    }
}
export default ExitButton;