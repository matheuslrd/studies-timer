import style from './list.module.scss';
import Item from './components/Item';

export interface ITarefa {
  time: string;
  name: string;
  selecionado: boolean;
  completado: boolean;
  id: string;
}

export interface IList {
  tarefas: ITarefa[];
  selecionaTarefa: (tarefaSelecionada: ITarefa) => void;
}

function List({ tarefas, selecionaTarefa }: IList) {
  return (
    <aside className={style.listaTarefas}>
      <h2>Estudos do dia</h2>

      <ul>
        {tarefas.map((item) => (
          <Item {...item} key={item.id} selecionaTarefa={selecionaTarefa} />
        ))}
      </ul>
    </aside>
  );
}

export default List;
