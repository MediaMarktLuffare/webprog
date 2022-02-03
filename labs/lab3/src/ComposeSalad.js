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
    //console.log(event.target.name + ' har '+ event.target.value);
    //ECMA2015  t.ex. foundation          sallad
    this.setState({[event.target.name] : event.target.value});
  }

  handleExtra(event){
    //console.log(event.target.value+' '+event.target.name+' Vald, intryckt: '+event.target.checked);
    let copyState = {...this.state[event.target.value]}; //kopiering av hela blir knas
    //ändra i state, ta aldrig bort något.
    copyState[event.target.name] = event.target.checked;
    //console.log('Test: '+this.state.extra[event.target.name]);
    this.setState({[event.target.value] : copyState});
    
  }

  handleSubmit(event){
    event.preventDefault();

    let salad = new Salad();
    salad.add(this.state.foundation, inventory[this.state.foundation]);
    salad.add(this.state.protein, inventory[this.state.protein]);
    Object.keys(this.state.extra).forEach(name => (this.state.extra[name] ? salad.add(name,inventory[name]) : salad.remove(name)));
    salad.add(this.state.dressing, inventory[this.state.dressing]);
    //console.log(JSON.stringify(salad)); 
    
    this.props.addToCart(salad);
    this.setState({foundation : '', protein : '', extra : {}, dressing : ''});
  }
  //Fråga om det med list={this.state.extra}, varför det är list är självklart men varför controlled?
  render() {
    return (
    <div className='container col-12'>
      <div className='row h-200 p-5 bg-light border rounded-3'>
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
        <form onSubmit={this.handleSubmit}>
          <button type="submit" className="btn btn-primary mb-3">Beställ</button>
        </form>
      </div>
    </div>
    );
  }
}
export default ComposeSalad;