import Button from '../Button';
import Clock from './components/Clock';
import style from './cronometro.module.scss';

export default function index() {
  return (
    <div className={style.cronometro}>
      <p className={style.titulo}>Escolha um card e inicie o cronômetro</p>
      <div className={style.relogioWrapper}>
        <Clock />
      </div>
      <Button>Começar</Button>
    </div>
  );
}
