import React from 'react'

import Header from "../assets/Header"
import Hero from '../assets/Hero'
import Footer from '../assets/Footer'
import '../App.css'
const Home: React.FC =() => {
    return(
        <div className='home'>
            <Header/>
            <Hero/>
            <Footer/>

        </div>
    )
}
 export default Home;