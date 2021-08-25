import './App.scss';
import EpisodePage from './pages/EpisodePage';
import CharactersPage from './pages/CharactersPage';
import CharacterPage from './pages/CharacterPage';
import EpisodesPage from './pages/EpisodesPage';
import LocationsPage from './pages/LocationsPage';
import LocationPage from './pages/LocationPage';
import BottomBar from '../src/components/BottomBar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
     <Router>
         <div className="App">
             <Route path={"/characters"} exact component={CharactersPage}/>
             <Route path={"/characters/:id"} component={CharacterPage}/>
             <Route path={"/locations"} exact component={LocationsPage}/>
             <Route path={"/locations/:id"} component={LocationPage}/>
             <Route path={"/episodes"} exact component={EpisodesPage}/>
             <Route path={"/episodes/:id"} component={EpisodePage}/>
             <BottomBar />
         </div>
     </Router>
  );
}

export default App;
