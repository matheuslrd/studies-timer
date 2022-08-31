import style from './list.module.scss';
import Item from './components/Item';

export interface ITarefa {
  time: string;
  name: string;
}

function List({ tarefas }: { tarefas: ITarefa[] }) {
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
