import React, { Component } from 'react'
import Hero from '../components/hero/hero'
import AboutUs from '../components/aboutus/aboutus'
import Plans from '../components/plans/plans'
import MVV from '../components/mvv/mvv'
import Team from '../components/team/team'
import Contact from '../components/contact/contact'
import Clients from '../components/clients/clients'
import Services from '../components/services/services'
import Prizes from '../components/prizes/prizes'
import Media from '../components/media/media'
import CTA from '../components/cta/cta'

class HomePage extends Component {
    render() {
        return(
            <div>
                <Hero/>
                <AboutUs  colored={false}  dark={false}/>
                <Clients  colored={false}  dark={false}/>
                <Services colored={false}  dark={false}/>
                <Plans    colored={true}   dark={false}/>
                <Media    colored={false}  dark={false}/>
                <Prizes   colored={true}   dark={false}/>
                <Team     colored={false}  dark={false}/>
                <MVV      colored={true}   dark={false}/>
                <CTA/>
                <Contact  colored={false}   dark={false}/>
            </div>
        )
    }
}

export default HomePage