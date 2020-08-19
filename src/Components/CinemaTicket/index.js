import React, { Component } from 'react'
import './CinemaTicket.css'
import TicketList from './TickKetList'
import TicketSelected from './TicketSelected'

class CinemaTicket extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    render() {
        return (
            <div className = "cinema-ticket">
                <div className="overlay">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-7">
                                <h1>Đặt vé xem phim Cyberlearn</h1>
                                <div className="screen"></div>
                                <TicketList />
                            </div>
                            <div className="col-5">
                                <TicketSelected />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CinemaTicket
