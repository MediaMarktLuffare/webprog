import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

import { Component } from 'react';
import inventory from './inventory.ES6';
import ViewOrder from './ViewOrder';
import {Link, Route, Routes} from "react-router-dom"
import ComposeSaladWrapper from './ComposeSaladWrapper';
import ViewIngredient from "./ViewIngredient";


class App extends Component {
  constructor(props){
    super(props);
    this.state = {order : []};
    this.addSalad = this.addSalad.bind(this);
    this.removeOrders = this.removeOrders.bind(this);
  }

  addSalad(salad){
    const copyState = [...this.state.order];
    copyState.push(salad);
    this.setState({order : copyState});
  }

  removeOrders(){
    this.setState({order : []});
  }

  render() {
    return (
      <div className="container py-4">
        <Header />
        <Navbar />
        {this.renderRouter()}
        <Footer />
      </div>
      );
  }

  //fråga om index
  renderRouter(){
    return (
      <Routes>
        <Route index path="/" element={<h1>Välkommna!</h1>} />
        <Route path="/compose-salad" element={<ComposeSaladWrapper inventory={inventory} addToCart={this.addSalad} />} />
        <Route path="/view-order" element={<ViewOrder order={this.state.order} />} />
        <Route path="/view-ingredient/:name" element={<ViewIngredient inventory={inventory} />}/>
        <Route path="*" element={<h1>Finns inget här!</h1>} />
      </Routes>
    );
  }
}



function Header() {
  return (
  <header className="pb-3 mb-4 border-bottom">
    <span className="fs-4">Min egen salladsbar</span>
  </header>
  );
}

function Navbar() {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <Link className="nav-link" to="/compose-salad">
          Komponera en sallad
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/view-order">
          Se din beställning
        </Link>
      </li>
      {/* more links */}
    </ul>
  );
}

function Footer() {
  return (
    <footer className="pt-3 mt-4 text-muted border-top">
      EDAF90 - webprogrammering
    </footer>
  );
}
export default App;