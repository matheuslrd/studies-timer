import React, { useState } from 'react';
import style from './list.module.scss';
import Item from './components/Item';

function List() {
  const [tarefas, setTarefas] = useState([
    {
      name: 'React',
      time: "02:00:00"
    },
    {
      name: 'Javascript',
      time: "01:00:00"
    },
    {
      name: 'Typescript',
      time: "03:00:00"
    }
  ]);

  return (
    <aside className={style.listaTarefas}>
      <h2>Estudos do dia</h2>

      <ul>
        {tarefas.map((item) => (
          <Item name={item.name} time={item.time} key={item.name} />
        ))}
      </ul>
    </aside>
  );
}

export default List;
