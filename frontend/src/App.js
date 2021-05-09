import React from 'react';
import './style/App.scss';
import GlobalState from "./components/globalState/GlobalState";
import Main from "./components/Main";
import Client from './components/models/Client';
import Integrater from './components/integration/Integrater';


function App() {

  //customer specific parameters
  let client = new Client();
  let integrater = new Integrater(client);

  return (
    <div className="app">
      <GlobalState integrater={integrater} >
        <Main />
      </GlobalState>
    </div>
  );
}

export default App;
