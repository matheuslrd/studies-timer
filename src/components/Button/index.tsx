import React from 'react';
import style from './botao.module.scss';

class Button extends React.Component<{ children: string }> {
  render() {
    return <button className={style.botao}>{ this.props.children }</button>;
  }
}

export default Button;
