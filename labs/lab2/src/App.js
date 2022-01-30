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
    this.state = {shoppingCart : []};
    this.addSalad = this.addSalad.bind(this);
  }

  addSalad(salad){
    let copyState = [...this.state.shoppingCart];
    copyState.push(salad);
    this.setState({shoppingCart : copyState});
  }

  render(){
    return (
      <div className="container py-4">
        <header className="pb-3 mb-4 border-bottom">
          <span className="fs-4">Min egen salladsbar</span>
        </header>

        <ViewOrder order={this.state.shoppingCart}/>

        <ComposeSalad inventory={inventory} addSalad={this.addSalad}/>

        <footer className="pt-3 mt-4 text-muted border-top">
          EDAF90 - webprogrammering
        </footer>
      </div>
      );
  }
}
export default App;