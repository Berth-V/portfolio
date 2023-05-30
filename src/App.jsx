import './App.css';
import {HashRouter} from 'react-router-dom';
import { Data } from './context/Context';
import Header from './components/Header';
import TransitionRoutes from './components/TransitionRoutes';

function App() {
  
  return (
    <>
    <HashRouter>
      <Data>
        <Header/>
        <TransitionRoutes/>
      </Data>
    </HashRouter>
    </>
  )
}

export default App;