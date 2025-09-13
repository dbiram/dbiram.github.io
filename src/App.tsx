import './index.css';
import Navbar from './components/Navbar/Navbar';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

import style from './App.module.css';
import Home from './components/Home/Home';
import React, { useState } from 'react';

export default function App() {
  const [menu, setMenu] = useState(false);
  return (
    <div className={style.app}>
      <Navbar menu={menu} setMenu={setMenu} />
      <Home menu={menu} />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
