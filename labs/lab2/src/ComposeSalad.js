import { Component } from 'react';
import SaladSelect from './SaladSelect';
import SaladCheckBox from './SaladCheckBox';

class ComposeSalad extends Component {
  constructor(props) {
    super(props);
    this.state = {foundation : '', protein : '', extra : {}, dressing : ''};

    this.handleSelect  = this.handleSelect.bind(this);
    this.handleExtra = this.handleExtra.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSelect() {
    
  }

  handleExtra(){
    
  }

  handleSubmit(event){
    event.preventDefault(); 
    this.setState({foundation : '', protein : '', extra : {}, dressing : ''});
  }
  

  render() {
    return (
    <div className="container col-12">
      <div className="row h-200 p-5 bg-light border rounded-3">
        <SaladSelect property={'foundation'} handleChange={this.handleSelect}/> 
        <p></p>
        <SaladSelect property={'protein'} handleChange={this.handleSelect}/>
        <p></p>
        <SaladCheckBox property={'extra'}  handleChange={this.handleExtra}/>
        <p></p>
        <SaladSelect property={'dressing'} handleChange={this.handleSelect}/>
        <p></p>
        </div>
    </div>
    );
  }

}
export default ComposeSalad;