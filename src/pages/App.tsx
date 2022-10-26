import React, { useState } from 'react';
import Form from '../components/Form';
import List, { ITarefa } from '../components/List';
import Cronometro from '../components/Cronometro';
import style from './app.module.scss';

function App() {
  const [tarefas, setTarefas] = useState<ITarefa[]>([]);
  const [selecionado, setSelecionado] = useState<ITarefa>();

  const selecionaTarefa = (tarefaSelecionada: ITarefa) => {
    setSelecionado(tarefaSelecionada);
    setTarefas((tarefasAnteriores) => tarefasAnteriores.map((tarefaAnterior) => ({
      ...tarefaAnterior,
      selecionado: tarefaSelecionada?.id === tarefaAnterior.id,
    })));
  };

  return (
    <div className={style.AppStyle}>
      <Form setTarefas={setTarefas} />
      <List tarefas={tarefas} selecionaTarefa={selecionaTarefa} />
      <Cronometro />
    </div>
  );
}

export default App;
