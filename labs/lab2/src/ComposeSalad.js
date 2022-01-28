import { Component } from 'react';
import SaladSelect from './SaladSelect';
import inventory from './inventory.ES6';

class ComposeSalad extends Component {
  constructor(props) {
    super(props);
    this.state = {foundation : '', protein : '', extra : {}, dressing : ''};

    this.handleCallBackSelected  = this.handleCallBackSelected.bind(this);
    this.handleCallBackExtras = this.handleCallBackExtras(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleCallBackSelected(propertyPicked, selectValue) {
    //lösa på ett bättre sätt? tänk om inv ändras?
    //if(propertyPicked === 'foundation') this.setState({foundation : selectValue});
    //Stack
    let copyState = this.state; //shallow copy
    copyState[propertyPicked] = selectValue; // place value 
    this.setState(copyState); //update state
  }

  handleCallBackExtras(){
    
  }

  handleSubmit(event){
    event.preventDefault(); 
    this.setState({foundation : '', protein : '', extra : {}, dressing : ''});
  }

  render() {
    return (
    <div className="container col-12">
      <div className="row h-200 p-5 bg-light border rounded-3">
        <SaladSelect property = {'foundation'} parentCallback = {this.handleCallBackSelected}/> 
        <p></p>
        <SaladSelect property = {'protein'} parentCallback = {this.handleCallBackSelected}/> 
        <p></p>
        <h4>Extra skalla ligga här</h4>
        <p></p>
        <SaladSelect property = {'dressing'} parentCallback = {this.handleCallBackSelected}/> 
        <p></p>
        <form onSubmit = {this.handleSubmit}>
          <input type="submit" value="Submit"/>
        </form>
      </div>
    </div>
    );
  }

}
export default ComposeSalad;