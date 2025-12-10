import React from 'react'
import {Link} from 'react-router-dom'
import zadaverify from '../images/iPhone 15 Pro.png'
import myzada from '../images/iPhone 13 Pro.png'
import Header from './Header';
import Footer from './Footer';
import designResult1 from '../images/Screenshot 2024-07-07 000631.png'
import designResult2 from '../images/Screenshot 2024-07-07 000701.png'
import designResult3 from '../images/Screenshot 2024-07-07 000806.png'
import designResult4 from '../images/Screenshot 2024-07-07 000837.png'
import spa from '../images/Mac Studio2.png'
import designThinking from '../images/design-thinking.png'
import defineSection from '../images/Group 48.png'
import userflow from'../images/Verify userflow.png';
import ideas from '../images/Frame 2.png'
import wireframes from '../images/dekstopWireframes.png'
import wireframes1 from '../images/Group 148.png'

const Zadaverify = () => {
  return (
    <div>
           <Header/>
           <div className='project-titl'>       
             <h2 >Zada Verifier</h2>


</div>

 <div className='myzada-component'>

 
        <div className='project-pic' >
        <img  src={zadaverify}  alt="my zada project"/> 
        </div>



        <div className='details-section'>
            <div className='details-tex'>
            <p> As part of my internship with Zada, I worked on creating a new UI/UX concept, conducting user experience research, and redesigning the Zada Verify web application for verifying credentials. The goal was to improve overall usability and add new features based on user needs.</p>
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
        <div className='process'>
<h5>Process</h5>
<p>To achieve the set goals, I chose to self-study and test our company's current web app. I applied the design thinking method to identify the issues and develop solutions to improve Zada Verify</p>
<img src={designThinking} alt="design-thinking"/>
        </div>
        <div className='process'>
        <h5>Definding the problem</h5>
     <p>After gathering all data and observations during independent testing and user flow analysis, the next step was to define the problems and needs. The goal of this step is to summarize and specify the insights collected to create a clear problem statement that the design process can focus on.</p>
     <img src={defineSection} alt="" />
        
        </div>

    
    <div className='solution'>
        
        <h5>Solution</h5>
        <p> By using Figma, I created wireframes that documented the temporary design ideas for the ideate stage of the case study. These wireframes show the basic layout and the new user flow, which constitute an important part of the ongoing design process</p>
        <img className='ideas' src={ideas} alt="ideas "/>
       
            
        <img className='userflow' src={userflow} alt="userflow"/>
      <div id="wireframe">
        <hr></hr>
<h5>Low fidelity prototype</h5>

    
<div >

      
      <img className='wireframes' src={wireframes} alt="wireframes"/>
</div>



      <div>

      <img src={wireframes1} alt="mobile-wireframes" />
      </div>
      

      </div>
    
    </div>
 
      


    <div className='result-section'>
        
        <h5>Result</h5>
        <p> The chosen solution for Zada Verify improves the user experience with clearer feedback during file uploads and larger buttons for mobile use. The design is modern and adapted to the company's color scheme. New features such as account creation, language selection, and reference saving and exporting make the application more useful and efficient for verifying credentials</p>
        <div className='result-images'>

        <img src={designResult1} alt="design result"/>
    <img src={designResult2} alt="design result 2"/>
    <img src={designResult3} alt="design result 3"/>
    <img src={designResult4} alt="design resulr 4" />
        </div>
    </div>
    </div>

<div  className='other-project'>
 
    <div className='other-project-1'>
        <img src={spa} alt='spa projects'/>
        <div className='other-project-info'>
        <h4> Horizon</h4>
        <p> Horizon is a resort website designed for booking accommodations, spa services, and dining experiences. I personally designed and developed this project from start to finish</p>
        <div className='other-project-btn' >
        <Link  to="https://horizonspa.netlify.app/"> View Project</Link>
        </div>

        </div>

    </div>
    <div className='other-project-2'>
        <img src={myzada} alt='spa projects'/>
        <div className='other-project-info'>
        <h4> MyZada</h4>
        <p> Zada is a web application for requesting credentials, redesigned as part of my internship. My role was to revamp the UI/UX, create new use cases, and add new features to improve of the application </p>
<div className='other-project-btn'>
<Link  to="/myzada">View study case</Link>
</div>
        </div>

    </div>
</div>
    
    </div>
    <Footer/>
    </div>
   
  )
}

export default Zadaverify;