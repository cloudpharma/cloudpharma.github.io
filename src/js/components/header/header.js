import React, { Component } from 'react';
import NavBarItems from '../navbar/navBarItems';
import M from 'materialize-css';
import configs from '../../../configs.json'

class Header extends Component {
    componentDidMount(){
        M.Sidenav.init(this.sidenav)
    }
    render() {
        return (
            <header>
                <div className='navbar-fixed' id='header'>
                    {configs.header.visitor.map((i, index) =>
                        <ul id={"dropdown-" + index} class="dropdown-content">
                        {i.childs.map(c =>
                            <li key={c.name}><a href={c.link}>{c.name}</a></li>
                        )}
                        </ul>
                    )}
                    <nav role="navigation" className="amber darken-2">
                            <a href="/" className="brand-logo center">
                                <h2 className="nav-title-big">
                                    {configs.name}
                                </h2>
                            </a>
                            <a href="#" data-target="slide-out" className="sidenav-trigger">
                                <i className="material-icons">menu</i>
                            </a>
                            <ul className="left hide-on-med-and-down">
                                <NavBarItems/>
                            </ul>
                    </nav>
                </div>
                <ul className="sidenav amber darken-2" ref={ (sidenav) => {this.sidenav = sidenav} } id="slide-out">
                    <li><a href="/"><h4 className='white-text'>{configs.name}</h4></a></li>
                    <li><div className="divider"></div></li>
                    <NavBarItems/>
                </ul>
            </header >
        );
    }
}

export default Header;