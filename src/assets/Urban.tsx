import React from 'react'
import {Link} from 'react-router-dom'
import urban from '../images/Mac Studio.png'
import Header from './Header';
import Footer from './Footer';
import challangeImg from '../images/Group 128.png'
import designsystem from '../images/Group 149.png'
import designResult1 from '../images/Group 129.png'
import designResult2 from '../images/Group 133.png'
import userPersona from '../images/userpersona.png'
import verifer from '../images/iPhone 15 Pro.png'
import spa from '../images/Mac Studio2.png'

const Myzada = () => {
  return (
    <div>
           <Header/>
           <div className='project-titl'>       
             <h2 >Urban</h2>


</div>

 <div className='myzada-component'>

 
        <div className='project-pic' >
        <img className='urban' src={urban}  alt="Urban project"/> 
        </div>



        <div className='details-section'>
            <div className='details-tex'>
            <p> Urban is an electronic online store, developed as a collaborative project with two classmates under my studies. My role was to design a flexible online store that works on different devices, manage the database using PostgreSQL</p>
            </div>

     <div className='project-details'>
        <div>
        <h6>
       Client
        </h6>
        <p>School project</p>

        <h6>
     Role
        </h6>
        <p>Ux/Ui, database managegment,front-end </p>
        <h6>
Tools
        </h6>
        <p>Figma, React.js, Node.js, PostgresSQL, Typescript, Bootstrap, Agile </p>
        <h6>
   Location
        </h6>
        <p>Remote</p>
        </div>
       
      
        
     </div>
     
        </div>
     
       

      <div className='design-section'>
        <div className='challange'>
        <h5>Main Goals</h5>
      <ul >
        <li>Develop an interactive frontend with React.js and secure backend processes</li>
        <li>Use PostgreSQL to manage and store product and user data securely
        </li>
        <li>Ensure the website is fully functional and visually appealing on all devices
        </li>
        <li>Create consistent designs with Figma for a seamless user experience</li>
      </ul>
        
        </div>

        <div className='solution'>
            <div>
            <h5>Solution</h5>
<p>To create a flexible and user-friendly online store, our team collaborated closely. I focused on designing an intuitive website for both desktop and mobile versions using Figma, while also managing the PostgreSQL database. Together, we developed the store using React.js, ensuring seamless integration between the frontend and backend. By continuously iterating on our design and functionality, we successfully created a responsive and efficient online store selling smartphones, headphones, and laptops. </p>
<img src={challangeImg} alt="my zada" />
            </div>


      </div>
    
    <div className='design-system'>
        <h5>Design System</h5>
        <p> 
        To achieve the set goals, a user persona has been created to analyze the user pain points, needs, and behaviors before taking the next step in the design process. This ensures that our solutions are tailored to the specific requirements of our target audience, enhancing the overall effectiveness and user satisfaction of the urban electronic store </p>
        <img src={userPersona} alt="user persona" />
        <img src={designsystem} alt="design system "/>
    </div>
    <div className='result-section'>
        
        <h5>Result</h5>
        <p> As a result, we successfully developed both the frontend and backend of the urban electronic store. Using PostgreSQL to manage data, our prototypes demonstrate a smooth, intuitive shopping experience. The design meets user needs and ensures secure, efficient transactions, enhancing overall satisfaction </p>
    <img src={designResult1} alt="design result"/>
    <img src={designResult2} alt="design result 2"/>
 
    

       
 
    </div>
    </div>

<div  className='other-project'>
 
    <div className='other-project-1'>
        <img src={spa} alt='spa projects'/>
        <div className='other-project-info'>
        <h4> Horizon</h4>
        <p> Horizon is a resort website designed for booking accommodations, spa services, and dining experiences. I personally designed and developed this project from start to finish</p>
        <div className='other-project-btn' >
        <Link  to='https://horizonspa.netlify.app/'> View Project</Link>
        </div>

        </div>

    </div>
    <div className='other-project-2'>
        <img src={verifer} alt='spa projects'/>
        <div className='other-project-info'>
        <h4> Zada Verify</h4>
        <p> Zada Verify is a web application for verifying credentials, designed as part of my internship. My role was to create a new UI/UX concept, conduct user experience research, and redesign the application </p>
<div className='other-project-btn'>
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