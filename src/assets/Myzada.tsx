import React from 'react'
import {Link} from 'react-router-dom'
import myZada from '../images/iPhone 13 Pro.png'
import Header from './Header';
import Footer from './Footer';
import challangeImg from '../images/Screenshot 2024-07-04 165701.png'
import designsystem from '../images/Screenshot 2024-07-02 155924.png'
import designResult1 from '../images/Screenshot 2024-07-02 161755.png'
import designResult2 from '../images/Screenshot 2024-07-02 162039.png'
import designResult3 from '../images/Screenshot 2024-07-02 163643.png'
import verifer from '../images/iPhone 15 Pro.png'
import spa from '../images/Mac Studio.png'
const Myzada = () => {
  return (
    <div>
           <Header/>
           <div className='project-titl'>       
             <h2 >My Zada</h2>


</div>

 <div className='myzada-component'>

 
        <div className='project-pic' >
        <img  src={myZada}  alt="my zada project"/> 
        </div>



        <div className='details-section'>
            <div className='details-tex'>
            <p> Zada is a swedish  company based in Myanmar aims to make self-sovereign identity and verifiable credentials the standard for a fair and inclusive digital world.

            Myzada is a web application for requesting credentials, redesigned as part of my internship in Zada. My role was to revamp the UI/UX, create new use cases, and add new features to enhance the overall usability and efficiency of the application</p>
            </div>

     <div className='project-details'>
        <div>
        <h6>
       Client
        </h6>
        <p>Zada</p>

        <h6>
     Role
        </h6>
        <p>Redesigning the web-app </p>
        <h6>
Tools
        </h6>
        <p>Figma, Google </p>
        <h6>
   Location
        </h6>
        <p>Remote </p>
        </div>
       
      
        
     </div>
     
        </div>
     
       

      <div className='design-section'>
        <div className='challange'>
        <h5>Main Goals</h5>
      <ul >
        <li>Ensuring seamless user experience on all devices, especially mobile</li>
        <li>Simplifying credential requests to reduce user frustration
        </li>
        <li>Adding a country filter for easy selection during credential requests</li>
        <li>Developing an organization filter and selector based on the selected country
        </li>
        <li>Implementing a price selector showing the price, organization logo, and credential title</li>
      </ul>
        
        </div>

        <div className='solution'>
            <div>
            <h5>Solution</h5>
<p>To create a user-friendly and visually appealing design, I developed and analyzed different use cases. The main goal was to understand user struggles and needs to provide a seamless and effective experience. By studying these scenarios, I identified key pain points and designed solutions tailored to users' requirements. </p>
<img src={challangeImg} alt="my zada" />
            </div>


      </div>
    
    <div className='design-system'>
        
        <h5>Design System</h5>
        <p> Establishing all the basic elements in advance, including the color palette, typography, icons, input fields, and buttons, allowed for fast and consistent design throughout the project. </p>
        <img src={designsystem} alt="design system "/>
    </div>

    <div className='result-section'>
        
        <h5>Result</h5>
        <p> Zada was happy with the redesign and according to the team the new version will streamline the credential application process  .</p>
    <img src={designResult1} alt="design result"/>
    <img src={designResult2} alt="design result 2"/>
    <img src={designResult3} alt="design result 3"/>
    

       
 
    </div>
    </div>

<div  className='other-project'>
 
    <div className='other-project-1'>
       
   
        <img src={spa} alt='spa projects'/>
     
        <div className='other-project-info'>
        <h4> Urban</h4>
        <p> Urban is an electronic online store, developed as a collaborative project with two classmates under my studies. My role was to design a flexible online store that works on different devices, manage the database using PostgreSQL</p>
        <div className='other-project-btn' >
        <Link  to='/urban'> View Project</Link>
        </div>

        </div>

    </div>
    <div className='other-project-2'>
      <div>
      <img src={verifer} alt='spa projects'/>
      </div>

        <div className='other-project-info'>
        <h4> Zada Verify</h4>
        <p> Zada Verify is a web application for verifying credentials, designed as part of my internship. My role was to create a new UI/UX concept, conduct user experience research, and redesign the application </p>
<div className='other-project-btn'>
{/* use the project given ID to redirct to the right component */}
<Link  to="/zada-verify">View study case</Link>
</div>
        </div>


    </div>
</div>
    
    </div>
    <Footer/>
    </div>
   
  )
}

export default Myzada