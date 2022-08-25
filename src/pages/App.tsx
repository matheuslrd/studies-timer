import React from 'react';
import Form from '../components/Form';
import List from '../components/List';
import Cronometro from '../components/Cronometro';
import style from './app.module.scss';

function App() {
  return (
    <div className={style.AppStyle}>
      <Form />
      <List />
      <Cronometro />
    </div>
  );
}

export default App;
