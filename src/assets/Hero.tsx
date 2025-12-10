import React from 'react'
import profil from '../images/profile.png'
import spa from '../images/Group 150.png'
import el from '../images/el2.png'
import {Link} from 'react-router-dom'
import tufly from '../images/tufly.png'
import verifier from '../images/verifer.png'
import myzada from '../images/myzada.png'
import elit from '../images/elit.png'

import photograph from '../images/photograph.png';
import stash from '../images/stash.png'

const Hero: React.FC =() =>{
return(
    <div >
 <div className='hero-section'>
    
<div className='hero'  >
    <h1 > Sara Le
        <div className='hero-span'>
    <span>Frontend </span>  Developer
        </div> 
        <p>Based in Stockholm, Sweden</p> </h1>
           
        
   </div>
   <div> <img className='hero-image' src={profil} alt="profile" /></div>
    </div>
   
    <div id='work'>
    <hr className='line'></hr>
   <h2 >Work</h2>
    </div>
        <div className='items-section'>
  
    <div className='card-container'>


<Link to="https://leeparksara.github.io/photographer-template/">
<div className='item-card1'>
      
      <img className='item3' src={photograph} alt="item"/>
      <div  className='card-info' >
          <h1>Photograph Portfolio </h1>
          <p>Minimalistic Portfolio designedwith figma and built with HTML and CSS </p>
   <div className="card1-btn" >
  View Project
   </div>
        
      </div>
  </div>
</Link>
   

<Link to="https://stashappp.netlify.app/pages/loading.html">
<div className='item-card1'>
      
      <img className='item3' src={stash} alt="item"/>
      <div  className='card-info' >
          <h1>Stash app </h1>
          <p>Stash app developed to save bookmarks and notes, built with HTML, CSS and Javascript </p>
   <div className="card1-btn" >
  View Project
   </div>
        
      </div>
  </div>
</Link>
   







<Link to="https://www.tufly.co.kr/">
<div className='item-card1'>
      
      <img className='item3' src={tufly} alt="item"/>
      <div  className='card-info' >
          <h1>Tufly </h1>
          <p>Designed with figma and built mental sport service website with Wix </p>
   <div className="card1-btn" >
  View Project
   </div>
        
      </div>
  </div>
</Link>
   



    <Link to="https://elitte.netlify.app/">

  
<div className='item-card2'>
      
      <img className='item3' src={elit} alt="item"/>
      <div  className='card-info' >
          <h1>Elite Furniture</h1>
          <p>Designed and developed a furniture website from scratch using Figma, React, Tailwind CSS, TypeScript, and Contentful</p>
   <div className="card1-btn" >
  View Project
   </div>
        
      </div>
  </div>

</Link>



  <Link to="zada-verify">

  
  <div className='item-card1'>
        
        <img className='item1' src={verifier} alt="item"/>
        <div  className='card-info' >
            <h1>Verifeir web-app </h1>
            <p>  Designed as part of my internship. Created a new UI/UX concept and conducted UX research</p>
     <div className="card1-btn" >
    View Case Study
     </div>
          
        </div>
    </div>
  
  </Link>


  <Link to="myzada">    
  <div className='item-card2'>
        
        <img className='item2' src={myzada} alt="item"/>
        <div className='card-info'>
            <h1>Myzada web-app </h1>
            <p> Redesigned as part of my internship. My role was to revamp the UI/UX, create new use cases</p>
<div className="card1-btn">
View Case Study
</div>
      

        </div>
    </div>
  </Link>
    

<Link to="https://horizonspa.netlify.app/ ">
<div className='item-card3'>
        
        <img className='item3' src={spa} alt="item"/>
        <div className='card-info'>
            <h1>Horizon</h1>
            <p> Designing and developing a resort website using Figma for the design and React.js for the development.</p>
    <div className="card1-btn">
    View Project
    </div>
           

        </div>
    </div>
</Link>


<Link to="urban">  


<div className='item-card4'>
        
        <img className='item4' src={el} alt="item"/>
        <div className='card-info'>
            <h1>Urban </h1>
            <p> Designed and developed as a collaborative project with two classmates under my studies.</p>
            <div className="card1-btn">
           View Case Study
            </div>
            

        </div>
    </div>
</Link>
   
    
    </div>
</div>

    </div>
   
)
}

export default Hero;