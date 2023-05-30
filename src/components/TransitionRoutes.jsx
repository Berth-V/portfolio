import { Route, Routes, Navigate, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from '../components/Home';
import About from '../components/About';
import Projects from "./Projects/Projects";

function TransitionRoutes() {
    const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Navigate to='/' />} />
        <Route path='/about' element={<About />} />
        <Route path='/projects' element={<Projects />} />
      </Routes>
    </AnimatePresence>
  )
}

export default TransitionRoutes;