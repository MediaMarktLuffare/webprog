import { Component } from 'react';
import inventory from './inventory.ES6';

class SaladSelect extends Component {
    render(){
        return(
            <form>
                <div className="form-group">
                    <h4>Välj {this.props.property}</h4>
                    <select
                        onChange={this.props.handleChange}
                    >
                        <option value="">---Välj en {this.props.property}---</option>
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