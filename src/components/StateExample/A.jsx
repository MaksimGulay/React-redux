import { B } from './B';

const styles = {
  backgroundColor: 'green',
  padding: 16,
};

// приймаємо пропс ({ clicks })
export const A = ({ clicks, onIncrement, reset }) => {
  return (
    <div style={styles}>
      Click: {clicks}
      <button onClick={onIncrement}>Increment</button>
      <B value={clicks} reset={reset} />
    </div>
  );
};

// export const A = () => {
//   return (
//     <div style={styles}>
//       <button onClick={this.handleClick}>{this.state.numberOfClicks}</button>
//       <button onClick={this.handleReset}>Reset</button>
//     </div>
//   );
// };
