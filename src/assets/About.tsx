import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header'
import Footer from './Footer'
import aboutmeImg from '../images/Screenshot 2024-07-12 173759.png'


//declaring the typscript interface for the data

interface DataType {
    title1: string;
    title2: string;
    bodyText1: string;
    bodyText2:string;
    aboutImageAlt: string;

}
 const aboutData : DataType ={
    title1:" My Journey into Web Development",
    bodyText1: `I'm a junior front-end developer, freshly graduated and eager to dive into the world of web development. 
                From a young age, I've always had a passion and a keen eye for design, enjoying the process of creating things from scratch 
                Before discovering my passion for web development, I studied psychology, specifically focusing on human behaviors. My journey into coding began unexpectedly when I visited a friend and saw her partner programming a game. The sight of code instantly captivated me, awakening a new curiosity. Curious and excited, I started researching web programming and enrolled in a short-term web development course to explore if it was truly my calling.
                `,
bodyText2 : ` After successfully completing the course, I pursued a degree in IT, marking the beginning of my real journey.
During my studies, I had the opportunity to intern at two different companies, primarily working as a UX/UI designer. These experiences, combined with personal projects I've developed during my studies and free time, have solidified my love for creating and designing.I truly believe that becoming a a good web developer requires a blend of technical skills, practical experience, and a dedication to continuous learning. I'm always eager to improve and grow, seizing every opportunity to enhance my abilities. Thank you for reading, and I hope you enjoy exploring my work! 
`,


aboutImageAlt: "My photo",
title2: "My skill"

 }
const About:React.FC = () =>{
    return(
<div>
    <Header/>
     
     <div className='about-component'>
        <div className="about-hero-section">
<img src={aboutmeImg} alt={aboutData.aboutImageAlt}/>
<div className='about-text'>
    <p className='about-title'> {aboutData.title1}</p>
    <div className='bodytext'>
    <p>{aboutData.bodyText1}</p>
    <p>{aboutData.bodyText2}</p>
    </div>
 
</div>
        </div>

    
<div className='skill-section'>
<p className='about-title'>{aboutData.title2}</p>
<div className='skill-columns'>
<div > <p className='skill-text'> Front-end/Ux-Ui</p>
<p> Web/App development, User Interface Design,User Experience Design, User research, Wireframing, prototyping,  </p>
</div>
<div > <p className='skill-text'>Tools</p>
<p>HTML,
CSS,
JavaScript,
Sass,
Git,
React.js,
Node.js,
Typescript,
PostgreSQL,
Agile</p>
</div>
<div> <p className='skill-text'>Personal skill</p>
<p  >Well organized and reliable, Outgoing personality and positive attitude, effective team-work, time management skill, </p>
</div>
<div> <p className='skill-text'>Languges</p>
<p  >English, Swedish, Arabic, Korean </p>
</div>
</div>

</div>
<div className='about-button'>
<Link   to="/projects"> Let's work together</Link>
</div>

     </div>
     <Footer/>
      </div>
    )
}

export default About;