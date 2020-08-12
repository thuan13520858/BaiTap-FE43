import React, { Component } from 'react'
import BurgerStore from './BurgerStore'
import BurgerMenu from './BurgerMenu'

class BurgetMain extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    render() {
        return (
            <div className = "container-fluid">
                <div className="row">
                   <div className="col-7">
                        <h3 className="text-center">Cửa hàng burger CyberSoft</h3>
                        <BurgerStore />
                   </div>
                   <div className="col-5">
                        <BurgerMenu />
                   </div>
                </div>
            </div>
        )
    }
}

export default BurgetMain
