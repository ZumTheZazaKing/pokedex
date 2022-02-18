import './styles/global.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { lazy, Suspense, useState } from 'react';
import { Context } from './context';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
            <ToastContainer
              position="bottom-right"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
            />
          </Suspense>
        </div>
      </Context.Provider>
    </Router>
  );
}

export default App;
