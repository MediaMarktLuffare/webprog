import { Component } from 'react';
import SaladSelect from './SaladSelect';
import SaladCheckbox from './SaladCheckbox';
import inventory from './inventory.ES6';

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
    if(event.target.checked){
      copyState[event.target.name] = true;
    } else {
      copyState[event.target.name] = false;
    }
    this.setState({[event.target.value] : copyState});
  }

  handleSubmit(event){
    event.preventDefault(); 
    this.setState({foundation : '', protein : '', extra : {}, dressing : ''});
  }
  

  render() {
    return (
    <div className="container col-12">
      <div className="row h-200 p-5 bg-light border rounded-3">
        <h1>Välj innehållet i din sallad</h1>
        <p></p>
        <SaladSelect property={'foundation'} handleChange={this.handleSelect}/> 
        <p></p>
        <SaladSelect property={'protein'} handleChange={this.handleSelect}/>
        <p></p>
        <SaladCheckbox property={'extra'} handleChange={this.handleExtra}/>
        <p></p>
        <SaladSelect property={'dressing'} handleChange={this.handleSelect}/>
        <p></p>
        </div>
    </div>
    );
  }

}
export default ComposeSalad;