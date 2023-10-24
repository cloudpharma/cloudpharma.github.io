import React, { Component } from 'react'
import configs from '../../../configs.json'

class MVV extends Component {
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
            this.state.backgroundColor = configs.colors.light
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
    render(){
        this.colorize()
        return (
            <div className='container' style={{backgroundColor: this.state.backgroundColor }} id='mvv'>
                <div className='row section-row'>
                    <h3 style={{color: this.state.color}}>MVV</h3>
                    <h6 style={{color: this.state.text}}>Nos conheça melhor</h6>
                    <br></br>
                    <div className='col s4'>
                        <div className='card-panel mvv-card' style={{backgroundColor: configs.colors.offwhite}}>
                            <h5 style={{color:configs.colors.secondary}}>Missão</h5>
                            <p>{configs.mvv.mission}</p>
                        </div>
                    </div>
                    <div className='col s4'>
                        <div className='card-panel mvv-card' style={{backgroundColor: configs.colors.offwhite}}>
                            <h5 style={{color:configs.colors.secondary}}>Visão</h5>
                            <p>{configs.mvv.vision}</p>
                        </div>
                    </div>
                    <div className='col s4'>
                        <div className='card-panel mvv-card' style={{backgroundColor: configs.colors.offwhite}}>
                            <h5 style={{color:configs.colors.secondary}}>Valores</h5>
                            <p>{configs.mvv.values}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default MVV