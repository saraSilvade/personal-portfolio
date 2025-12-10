import React, {useEffect} from 'react';
import { Navigate } from 'react-router-dom';
const Redirectcomponent :React.FC<{url:string}> =({url})=>{
    useEffect(() =>{
        window.location.href = url;

    },[url] );
    return <Navigate to="/projects" replace />;
}

export default Redirectcomponent;