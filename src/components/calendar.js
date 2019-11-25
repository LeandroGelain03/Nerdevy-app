import React ,{ Component } from "react";
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import '../styles/signUpPage.css';
export default class CalendarComponent extends Component{
    
    constructor(props){
        super(props);
        this.state = {
            date: new Date()
        };
    }    
    handleChange = date => {
        this.setState({
            date: date,
        });
        return this.state
    };
    render() {
        return (
            <DatePicker selected={this.state.date}  onChange={this.handleChange} dateFormat="dd/MM/yyyy" className={'calendar_block'}/>
        )
    }
    
}