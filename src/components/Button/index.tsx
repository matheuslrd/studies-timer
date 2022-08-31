import React from 'react';
import style from './botao.module.scss';

export type TButton = {
  children: string;
  type?: "button" | "submit" | "reset";
};

class Button extends React.Component<TButton> {
  render() {
    const { type = 'button' } = this.props;
    return (
      <button type={type} className={style.botao}>
        {this.props.children}
      </button>
    );
  }
}

export default Button;
