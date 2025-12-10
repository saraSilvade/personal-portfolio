import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './assets/Contact';
import Projects from './pages/Projects';
import Myzada from './assets/Myzada';
import Zadaverifier from './assets/Zadaverifier';
import Urban from './assets/Urban';
import About from './assets/About';
import Redirectcomponent from './assets/HorizonRedirect';
import TuflyRedirect from './assets/TuflyRedirect';
import Elite from './assets/Elite';

import Bookmark from './assets/Bookmark';
import Photograph from './assets/Photograph';

import './App.css';

const App: React.FC = () => {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />

          {/* Single project routes */}
          <Route path="/zada-verify" element={<Zadaverifier />} />
          <Route path="/myzada" element={<Myzada />} />
          <Route path="/urban" element={<Urban />} />

          {/* Nested project routes */}
          <Route path="/project/myzada" element={<Myzada />} />
          <Route path="/project/zada-verify" element={<Zadaverifier />} />
          <Route path="/project/urban" element={<Urban />} />
          <Route path="/project/horizon" element={<Redirectcomponent url="https://horizonspa.netlify.app/" />} />
          <Route path='/project/elite' element={<Elite url="https://elitte.netlify.app/"/>}/>
          <Route path='/project/tufly' element={<TuflyRedirect url="https://www.tufly.co.kr/"/>}/>
          <Route path='/project/bookmark' element={<Bookmark url="https://stashappp.netlify.app/pages/loading.html"/>}/>
          <Route path='/project/photograph' element={<Photograph url="https://leeparksara.github.io/photographer-template/"/>}/>

          {/* Other nested project routes */}
          <Route path="/project/zada-verify/Myzada" element={<Myzada />} />
          <Route path="/project/zada-verify/Urban" element={<Urban />} />
          <Route path="/project/myzada/zada-verify" element={<Zadaverifier />} />
          <Route path="/project/myzada/Urban" element={<Urban />} />
          <Route path="/project/urban/zada-verify" element={<Zadaverifier />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
