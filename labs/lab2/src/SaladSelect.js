import { Component } from 'react';
import inventory from './inventory.ES6';

class SaladSelect extends Component {
    render(){
        return(
            <form 
                className='form-div'
            >
                <div className='form-group col-md-4'>
                    <h4>Välj {this.props.property}</h4>
                    <select
                        className='form-control col-md-4'
                        name={this.props.property}
                        onChange={this.props.handleChange}
                    >
                        <option value=''>Gör ditt val</option>
                        {Object.keys(inventory).filter(name =>
                        inventory[name][this.props.property]).map(name =>
                        <option key={name} value={name}>{name +', '+inventory[name].price+' kr'}</option>)}
                    </select>
                </div>
            </form>
        );
    }
}
export default SaladSelect;