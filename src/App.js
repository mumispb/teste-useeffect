import logo from './logo.svg';
import './App.css';
import User from './User';
import { useEffect, useState } from 'react';

function App() {
  const [counter, setCounter] = useState(0);
  const [internalCounter, setInternalCounter] = useState(0);
  const [showOther, setShowOther] = useState(false);
  const [showUser, setShowUser] = useState(false);

  useEffect(() => {
    console.log('App mounted');

    return () => {
      console.log('App dismounted');
    };
  }, []);

  return (
    <div className='App'>
      {console.log('return interno')}
      <header className='App-header'>
        <button onClick={() => setShowOther(true)}>Mostrar outro</button>
        <button onClick={() => setShowOther(false)}>Esconder outro</button>
        <button onClick={() => setShowUser(true)}>Mostrar usuário</button>
        <button onClick={() => setShowUser(false)}>Esconder usuário</button>
        <img src={logo} className='App-logo' alt='logo' />
        {showOther && (
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
        )}
        <a className='App-link' href='https://reactjs.org' target='_blank' rel='noopener noreferrer'>
          Learn React
        </a>
        <div>Externo: {counter}</div>
        <div>Interno: {internalCounter}</div>
        <button onClick={() => setCounter(counter + 1)}>Add</button>
        <button onClick={() => setInternalCounter(internalCounter + 1)}>Add interno</button>
        {showUser && <User teste={counter} />}
      </header>
    </div>
  );
}

export default App;
