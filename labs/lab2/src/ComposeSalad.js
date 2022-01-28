import { Component } from 'react';
import SaladSelect from './SaladSelect';
import inventory from './inventory.ES6';

class ComposeSalad extends Component {
  constructor(props) {
    super(props);
    this.state = {foundation : '', protein : '', extra : {}, dressing : ''};

    this.handleChangeF = this.handleChangeF.bind(this);
    this.handleCallBack = this.handleCallBack(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeF(event){
    this.setState({foundation: event.target.value});
  }

  handleSubmit(event){
    event.preventDefault(); 
    this.setState({foundation : '', protein : '', extra : {}, dressing : ''});
  }

  handleCallBack(property){
    
  }

  render() {
    return (
      <div className="continer col-12">
      <div className="row h-200 p-5 bg-light border rounded-3">
        <h2>Bygg din sallad</h2>
        <select name = 'foundation' onChange = {this.handleChangeF}>
        {Object.keys(inventory).filter(name => inventory[name].foundation)
        .map(name => 
        <option key = {name} value = {name}> {name + ', ' + inventory[name].price} kr</option>
        )}
        </select>  
        <p></p>
        <SaladSelect property = {'foundation'} onChange = {this.handleCallBack}/>
        <p></p>
        <SaladSelect property = {'protein'} onChange = {this.handleCallBack}/>    
      </div>
    </div>
    );
  }

}
export default ComposeSalad;