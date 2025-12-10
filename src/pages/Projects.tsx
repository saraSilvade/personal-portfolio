import React from 'react';

import Header from '../assets/Header';
import Footer from '../assets/Footer';
import myZadaProject from '../images/iPhone 13 Pro.png';
import tufly1 from '../images/tufly1.png'
import zadaVerify from '../images/iPhone 15 Pro.png';
import horizonProject from '../images/horizon.png';
import elProject from '../images/el.png';
import Myworks from '../assets/Myworks';
import eliteProjecrImage from '../images/elite.png';
import photograph from '../images/photograph.png';
import stash from '../images/stash.png'


const projectItems = [
  //this id should be added to the route path in app.tsx to display each project
   {
    id: 'stash',
    title: 'Stash',
    description: 'Stash Description',
    imageUrl: stash,
  },

   {
    id: 'photograph',
    title: 'Photograph',
    description: 'Photography Portfolio',
    imageUrl: photograph,
  },
  
  {
    id: 'tufly',
    title: 'Tufly',
    description: 'Tufly Mental sport',
    imageUrl: tufly1,
  },
  {
    id: 'elite',
    title: 'Elite',
    description: 'My Zada Credential Web-app',
    imageUrl: eliteProjecrImage ,
  },
  {
    id: 'myzada',
    title: 'MyZada',
    description: 'Elite Furniture Website',
    imageUrl: myZadaProject,
  },
  
  {
    id: 'zada-verify',
    title: 'Zada Verify',
    description: 'Zada Verify Credential Verifying Web-app',
    imageUrl: zadaVerify,
  },
  {
    id: 'horizon',
    title: 'Horizon',
    description: 'Horizon Resort Website',
    imageUrl: horizonProject,
  },
  {
    id: 'urban',
    title: 'Urban',
    description: 'Urban An Online Store',
    imageUrl: elProject,
  },
];

const Projects: React.FC = () => {
  return (
    <div>
      <Header />
      <div className="projects-container">
        {projectItems.map((project, index) => (
          <Myworks key={index} {...project} />

        ))}





      </div>
    
      

      <Footer />
    </div>
  );
};

export default Projects;
