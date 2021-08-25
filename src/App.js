import './App.scss';
import EpisodePage from './pages/EpisodePage';
import CharactersPage from './pages/CharactersPage';
import CharacterPage from './pages/CharacterPage';
import EpisodesPage from './pages/EpisodesPage';
import LocationsPage from './pages/LocationsPage';
import BottomBar from '../src/components/BottomBar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
     <Router>
         <div className="App">
             <Route path={"/characters"} exact component={CharactersPage}/>
             <Route path={"/characters/:id"} component={CharacterPage}/>
             <Route path={"/locations"} component={LocationsPage}/>
             <Route path={"/episodes"} component={EpisodesPage}/>
             <BottomBar />
         </div>
     </Router>
  );
}

export default App;
