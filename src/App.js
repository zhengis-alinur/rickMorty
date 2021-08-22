import './App.scss';
import CharactersPage from './pages/CharactersPage';
import BottomBar from './components/BottomBar';
import LocationsPage from './pages/LocationsPage';

function App() {
  return (
    <div className="App">
        <CharactersPage />
        <BottomBar />
    </div>
  );
}

export default App;
