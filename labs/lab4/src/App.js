import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

import { Component } from 'react';
import ViewOrder from './ViewOrder';
import {Link, Route, Routes} from "react-router-dom"
import ComposeSaladWrapper from './ComposeSaladWrapper';
import ViewIngredient from "./ViewIngredient";

class App extends Component {
  constructor(props){
    super(props);

    const myMemory = JSON.parse(localStorage.getItem('order'));
    this.state = {order : myMemory, inventory : {}};

    this.addSalad = this.addSalad.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  addSalad(salad){
    window.localStorage.setItem('order', JSON.stringify([...this.state.order, salad]));

    this.setState(prevState => (
      {order: [...prevState.order, salad]}
    ));
  }

  handleSubmit(event) {
    event.preventDefault();

    //console.log('State: '+JSON.stringify(Object.keys(this.state.order[0].salad)));
    const mySaladIngredients = this.state.order.map(mySalad => Object.keys(mySalad.salad));
    //console.log('Hint: '+JSON.stringify(mySaladIngredients));

    const request = {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(mySaladIngredients),
    };

    fetch("http://localhost:8080/orders/", request)
    .then(response => response.json())
    .then(data => console.log(data))
    .then(() => this.setState({order : []}));
    window.localStorage.clear(); //kanske inte smart med clear
  }

  componentDidMount() {
    const tempInv = {}
    //Resterande steg
    Promise.all(
      ['foundations', 'proteins', 'extras', 'dressings'].map(property => {
        this.fetchProperty(property)
          .then(values => {
            values.forEach(ingredient => {
              this.fetchIngredient(property, ingredient).then(data => tempInv[ingredient] = data)
            })
          })
          .then(() => this.setState({inventory : tempInv}))
          .catch(error => {
            console.log(error);
          })
      })
    );

    /* Steg 1
    this.fetchIngredient('foundations','Sallad')
      .then(data => this.setState({ inventory : {'Salad' : data}}));
    */
    /* Steg 2
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
  }

  //Steg 1
  fetchIngredient(property, ingredient){
    const url = 'http://localhost:8080/'+property+'/'+ingredient;
    return this.safeFetchJson(url);
  }

  //Steg 2
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
        <Route path="/view-order" element={<ViewOrder order={this.state.order} handleSubmit={this.handleSubmit} />} />
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