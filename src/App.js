import './styles/global.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { lazy, Suspense, useState } from 'react';
import { Context } from './context';

const Main = lazy(() => import('./pages/Main').then(module => ({default:module.Main})));
const Info = lazy(() => import('./pages/Info').then(module => ({default:module.Info})));

function App() {

  const [searchQuery, setSearchQuery] = useState('');
  const [pokemon, setPokemon] = useState([]);
  const [nextURL, setNextURL] = useState('');
  const [loadingMore, setLoadingMore] = useState(true);

  return (
    <Router>
      <Context.Provider value={{
        searchQuery, setSearchQuery,
        pokemon, setPokemon,
        nextURL, setNextURL,
        loadingMore, setLoadingMore
      }}>
        <div className='App'>
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path='/' element={<Main />} />
              <Route path='/:pokemon' element={<Info />} />
            </Routes>
          </Suspense>
        </div>
      </Context.Provider>
    </Router>
  );
}

export default App;
