import React, { Component } from "react";
import NavBarItems from "../navbar/navBarItems";
import configs from '../../../configs.json'

//todo: link to ark website

class Footer extends Component {
    render() {
        return (
            <footer className="page-footer amber darken-2">
                <div className="container" id='footer'>
                    <div className="row">
                        <div className="col l6 s12 left-align">
                            <h4 style={{color:process.env.REACT_APP_COLORS_DARKER}}>Contato</h4>
                            <h6 className="grey-text text-lighten-4">{configs.contact.email}</h6>
                            <h6 className="grey-text text-lighten-4">{configs.contact.instagram}</h6>
                        </div>
                        <div className="col l4 offset-l2 s12 left-align">
                            <h4 style={{color:process.env.REACT_APP_COLORS_DARKER}}>Links</h4>
                            <ul>
                                <NavBarItems/>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="footer-copyright">
                    <div className="container left-align black-text footer-cpc">
                        © {configs.copyright.year} {configs.copyright.url}
                        <div className="black-text text-lighten-4 right"><a className="black-text" href={configs.copyright.owner.link} >Powerd by {configs.copyright.owner.name}</a></div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;