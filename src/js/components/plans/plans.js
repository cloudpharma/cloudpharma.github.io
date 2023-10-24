import React, { Component } from 'react'
import configs from '../../../configs.json'

class Plans extends Component {
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
    render() {
        this.colorize()
        return (
            <div className='container' style={{backgroundColor: this.state.backgroundColor}} id='plans'>
                <div className='row section-row'>
                    <h3 style={{color: this.state.color}}>Planos</h3>
                    <h6 style={{color: this.state.text}}>Escolha o plano que mais combina com você</h6>
                    <br></br>
                    {configs.plans.map(p => 
                    <div className='col s4'>
                        <div className='card-panel' style={{backgroundColor: configs.colors.offwhite}}>
                            <h5>{p.name} </h5>
                            <p>R$<h4 style={{color: configs.colors.secondary}}>{p.price}</h4>/ Mês</p>
                            {configs.services.map(s =>
                                <p>- {s.name}</p>
                            )}
                            <a class="waves-effect waves-light btn" style={{backgroundColor: configs.colors.secondary}}>comprar</a>
                        </div>
                    </div>
                    )}
                </div>
            </div>
        )
    }
}

export default Plans