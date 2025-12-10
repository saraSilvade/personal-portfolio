import React from 'react';
import { Link } from 'react-router-dom';

interface PortfolioItemProps {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
}

const Myworks: React.FC<PortfolioItemProps> = ({ id, title, description, imageUrl }) => {
  return (
    <div className="pro" >
      <Link to={`/project/${id}`}>
        <div className="project">
          <h2>{title}</h2>
          <img className="project-image" src={imageUrl} alt={`${title} project`} />
          <p className='project-des'>{description}</p>
        </div>
      </Link>
    </div>
  );
};

export default Myworks;
