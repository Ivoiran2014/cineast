// Components
import GlobalStyle from './components/GlobalStyle';
import Nav from './components/Nav';
import {Route,Switch,useLocation} from 'react-router-dom';
// Pages
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';
import OurWork from './pages/OurWork';
import MovieDetail from './pages/MovieDetail';
// Animation
import {AnimatePresence} from 'framer-motion';

function App() {

  const location = useLocation();

  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route path='/' exact>
            <AboutUs />
          </Route>

          <Route path='/work' exact>
            <OurWork />
          </Route>

          <Route path='/work/:id'>
            <MovieDetail />
          </Route>

          <Route path='/contact'>
            <Contact />
          </Route>
        </Switch>
      </AnimatePresence>      
    </div>
  );
}

export default App;
