import React, { useState } from 'react';
import Form from '../components/Form';
import List, { ITarefa } from '../components/List';
import Cronometro from '../components/Cronometro';
import style from './app.module.scss';

function App() {
  const [tarefas, setTarefas] = useState<ITarefa[]>([]);

  return (
    <div className={style.AppStyle}>
      <Form setTarefas={setTarefas} />
      <List tarefas={tarefas} />
      <Cronometro />
    </div>
  );
}

export default App;
