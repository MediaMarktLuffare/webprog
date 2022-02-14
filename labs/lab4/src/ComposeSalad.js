import { Component } from 'react';
import SaladSelect from './SaladSelect';
import SaladCheckbox from './SaladCheckbox';
import Salad from './Salad';

class ComposeSalad extends Component {
  constructor(props) {
    super(props);
    this.state = {foundation : '', protein : '', extra : {}, dressing : ''};

    this.handleSelect  = this.handleSelect.bind(this);
    this.handleExtra = this.handleExtra.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSelect(event) {
    event.target.parentElement.classList.add("was-validated");
    this.setState({[event.target.name] : event.target.value});
  }

  handleExtra(event){
    this.setState(prevState => (
      {extra : {...prevState.extra, [event.target.name]: event.target.checked}}
    ));
  }

  createSalad(){
    let salad = new Salad();
    salad.add(this.state.foundation, this.props.inventory[this.state.foundation]);
    salad.add(this.state.protein, this.props.inventory[this.state.protein]);
    Object.keys(this.state.extra).forEach(name => (this.state.extra[name] ? salad.add(name,this.props.inventory[name]) : salad.remove(name)));
    salad.add(this.state.dressing, this.props.inventory[this.state.dressing]);
    return salad;
  }

  handleSubmit(event){
    event.preventDefault();

    if(event.target.checkValidity() === false){
      event.target.classList.add("was-validated");
     } else {
      this.props.addToCart(this.createSalad());
      this.setState({foundation : '', protein : '', extra : {}, dressing : ''});
      this.props.navigate("/view-order");
     }
  }
  
  render() {
    return (
    <div className='container col-12'>
      <div className='row h-200 p-5 bg-light border rounded-3'>
        <form onSubmit={this.handleSubmit} className="needs-validation" noValidate>
          <h1>Välj innehållet i din sallad</h1>
          <p></p>
          <SaladSelect property={'foundation'} inventory={this.props.inventory} handleChange={this.handleSelect}/> 
          <p></p>
          <SaladSelect property={'protein'} inventory={this.props.inventory} handleChange={this.handleSelect}/>
          <p></p>
          <SaladCheckbox property={'extra'} inventory={this.props.inventory} list={this.state.extra} handleChange={this.handleExtra}/>
          <p></p>
          <SaladSelect property={'dressing'} inventory={this.props.inventory} handleChange={this.handleSelect}/>
          <p></p>          
          <button type='submit' className='btn btn-primary mb-3'>Beställ</button>
        </form>
      </div>
    </div>
    );
  }
}
export default ComposeSalad;