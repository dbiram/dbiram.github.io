import './index.css';
import Navbar from './components/Navbar/Navbar';
import About from './components/About/About';
import Chatbot from './components/Chatbot';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import FloatingChatIcon from './components/FloatingChatIcon';

import style from './App.module.css';
import Home from './components/Home/Home';

import React, { useState, useEffect } from 'react';

export default function App() {
  const [menu, setMenu] = useState(false);
  const [showMobileChatbot, setShowMobileChatbot] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    
    // Check if screen is mobile size
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleChatIconClick = () => {
    if (isMobile) {
      setShowMobileChatbot(true);
    } else {
      const chatbotElement = document.getElementById('Chatbot');
      if (chatbotElement) {
        chatbotElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const closeMobileChatbot = () => {
    setShowMobileChatbot(false);
  };

  return (
    <div className={style.app}>
      <Navbar menu={menu} setMenu={setMenu} />
      <Home menu={menu} />
      <Chatbot />
      <About />
      <Projects />
      <Contact />
      <Footer />
      <FloatingChatIcon onClick={handleChatIconClick} />
      {showMobileChatbot && (
        <Chatbot isMobilePopup={true} onClose={closeMobileChatbot} />
      )}
    </div>
  );
}
