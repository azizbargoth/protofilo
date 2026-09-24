import { HashRouter  as Router, Routes, Route } from 'react-router-dom';

import Header from '../components/Header';
import Home from '../components/Home';
import About from '../components/About';
import Testimonials from '../components/Testimonials';
import Education from '../components/Education';
import Services from '../components/Services';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Connect from '../components/Connect';
import Footer from '../components/Footer';
import Pricing from '../components/Pricing'
// import './App.css';
import Achievements from '../components/Achievements';
import Experience from '../components/Experience';
import ScrollHandler from '../components/ScrollHandler';


const AppRouter = ()=> {
   
  return (
    <div className="">
       <Header />
      {/*<ScrollHandler /> */}
      <main className="">
        <Routes>
          <Route path="/" element={
            <>
               <Home />
             {/* <About />
              <Education/>
              <Skills /> */}
              <Experience />
              {/* <Services />
              <Projects />
              <Achievements />
              <Testimonials />
              <Connect />
              <Footer/> */}
            </>
          } />
           <Route path="/pricing" element={<Pricing />} />
        </Routes>
      </main>
    </div>
  )
}
export default AppRouter