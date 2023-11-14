import Home from '../Home/Home';
import About from '../About/About';
import Projects from '../Projects/Projects';
import Contact from '../Contact/Contact';
import {useContext, useEffect} from 'react';
import {Route, Routes, Navigate, useLocation} from 'react-router-dom';
import {AnimatePresence} from 'framer-motion';
import {Context} from '../Context/Context';

function TransitionRoutes() {
  const location = useLocation();
  const {isOnContactPage} = useContext(Context);
  useEffect(() => {
    location.pathname == '/contact'
      ? isOnContactPage(true)
      : isOnContactPage(false);
  }, [isOnContactPage, location.pathname]);

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Navigate to='/' />} />
        <Route path='/about' element={<About />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </AnimatePresence>
  );
}

export default TransitionRoutes;
