import React, { Component } from 'react'
import './Ticket.css'
import { connect } from 'react-redux'
import {chonChe} from '../../redux/Actions/CinemaAction'

class Ticket extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isActive: false
        }
    }

    onClickHandle = () => {
        if (this.props.thongTinGhe.daDat) {
            return;
        }
        this.setState({
            isActive: !this.state.isActive
        })
        this.props.dispatch(chonChe(this.props.hang, this.props.thongTinGhe))
    }

    render() {
        return (
            <span className = {`ticket mx-2 
            ${this.props.thongTinGhe.dangDat ? 'isSelecting': ''}
            ${this.props.thongTinGhe.daDat ? 'isSelected': ''}
            `} 
            onClick = {()=>{this.onClickHandle()}}>{this.props.value}</span>
        )
    }
}

export default connect(null)(Ticket)
