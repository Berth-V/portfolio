import {useEffect} from 'react';
import {HashRouter} from 'react-router-dom';
import {Data} from './components/Context/Context';
import './App.css';
import Header from './components/Header/Header';
import TransitionRoutes from './components/TransitionRoutes/TransitionRoutes';
import Footer from './components/Footer/Footer';

function App() {
  useEffect(() => {
    scrollTo(0, 0);
  }, [location]);

  return (
    <>
      <HashRouter>
        <Data>
          <Header />
          <TransitionRoutes />
          <Footer />
        </Data>
      </HashRouter>
    </>
  );
}

export default App;
