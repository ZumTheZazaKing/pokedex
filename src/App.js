import { css } from 'aphrodite';
import { globalStyles } from './styles/globalStyles';

function App() {
  return (
    <div className="App">
      <h1 className={css(globalStyles.red)}>Hello World</h1>
    </div>
  );
}

export default App;
