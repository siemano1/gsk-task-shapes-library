import styles from './App.module.css';
import Square from './Square';
import Triangle from './Triangle';
import Circle from './Circle';
import Hexagon from './Hexagon';

function App() {
  return (
    <div className={styles.wrapper}>
      <Square color="blue" />
      <Triangle color="green" />
      <Circle color="red" />
      <Hexagon color="purple" />
    </div>
  );
}

export default App;
