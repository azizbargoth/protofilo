// import { useState } from 'react'
import { HashRouter  as Router ,useLocation} from 'react-router-dom';
// import heroImg from './assets/hero.png'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
import AppRouter from './router/router'
// import './App.css'
import { ThemeProvider } from './contexts/ThemeContext';

function App() {


  return (
    <>
    <Router>
      <ThemeProvider>
        <AppRouter />
      </ThemeProvider>
    </Router>
    
      </>
  )
}

export default App
