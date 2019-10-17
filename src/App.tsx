import React, { FC, ReactElement } from 'react';
import MainPage from './components/MainPage/MainPage';
import './App.css';

const App: FC = (): ReactElement => {
  return (
    <div className="App">
      <MainPage />
    </div>
  );
};

export default App;
