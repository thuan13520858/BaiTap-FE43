import React, { Component } from 'react'
import './TicketSelected.css'
import { connect } from 'react-redux'
import {chonChe} from '../../redux/Actions/CinemaAction'

class TicketSelected extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }
    tongtien = 0;

    renderGhe = () => {
        this.tongtien = 0;
        return this.props.gheDangChon.map((item, index) => {
            this.tongtien += item.gia;
            return <tr key = {index}>
                <td>{item.soGhe}</td>
                <td>{item.gia.toLocaleString()}</td>
                <td>
                    <button className = "btn-close" onClick = {() => {this.huyGhe(item)}}>
                        <i className="fa fa-times"></i>
                    </button>
                </td>
            </tr>
        })
    }

    huyGhe = (item) => {
       this.props.dispatch(chonChe(item.hang, item, true))
    }

    render() {
        return (
            <div className = "ticket-selected">
                <h1 className = "text-white">DANH SÁCH GHẾ BẠN CHỌN</h1>
                <ul>
                    <li>
                        <span className = "ticket-type orange"></span>
                        <span className = "tiket-txt">Ghế đã đặt</span>
                    </li>
                    <li>
                        <span className = "ticket-type green"></span>
                        <span className = "tiket-txt">Ghế đang chọn</span>
                    </li>
                    <li>
                        <span className = "ticket-type white"></span>
                        <span className = "tiket-txt">Ghế chưa đặt</span>
                    </li>
                </ul>
                <table className="table table-bordered" >
                    <thead>
                        <tr className = "text-white">
                            <th>Số ghế</th>
                            <th>Giá</th>
                            <th>Hủy</th>
                        </tr>
                    </thead>
                    <tbody className = "ticket-body">
                        {this.renderGhe()}
                        <tr>
                            <td>Tổng tiền</td>
                            <td>{this.tongtien.toLocaleString()}</td>
                            <td></td>
                        </tr>
                    </tbody>
                </table >
            </div>
        )
    }
}

const mapStatetoProps = (state) => {
    return {
        gheDangChon : state.CinemaReducers.gheDangChon
    }
}
export default connect(mapStatetoProps)(TicketSelected)