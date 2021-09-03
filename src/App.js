import React, { Component } from 'react';
import './App.css';
import NavBar from './components/navbar';
import Counters from './components/counters';


//lifecycle hooks render mounting components in a specific order: Constructor, Rendered, Mounted
class App extends Component {
  state = { 
    counters: [
    { id: 1, value: 4},
    { id: 2, value: 0},
    { id: 3, value: 0},
    { id: 4, value: 0}
    ]
  };

  constructor() {
    super();
    console.log('App - Constructor', this.props);
  };

  componentDidMount() {
    //perfect place to make ajax call to get data from server
    // this.setState({  });
    console.log('App - Mounted')
  };
  
 handleDelete = counterId => {
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters });
    console.log('event handler called', counters);
 };

 handleIncrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = {...counter};
    counters[index].value++;
    this.setState({ counters });
  };
 handleDecrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = {...counter};
    counters[index].value--;
    this.setState({ counters });
  };

  handleReset = () => {
      const counters = this.state.counters.map(c => {
          c.value = 0;
          return c;
      });
      this.setState({ counters });
  };
  render() {
    console.log('App - Rendered');
  return (
    <React.Fragment>
      <NavBar totalCounters={this.state.counters.filter(c => c.value > 0).length} />
      <main classNme="container">
        <Counters
          counters={this.state.counters}
          onReset={this.handleReset} 
          onIncrement={this.handleIncrement}
          onDelete={this.handleDelete}
          onDecrement={this.handleDecrement}
        />
      </main>
   </React.Fragment>
    );
  }
}

export default App;
