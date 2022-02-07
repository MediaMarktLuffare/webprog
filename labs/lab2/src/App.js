import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

import { Component } from 'react';
import inventory from './inventory.ES6';
import ComposeSalad from './ComposeSalad';
import ViewOrder from './ViewOrder';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {order : []};
    this.addSalad = this.addSalad.bind(this);
    this.removeOrders = this.removeOrders.bind(this);
  }

  addSalad(salad){
    /*
    const copyState = [...this.state.order];
    copyState.push(salad);
    this.setState({order : copyState});
    */
    this.setState(prevState => ({
      order: [...prevState.order, salad]
    }));

  }

  removeOrders(){
    this.setState({order : []});
  }

  render(){
    return (
      <div className="container py-4">
        <header className="pb-3 mb-4 border-bottom">
          <span className="fs-4">Min egen salladsbar</span>
        </header>

        <ViewOrder order={this.state.order} handleSubmit={this.removeOrders}/>
        <p></p>
        <ComposeSalad inventory={inventory} addToCart={this.addSalad}/>

        <footer className="pt-3 mt-4 text-muted border-top">
          EDAF90 - webprogrammering
        </footer>
      </div>
      );
  }
}
export default App;