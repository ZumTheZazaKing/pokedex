import './styles/global.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';

const Main = lazy(() => import('./pages/Main').then(module => ({default:module.Main})));

function App() {
  return (
    <Router>
      <div className='App'>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path='/' element={<Main />} />
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
}

export default App;
