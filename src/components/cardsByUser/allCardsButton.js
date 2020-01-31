import React, { Component } from 'react';
import { withRouter } from "react-router-dom";

class AllCardsButton extends Component {

    handleClick = () => {
        this.props.history.push("/dashboard/YourCards");
    }
    render() {
        return(
            <div>
                <div onClick={this.handleClick} className={'backgroundColor'}>
                    <div className={'contentCardAdd'}>
                        <p>Ver Todos</p>
                    </div>
                </div>
            </div>
        )
    }
}
export default withRouter(AllCardsButton)