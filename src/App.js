import './styles/global.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { lazy, Suspense, useState } from 'react';
import { Context } from './context';

const Main = lazy(() => import('./pages/Main').then(module => ({default:module.Main})));

function App() {

  const [searchQuery, setSearchQuery] = useState('');
  const [pokemon, setPokemon] = useState([]);
  const [nextURL, setNextURL] = useState('');
  const [loadingMore, setLoadingMore] = useState(false);

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
            </Routes>
          </Suspense>
        </div>
      </Context.Provider>
    </Router>
  );
}

export default App;
