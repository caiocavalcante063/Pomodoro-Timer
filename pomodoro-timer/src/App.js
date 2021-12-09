import CircularBar from './components/CircularBar';
import './scss/main.css';
import Provider from './context/Provider';

function App() {
  return (
    <Provider>
      <div className="app">
      <h1 className="app-title">Time to focus</h1>
      <CircularBar />
    </div>
    </Provider>
  );
}

export default App;
