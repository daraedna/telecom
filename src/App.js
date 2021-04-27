import React from 'react';
import Numbers from './components/Number/Numbers';
import Header from './components/Header';

function App() {

  return (
    <div className="d-flex flex-column">
      <Header />
      <Numbers />
    </div>
  );
}

export default App;
