import { Component } from 'react';
import inventory from './inventory.ES6';
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
    //console.log(event.target.name + ' har '+ event.target.value);
    this.setState({[event.target.name] : event.target.value});
  }

  handleExtra(event){
    //console.log(event.target.value+' '+event.target.name+' Vald, intryckt: '+event.target.checked);
    //let copyState = {...this.state[event.target.value]}; //kopiering av hela blir knas
    //ändra i state, ta aldrig bort något.
    //copyState[event.target.name] = event.target.checked;
    //console.log('Test: '+this.state.extra[event.target.name]);
    //this.setState({[event.target.value] : copyState});

    this.setState(prevState => (
      {extra : {...prevState.extra, [event.target.name]: event.target.checked}}
    ), console.log(event.target.value+' '+event.target.name+' Vald, intryckt: '+event.target.checked));
    
  }

  createSalad(){
    let salad = new Salad();
    salad.add(this.state.foundation, this.props.inventory[this.state.foundation]);
    salad.add(this.state.protein, this.props.inventory[this.state.protein]);
    Object.keys(this.state.extra).forEach(name => (this.state.extra[name] ? salad.add(name,this.props.inventory[name]) : salad.remove(name)));
    salad.add(this.state.dressing, this.props.inventory[this.state.dressing]);
    //console.log(JSON.stringify(salad));
    return salad;
  }

  handleSubmit(event){
    event.preventDefault();
    //event.target.classList.add("was-validated");

    if(event.target.checkValidity() === false){
      console.log("ERROR!");
      event.target.classList.add("was-validated");
     } else {
      this.props.addToCart(this.createSalad());
      this.setState({foundation : '', protein : '', extra : {}, dressing : ''});
      this.props.navigate("/view-order");
      console.log("OK!");
     }
  }
  
  render() {
    return (
    <div className='container col-12'>
      <div className='row h-200 p-5 bg-light border rounded-3'>
        <form onSubmit={this.handleSubmit} noValidate>
          <h1>Välj innehållet i din sallad</h1>
          <p></p>
          <SaladSelect property={'foundation'} handleChange={this.handleSelect}/> 
          <p></p>
          <SaladSelect property={'protein'} handleChange={this.handleSelect}/>
          <p></p>
          <SaladCheckbox property={'extra'} list={this.state.extra} handleChange={this.handleExtra}/>
          <p></p>
          <SaladSelect property={'dressing'} handleChange={this.handleSelect}/>
          <p></p>          
          <button type='submit' className='btn btn-primary mb-3'>Beställ</button>
        </form>
      </div>
    </div>
    );
  }
}
export default ComposeSalad;