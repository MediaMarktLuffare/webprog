import { Component } from 'react';
import SaladSelect from './SaladSelect';
import inventory from './inventory.ES6';

class ComposeSalad extends Component {
  constructor(props) {
    super(props);
    this.state = {foundation : '', protein : '', extra : {}, dressing : ''};

    this.handleCallback  = this.handleCallback.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleCallback(propertyPicked, selectValue) {
    const currentProperty = this.state;
    this.setState({a : selectValue});
  }

  handleSubmit(event){
    event.preventDefault(); 
    this.setState({foundation : '', protein : '', extra : {}, dressing : ''});
  }

  render() {
    return (
      <div className="container col-12">
        <div className="row h-200 p-5 bg-light border rounded-3">
            <SaladSelect property = {'foundation'} parentCallback={this.handleCallback}/> 
            <p></p>
            <SaladSelect property = {'protein'} parentCallback={this.handleCallback}/> 
            <p></p>
            <h4>Extra skalla ligga här</h4>
            <p></p>
            <SaladSelect property = {'dressing'} parentCallback={this.handleCallback}/> 
        </div>
    </div>
    );
  }

}
export default ComposeSalad;