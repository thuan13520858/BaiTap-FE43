import React, { Component } from 'react'
import './TickketList.css'
import Ticket from '../Ticket'
import { connect } from 'react-redux'

class TicketList extends Component {
    constructor(props) {
        super(props)

        this.state = {
           
        }
    }

    renderGhe = () => {
        return this.props.danhSachGhe.map((obj, idx) => {
            let spanHtml = <span key = {idx} className = "firstChar">{obj['hang']}</span>
            let ticket = obj['danhSachGhe'].map ((item, index) => {
                if (idx == 0) {
                    return <span key = {idx + '_' + index} className = "firstChar">{item['soGhe']}</span>
                }
                return <Ticket  key = {idx + '_' + index} value = {index + 1} hang = {obj['hang']} 
                        thongTinGhe = {{...item}}/>
            })
            return [spanHtml, ...ticket].flat();
        }).flat();
    }

    render() {
        return (
            <div className = "ticket-list mt-2">
                {this.renderGhe()}
            </div>
        )
    }
}

const mapStatetoProps = (state) => {
    return {
        danhSachGhe: state.CinemaReducers.danhSachGhe
    }
}
export default connect(mapStatetoProps)(TicketList)
