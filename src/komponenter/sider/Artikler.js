import React from 'react'
import Footer from '../deler/Footer'
import { NavLink } from 'react-router-dom';
import Img from 'react-image'

import spaceBilde from '../../bilder/space-liten.jpg'

import '../../css/tekstbokser.css'
import '../../css/artikler.css'
import '../../css/input_range.css'


const Artikler = () => {
    return (
        <>
            <ArtikkelBoks spaceBilde={spaceBilde} />
            <Footer/>
        </>
    )
}


const ArtikkelBoks = ({ spaceBilde }) => {

    return (
        <div className="artikkelBeholder">

            <Artikkel
                bilde = {spaceBilde}
                linkURL = "/artikler/mine-yndlingsfakta-om-universet"
                overskrift = "Mine yndlingsfakta om universet"
                beskrivelse = {"Hva skjer når Melkeveien kolliderer med galaksen Andromeda? " +
                    "Hvorfor har vi istid på jorden? Sjekk ut mine yndlingsfakta om universet!"
                }/>

        </div>
    )
}


const Artikkel = ({ bilde, overskrift, beskrivelse, linkURL}) => {

    return (
        <NavLink to={linkURL} style={{textDecoration:"none"}}>
            <div className="artikkelBoks">
                <Img src={bilde} alt="bilde"/>
                <div>
                    <h2>{overskrift}</h2>
                    <p>{beskrivelse}</p>
                </div>
            </div>
        </NavLink>

    )
}

export default Artikler
