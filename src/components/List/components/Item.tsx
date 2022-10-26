import style from '../list.module.scss';
import { ITarefa } from '../index';

interface IItem extends ITarefa {
  selecionaTarefa: (tarefaSelecionada: ITarefa) => void;
}

export default function Item({ name, time, id, completado, selecionado, selecionaTarefa }: IItem) {
  const tarefa = {
    name,
    time,
    id,
    completado,
    selecionado,
  };

  return (
    <li
      className={`${style.item} ${selecionado ? style.itemSelecionado : ''}`}
      onClick={() => selecionaTarefa(tarefa)}
    >
      <h3>{name}</h3>
      <span>{time}</span>
    </li>
  );
}
