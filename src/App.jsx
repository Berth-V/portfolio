import './App.css';
import { useRef } from 'react';
import {HashRouter} from 'react-router-dom';
import { Data } from './context/Context';
import Header from './components/Header';
import TransitionRoutes from './components/TransitionRoutes';
import Footer from './components/Footer/Footer';

function App() {

  const ref =useRef()
  
  return (
    <>
    <HashRouter>
      <Data>
        <Header/>
        <TransitionRoutes/>
        <Footer ref={ref}/>
      </Data>
    </HashRouter>
    </>
  )
}

export default App;