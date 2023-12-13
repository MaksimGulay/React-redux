import { Component } from 'react';
import { A } from './A';

const styles = {
  backgroundColor: 'orange',
  padding: 16,
};
// обявляєм стейт
export class StateExample extends Component {
  state = {
    numberOfClicks: 0,
  };

  // обновляєм стейт від попереднього і зробиться перерендер
  handleClick = () => {
    this.setState(prevState => {
      return {
        numberOfClicks: prevState.numberOfClicks + 1,
      };
    });
  };

  handleReset = () => {
    this.setState({
      numberOfClicks: 0,
    });
  };

  render() {
    return (
      <div style={styles}>
        StateExample
        <button onClick={this.handleClick}>{this.state.numberOfClicks}</button>
        <button onClick={this.handleReset}>Reset</button>
        {/* пропс передача даних вниз по дереву clicks={this.state.numberOfClicks}*/}
        {/* clicks - назва пропсу */}
        {/* ={this.state.numberOfClicks} - значення пропсу*/}
        <A
          clicks={this.state.numberOfClicks}
          onIncrement={this.handleClick}
          reset={this.handleReset}
        />
      </div>
    );
  }
}

// export const StateExample = () => {
//   return (
//     <div style={styles}>
//       StateExample
//       <button>1</button>
//     </div>
//   );
// };
