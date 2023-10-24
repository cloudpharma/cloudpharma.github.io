import React, { Component } from 'react'
import configs from '../../../configs.json'

class Clients extends Component {
    constructor(props) {
        super(props)
        this.state = {
            colored   : this.props.colored,
            dark      : this.props.dark
        }
    }
    colorize() {
        if (this.state.colored && this.state.dark) {
            this.state.backgroundColor = configs.colors.primary
            this.state.text            = configs.colors.light
            this.state.color           = configs.colors.dark
        }
        if (!this.state.colored && !this.state.dark) {
            this.state.color           = configs.colors.primary
            this.state.text            = configs.colors.dark
            this.state.backgroundColor = configs.colors.offwhite
        }
        if (!this.state.colored && this.state.dark) {
            this.state.color           = configs.colors.primary
            this.state.text            = configs.colors.light
            this.state.backgroundColor = configs.colors.dark
        }
        if (this.state.colored && !this.state.dark) {
            this.state.backgroundColor = configs.colors.primary
            this.state.text            = configs.colors.dark
            this.state.color           = configs.colors.light
        }
    }
    render() {
        this.colorize()
        return (
            <div className='container' style={{backgroundColor: this.state.backgroundColor}} id='clients'>
                <div className='row senction-row'>
                    <img class="responsive-img client-logo" src={require('../../../static/imgs/ark-white-combined.png')}/>
                    <img class="responsive-img client-logo" src={require('../../../static/imgs/ark-white-combined.png')}/>
                    <img class="responsive-img client-logo" src={require('../../../static/imgs/ark-white-combined.png')}/>
                    <img class="responsive-img client-logo" src={require('../../../static/imgs/ark-white-combined.png')}/>
                    <img class="responsive-img client-logo" src={require('../../../static/imgs/ark-white-combined.png')}/>
                </div>
            </div>
        )
    }
}

export default Clients