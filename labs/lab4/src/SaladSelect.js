import { Component } from 'react';
import inventory from './inventory.ES6';

class SaladSelect extends Component {
    render(){
        return(
            <div className='form-group col-md-4'>
                <h4>Välj {this.props.property}</h4>
                <select
                    required
                    className='col-md-4 form-select'
                    name={this.props.property}
                    onChange={this.props.handleChange}                        
                >
                    <option value=''>Gör ditt val</option>
                    {Object.keys(inventory).filter(name =>
                    inventory[name][this.props.property]).map(name =>
                    <option key={name} value={name}>{name +', '+inventory[name].price+' kr'}</option>)}
                </select>
                <div className="invalid-feedback">Doesn't look good!</div>
                <div className="valid-feedback">Looks good!</div>
            </div> 
        );
    }
}
export default SaladSelect;