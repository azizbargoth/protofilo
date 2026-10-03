import { HashRouter  as Router, Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from "react";
const  Header =lazy(()=>import ('../components/Header'));
const Home =lazy(()=>import ('../components/Home'));
const About =lazy(()=>import ('../components/About'));
const Testimonials =lazy(()=>import ( '../components/Testimonials'));
const Education =lazy(()=>import ( '../components/Education'));
const Services =lazy(()=>import ( '../components/Services'));
const Skills =lazy(()=>import ( '../components/Skills'));
const Projects =lazy(()=>import ( '../components/Projects'));
const Connect =lazy(()=>import ( '../components/Connect'));
const Footer =lazy(()=>import ( '../components/Footer'));
const Pricing =lazy(()=>import ( '../components/Pricing'))
// import './App.css';
const Achievements =lazy(()=>import ( '../components/Achievements'));
const Experience =lazy(()=>import ( '../components/Experience'));
const ScrollHandler =lazy(()=>import ( '../components/ScrollHandler'));


const AppRouter = ()=> {
   
  return (
    <div className="">
      <Header />
      {/*<ScrollHandler /> */}
      <main className="">
        <Suspense fallback={<p>Loading page…</p>}>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Home />
                  {/* <About />
              <Education/>*/}
                  <Skills />
                  <Experience />
                  <Services />
                  <Projects />
                  {/*<Achievements />
              <Testimonials />
              <Connect />
              <Footer/> */}
                </>
              }
            />
            <Route path="/pricing" element={<Pricing />} />
          </Routes>
        </Suspense>
      </main>
    </div>
  );
}
export default AppRouter