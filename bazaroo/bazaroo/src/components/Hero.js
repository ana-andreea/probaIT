import React from 'react'
import './Hero.css'
import hero from '../assets/hero.png'

function Hero()
{
    return(
    <div className='hero_container mw'>

        <div className='hero_text'>
            <h1 >Învățatul nu a fost niciodată mai simplu!</h1>
            <h2>Platforma ideală pentru meditații online, atât pentru profesori, cât si pentru studenți.</h2>
        </div>
        <img src={hero} className='hero_img' />

    </div> 
    )
}
export default Hero