import Button from '../Button';
import Clock from './components/Clock';
import style from './cronometro.module.scss';

export default function index() {
  return (
    <div>
      <p>Escolha um card e inicie o cronômetro</p>
      <div>
        <Clock />
      </div>
      <Button>Começar</Button>
    </div>
  );
}
