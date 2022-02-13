import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

import { Component } from 'react';
//import inventory from './inventory.ES6';
import ViewOrder from './ViewOrder';
import {NavLink, Link, Route, Routes} from "react-router-dom"
import ComposeSaladWrapper from './ComposeSaladWrapper';
import ViewIngredient from "./ViewIngredient";


class App extends Component {
  constructor(props){
    super(props);
    this.state = {order: [], inventory: {}};
    this.addSalad = this.addSalad.bind(this);
    this.removeOrders = this.removeOrders.bind(this);
  }

  addSalad(salad){
    this.setState(prevState => (
      {order: [...prevState.order, salad]}
    ));
  }

  removeOrders(){
    this.setState({order : []});
  }

  componentDidMount() {
    const tempInv = {}
    const properterties = ['foundations', 'proteins', 'extras', 'dressings'];
    /*
    this.fetchIngredient('foundations','Sallad')
      .then(data => this.setState({ inventory : {'Salad' : data}}));
    */
    /*
    this.fetchProperty('foundations')
      .then(values => {
        values.forEach(ingr => 
          this.fetchIngredient('foundations',ingr).then(data => tempInv[ingr] = data)
        )
      })
      .then((response) => this.setState({inventory: tempInv})
      ).catch(error => {
        console.log(error);
      });
    */

    Promise.all(
      properterties.map(property => {
        this.fetchProperty(property)
          .then(values => {
            values.forEach(ingredient => {
              this.fetchIngredient(property, ingredient).then(data => tempInv[ingredient] = data)
            })
          })
          .then(() => this.setState({inventory : tempInv}, console.log(this.state.inventory)))
          .catch(error => {
            console.log(error);
          })
      })
    );
  }

  fetchIngredient(property, ingredient){
    const url = 'http://localhost:8080/'+property+'/'+ingredient;
    return this.safeFetchJson(url);
  }

  fetchProperty(property){
    const url = 'http://localhost:8080/'+property;
    return this.safeFetchJson(url);
  }

  safeFetchJson(url) {
    return fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error('${url} returned status ${response.status}');
        }
        return response.json();
      });
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
        <Route path="/compose-salad" element={<ComposeSaladWrapper inventory={this.state.inventory} addToCart={this.addSalad} />} />
        <Route path="/view-order" element={<ViewOrder order={this.state.order} />} />
        <Route path="/view-ingredient/:name" element={<ViewIngredient inventory={this.state.inventory} />} />
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