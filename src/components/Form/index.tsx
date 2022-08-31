import React from 'react';
import { v4 as uuidV4 } from 'uuid';

import Button from '../Button';
import { ITarefa } from '../List';
import style from './form.module.scss';

export type TFormProps = {
  setTarefas: React.Dispatch<React.SetStateAction<ITarefa[]>>;
};

class Form extends React.Component<TFormProps> {
  state = {
    time: '00:00',
    name: '',
  };

  adicionarTarefa = (event: React.FormEvent) => {
    const { setTarefas } = this.props;
    const { state } = this;

    const novaTarefa = {
      ...state,
      completado: false,
      selecionado: false,
      id: uuidV4(),
    };

    event.preventDefault();
    setTarefas((tarefasAnteriores) => [...tarefasAnteriores, novaTarefa]);
    this.setState({ name: '', time: '00:00' });
  };

  render(): React.ReactNode {
    return (
      <form className={style.novaTarefa} onSubmit={this.adicionarTarefa}>
        <div className={style.inputContainer}>
          <label>
            Adicione um novo estudo
            <input
              type="text"
              id="name"
              name="name"
              value={this.state.name}
              onChange={({ target }) => this.setState({ ...this.state, name: target.value })}
              placeholder="O que você quer estudar?"
              required
            />
          </label>
        </div>

        <div className={style.inputContainer}>
          <label>
            Tempo
            <input
              type="time"
              step="1"
              name="tempo"
              id="tempo"
              value={this.state.time}
              onChange={({ target }) => this.setState({ ...this.state, time: target.value })}
              min="00:00:00"
              max="01:30:00"
              required
            />
          </label>
        </div>

        <Button type="submit">Adicionar</Button>
      </form>
    );
  }
}

export default Form;
