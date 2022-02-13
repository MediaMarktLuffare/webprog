import { Component } from 'react';
import SaladSelect from './SaladSelect';
//import inventory from './inventory.ES6';
import SaladCheckbox from './SaladCheckbox';
import Salad from './Salad';

class ComposeSalad extends Component {
  constructor(props) {
    super(props);
    this.state = { foundation: '', protein: '', extra: {}, dressing: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleExtra = this.handleExtra.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    event.target.parentElement.classList.add("was-validated");
    this.setState({ [event.target.name]: event.target.value });
  }
  handleExtra(event) {
    this.setState(prevState => (
      { extra: { ...prevState.extra, [event.target.name]: event.target.checked } }
    ));
  }

  createSalad() {
    let salad = new Salad();
    salad.add(this.state.foundation, this.props.inventory[this.state.foundation])
    salad.add(this.state.protein, this.props.inventory[this.state.protein])
    Object.keys(this.state.extra).forEach(name => salad.add(name, this.props.inventory[name]));
    salad.add(this.state.dressing, this.props.inventory[this.state.dressing]);
    //console.log(JSON.stringify(salad));
    return salad;
  }

  handleSubmit(event) {
      event.preventDefault();
      event.target.classList.add("was-validated");
      if (event.target.checkValidity() === false) {
        //console.log("ERROR!!!");
        //event.preventDefault();
      } else {
        this.props.addToShoppingcart(this.createSalad());
        this.setState({ foundation: '', protein: '', extra: {}, dressing: '' });
        this.props.navigate("/view-order");
        //console.log("NOT ERROR!!!");
      }
  }

render() {
    return (
      <div className="continer col-12">
        <div className="row h-200 p-5 bg-light border rounded-3">
          <form onSubmit={this.handleSubmit} noValidate >
            <h1>Välj innehållet i din sallad</h1>
            <p></p>
            <SaladSelect property={'foundation'} handleSelect={this.handleChange} inventory={this.props.inventory} />
            <p></p>
            <SaladSelect property={'protein'} handleSelect={this.handleChange}  inventory={this.props.inventory} />
            <p></p>
            <SaladCheckbox property={'extra'} list={this.state.extra} handleSelect={this.handleExtra}  inventory={this.props.inventory} />
            <p></p>
            <SaladSelect property={'dressing'} handleSelect={this.handleChange}  inventory={this.props.inventory} />
            <p></p>
            <button type="submit" className="btn btn-primary mb-3">Beställ</button>
          </form>
        </div>
      </div>
    );
  }
}
export default ComposeSalad;