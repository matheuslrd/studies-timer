import React from 'react';
import Button from '../Button';
import style from './form.module.scss';

class Form extends React.Component {
  state = {
    time: '00:00',
    name: '',
  };

  adicionarTarefa = (event: React.FormEvent) => {
    event.preventDefault();
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

        <Button>Adicionar</Button>
      </form>
    );
  }
}

export default Form;
