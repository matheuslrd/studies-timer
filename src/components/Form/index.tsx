import React from 'react';
import Button from '../Button';
import style from './form.module.scss';

class Form extends React.Component {
  render(): React.ReactNode {
    return (
      <form className={style.novaTarefa}>
        <div className={style.inputContainer}>
          <label>
            Adicione um novo estudo
            <input
              type="text"
              id="tarefa"
              name="tarefa"
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
              min="00:00:00"
              max="01:30:00"
              required
            />
          </label>
        </div>

        <Button>
          Adicionar
        </Button>
      </form>
    );
  }
}

export default Form;
