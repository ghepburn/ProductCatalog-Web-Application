import React from 'react';
import './style/App.scss';
import GlobalState from "./components/globalState/GlobalState";
import Main from "./components/Main";


function App() {


  return (
    <div className="app">
      <GlobalState >
        <Main />
      </GlobalState>
    </div>
  );
}

export default App;
