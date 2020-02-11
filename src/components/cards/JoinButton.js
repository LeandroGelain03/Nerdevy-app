import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import Notifications, {notify} from 'react-notify-toast';
import Axios from 'axios';
class JoinButton extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    async joinCard() {
        const response = await Axios({
            method:"POST",
            url: "http://localhost:3333/card/insertMember",
            data:{
                idCard:this.props.children.idCard,
                username:localStorage.getItem('Username')
            }
        })
        console.log(response)
        if (response.data.message ==="Usuario já faz parte do card.") {
            notify.show('Você já faz parte do card!',"warning",1000);
        }
        if (response.data.message === "Membro inserido."){
            notify.show('Você ingressou no card!',"success",10000);
            window.location.reload() 
        }
    }
    render() {
        return(
            <div>
               <Button variant='success' onClick={() => this.joinCard()}>Ingressar</Button>
               <Notifications options={{zIndex: 200, botton: '10px'}}/>
            </div>
        )
    }
}
export default JoinButton;