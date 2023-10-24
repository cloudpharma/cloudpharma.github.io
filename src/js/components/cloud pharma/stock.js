import React, { Component } from 'react'
import configs from '../../../configs.json'
import ApiService from "../../services/api"
import Loading from '../loading/loading'

const apiservice = new ApiService()

class Stock extends Component {
    constructor(props) {
        super(props)
        this.state = {
            update   : 'update',
            meds     : [],
            create   : false,
            redirect : null
        }
        this.handleUpdate = this.handleUpdate.bind(this)
        this.getMeds      = this.getMeds.bind(this)
        this.handleSelect = this.handleSelect.bind(this)
        this.deleteMed    = this.deleteMed.bind(this)
        this.handleCreateStart = this.handleCreateStart.bind(this)
        this.handleCreateCancel= this.handleCreateCancel.bind(this)
        this.handleCreate = this.handleCreate.bind(this)
        this.getAuth = this.getAuth.bind(this)
    }
    getAuth() {
        const user  = localStorage.getItem('user')
        const token = localStorage.getItem('token')

        const req = new FormData()
        req.append('user', user)
        req.append('token', token)

        apiservice.hasAuth(req).then((res) => {
            const auth = res.auth
            switch (auth) {
                case 'Visitor':
                    this.setState({ redirect : true })
                    break
                case 'User':
                    this.setState({ redirect : true })
                    break
                case 'Client':
                    this.setState({ redirect : null })
                    break
                default:
                    this.setState({ redirect : true })
            }
        })
    }
    handleUpdate() {
        const name  = document.getElementById('name_inline')
        const quant = document.getElementById('quant_inline')
        const next  = document.getElementById('next_inline')
        const btn   = document.getElementById('update')

        if (this.state.update == 'update') {
            name.setAttribute('disabled', '')
            quant.setAttribute('disabled', '')
            next.setAttribute('disabled', '')

            btn.innerHTML = 'Editar'

            this.setState({update: 'save'})
        } else {
            name.removeAttribute('disabled', '')
            quant.removeAttribute('disabled', '')
            next.removeAttribute('disabled', '')

            btn.innerHTML = 'Salvar'

            this.setState({update: 'update'})
        }
        
    }
    getMeds() {
        const user  = localStorage.getItem('user')
        const token = localStorage.getItem('token')

        const data  = {
            "user": user,
            "token": token
        }

        apiservice.getMeds(data).then((response) => {
            this.setState({meds: response.meds})
            console.log(response.meds)
            console.log(response.meds[0].consumption)
            this.setState({redirect: false})
        })
    }
    deleteMed(event) {
        const user   = localStorage.getItem('user')
        const token  = localStorage.getItem('token')
        const target = event.target
        const name   = target.parentElement.parentElement.parentElement.parentElement.parentElement.querySelector('[id=name_inline]').value
        const card   = target.parentElement.parentElement.parentElement.parentElement.parentElement.querySelector('.mvv-card')
        const id     = card.id
        const data   = {
            "user"  : user,
            "token" : token,
            "id"    : id
        }
        apiservice.deleteMed(data).then((response) => {
            card.remove()
        })
    }
    handleSelect(event) {
        event.preventDefault()
        const target = event.target
        if (target.classList.contains('orange')) {
            target.classList.remove('orange')
        } else {
            target.classList.add('orange')
        }
    }
    handleCreate(event) {
        const target = event.target
        const data   = {
            'user'           : localStorage.getItem('user'),
            'token'          : localStorage.getItem('token'),
            'name'           : target.parentElement.parentElement.parentElement.parentElement.parentElement.querySelector('[id=name_inline]').value,
            'consumption'    : '',
            'initial_amount' : target.parentElement.parentElement.parentElement.parentElement.parentElement.querySelector('[id=amount_consumed]').value,
            'amount_consumed': target.parentElement.parentElement.parentElement.parentElement.parentElement.querySelector('[id=amount_consumed]').value,
            'purchase_date'  : target.parentElement.parentElement.parentElement.parentElement.parentElement.querySelector('[id=next_inline]').value
        }
        console.log(data)
    }
    handleCreateStart(event) {
        this.setState({create: true})
    }
    handleCreateCancel(event) {
        this.setState({create: false})
    }
    componentDidMount() {
        this.getAuth()
        this.getMeds()
        //this.handleUpdate()
    }
    render() {
        if (this.state.redirect == false) {
            return (
                <div className='container center' style={{backgroundColor: configs.colors.light}}>
                    <div className='row section-row'>
                        <h3 style={{color: configs.colors.primary}} >Estoque</h3>
                        <h6 style={{color: configs.colors.dark}} >Segue abaixo todos os items presentes em seu estoque</h6>
                        <div className='row section-row'>
                            <div className='center valign-wrapper'>
                                <buttion className='btn' style={{backgroundColor: configs.colors.secondary}} onClick={this.handleCreateStart}>Adicionar novo medicamento</buttion>
                            </div>
                        </div>
                        <br></br><br></br>
                        { this.state.create ?
                            <div className='row section-row'>
                                <div className='col'>
                                    <div className='card mvv-card center' style={{backgroundColor: configs.colors.offwhite}}>
                                        <div className='card-title' style={{color: configs.colors.primary}}>
                                            <h3>Novo Medicamento</h3>
                                        </div>
                                        <div className='card-content left-align'>
                                            <div class="row" style={{marginBottom: '0px'}}>
                                                <div class="col s12">
                                                    Nome:
                                                    <div class="input-field inline" style={{padding: '0px', marginBottom: '0px'}}>
                                                        <input id="name_inline" type="text" class="validate right-align" style={{width: '130px', marginLeft: '70px'}} placeholder='Nome'/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row" style={{marginBottom: '0px'}}>
                                                <div class="col s12">
                                                    Em estoque:
                                                    <div class="input-field inline" style={{padding: '0px', marginBottom: '0px'}}>
                                                        <input id="quant_inline" type="number" class="validate" style={{width: '130px', marginLeft: '35px'}} defaultValue={0}/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row" style={{marginBottom: '0px'}}>
                                                <div class="col s12">
                                                    Consumo por dia:
                                                    <div class="input-field inline" style={{padding: '0px', marginBottom: '0px'}}>
                                                        <input id="amount_consumed" type="number" class="validate" style={{width: '130px', marginLeft: '35px'}} defaultValue={0}/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row" style={{marginBottom: '0px'}}>
                                                <div class="col s12">
                                                    Dias de consumo:
                                                    <label class={"waves-effect waves-light btn btn-flat"} onClick={(event) => this.handleSelect(event)}>
                                                    <input type="checkbox" name="countries[]" value="african" />S</label>
                                                    <label class="waves-effect waves-light btn btn-flat" onClick={(event) => this.handleSelect(event)}>
                                                    <input type="checkbox" name="countries[]" value="british" />T</label>
                                                    <label class="waves-effect waves-light btn btn-flat" onClick={(event) => this.handleSelect(event)}>
                                                    <input type="checkbox" name="countries[]" value="french" />Q</label>
                                                    <label class="waves-effect waves-light btn btn-flat" onClick={(event) => this.handleSelect(event)}>
                                                    <input type="checkbox" name="countries[]" value="german" />Q</label>
                                                    <label class="waves-effect waves-light btn btn-flat" onClick={(event) => this.handleSelect(event)}>
                                                    <input type="checkbox" name="countries[]" value="african" />S</label>
                                                    <label class="waves-effect waves-light btn btn-flat" onClick={(event) => this.handleSelect(event)}>
                                                    <input type="checkbox" name="countries[]" value="african" />S</label>
                                                    <label class="waves-effect waves-light btn btn-flat" onClick={(event) => this.handleSelect(event)}>
                                                    <input type="checkbox" name="countries[]" value="african" />D</label>
                                                </div>
                                            </div>
                                            <div class="row" style={{marginBottom: '0px'}}>
                                                <div class="col s12">
                                                    Inicio do consumo:
                                                    <div class="input-field inline" style={{padding: '0px', marginBottom: '0px'}}>
                                                        <input id="next_inline" type="date" class="validate" style={{width: '130px'}} defaultValue='2011-09-29'/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='card-action'>
                                            <div className='row'>
                                                <div className='col s6'>
                                                    <button className='btn' style={{backgroundColor: configs.colors.secondary, width: '130px'}} onClick={this.handleCreateCancel}>Cancelar</button>
                                                </div>
                                                <div className='col s6'>
                                                    <button id='update' className='btn' style={{backgroundColor: configs.colors.secondary, width: '130px'}} onClick={this.handleCreate}>Salvar</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            : <div></div>
                        }
                        { this.state.meds.length == 0 ?
                            <div className='row section-row'>
                                <div className='center valign-wrapper'>
                                    <h6>Não há items disponíveis.</h6>
                                </div>
                            </div>
                            :
                            this.state.meds.map( m => 
                                <div className='row section-row'>
                                    <div className='col'>
                                        <div className='card mvv-card center' id={m.id} style={{backgroundColor: configs.colors.offwhite}}>
                                            <div className='card-title' style={{color: configs.colors.primary}}>
                                                <h3>{m.name}</h3>
                                            </div>
                                            <div className='card-content left-align'>
                                                <div class="row" style={{marginBottom: '0px'}}>
                                                    <div class="col s12">
                                                        Nome:
                                                        <div class="input-field inline" style={{padding: '0px', marginBottom: '0px'}}>
                                                            <input id="name_inline" type="text" class="validate right-align" style={{width: '130px', marginLeft: '70px'}} defaultValue={m.name}/>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="row" style={{marginBottom: '0px'}}>
                                                    <div class="col s12">
                                                        Dias de consumo:
                                                        <label class={"waves-effect waves-light btn btn-flat"} onClick={(event) => this.handleSelect(event)}>
                                                        <input type="checkbox" name="countries[]" value="african" />S</label>
                                                        <label class="waves-effect waves-light btn btn-flat" onClick={(event) => this.handleSelect(event)}>
                                                        <input type="checkbox" name="countries[]" value="british" />T</label>
                                                        <label class="waves-effect waves-light btn btn-flat" onClick={(event) => this.handleSelect(event)}>
                                                        <input type="checkbox" name="countries[]" value="french" />Q</label>
                                                        <label class="waves-effect waves-light btn btn-flat" onClick={(event) => this.handleSelect(event)}>
                                                        <input type="checkbox" name="countries[]" value="german" />Q</label>
                                                        <label class="waves-effect waves-light btn btn-flat" onClick={(event) => this.handleSelect(event)}>
                                                        <input type="checkbox" name="countries[]" value="african" />S</label>
                                                        <label class="waves-effect waves-light btn btn-flat" onClick={(event) => this.handleSelect(event)}>
                                                        <input type="checkbox" name="countries[]" value="african" />S</label>
                                                        <label class="waves-effect waves-light btn btn-flat" onClick={(event) => this.handleSelect(event)}>
                                                        <input type="checkbox" name="countries[]" value="african" />D</label>
                                                    </div>
                                                </div>
                                                <div class="row" style={{marginBottom: '0px'}}>
                                                    <div class="col s12">
                                                        Em estoque:
                                                        <div class="input-field inline" style={{padding: '0px', marginBottom: '0px'}}>
                                                            <input id="quant_inline" type="number" class="validate" style={{width: '130px', marginLeft: '35px'}} defaultValue={m.actual_amount}/>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="row" style={{marginBottom: '0px'}}>
                                                    <div class="col s12">
                                                        Quantidade Inicial:
                                                        <div class="input-field inline" style={{padding: '0px', marginBottom: '0px'}}>
                                                            <input id="quant_inline" type="number" class="validate" style={{width: '130px', marginLeft: '35px'}} defaultValue={m.initial_amount}/>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="row" style={{marginBottom: '0px'}}>
                                                    <div class="col s12">
                                                        Inicio do consumo:
                                                        <div class="input-field inline" style={{padding: '0px', marginBottom: '0px'}}>
                                                            <input id="next_inline" type="date" class="validate" style={{width: '130px'}} defaultValue={m.purchase_date}/>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="row" style={{marginBottom: '0px'}}>
                                                    <div class="col s12">
                                                        Proxima Compra:
                                                        <div class="input-field inline" style={{padding: '0px', marginBottom: '0px'}}>
                                                            <input id="next_inline" type="date" class="validate" style={{width: '130px'}} defaultValue={m.end_date}/>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='card-action'>
                                                <div className='row'>
                                                    <div className='col s6'>
                                                        <button className='btn' style={{backgroundColor: configs.colors.secondary, width: '130px'}} onClick={(event) => this.deleteMed(event)}>Deletar</button>
                                                    </div>
                                                    <div className='col s6'>
                                                        <button id='update' className='btn' style={{backgroundColor: configs.colors.secondary, width: '130px'}} onClick={this.handleUpdate}>Atualizar</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </div>
            )
        }
        if (this.state.redirect == true) {
            window.location.replace('http://localhost:3000/')
        }
        if (this.state.redirect == null) {
            return (<Loading/>)
        }
    }
}

export default Stock