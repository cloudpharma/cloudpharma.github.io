import React, {Component} from "react";

class ForgotPassword extends Component {
    render() {
        return(
            <div class="container center" id='forgot-password'>
                <div className="card amber darken-2 center-align">
                    <div className="card-title">
                        <h4>Esqueceu a senha</h4>
                    </div>
                    <form method="POST" encType="multipart/form-data" >
                        <div className="card-content white-text">
                            <div className="center">
                                <div className="row">
                                    <label for="input_text">Email</label>
                                    <input id="input_text" type="text" ref="email" placeholder="exemplo@email.com" />
                                </div>
                            </div>
                        </div>
                        <div className="card-action">
                            <button type='submit' className="btn waves-effect waves-light orange darken-3">Enviar<i className="material-icons right">send</i></button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default ForgotPassword;