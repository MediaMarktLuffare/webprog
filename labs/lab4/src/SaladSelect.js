import React, { Component } from 'react';
//import inventory from './inventory.ES6';

class SaladSelect extends Component {
    render() {
        return (
            <div className='form-group col-md-4'>
                <h4>Välj {this.props.property}</h4>
                <select
                    className="form-control col-md-4 form-select"
                    name={this.props.property}
                    onChange={this.props.handleSelect}
                    required 
                >
                    <option value=''>Gör ditt val</option>
                    {Object.keys(this.props.inventory).filter(name => this.props.inventory[name][this.props.property]).map(name =>
                        <option key={name} value={name}>{name + ', ' + this.props.inventory[name].price + ' kr'}</option>)}
                </select>
                <div className="valid-feedback"> Looks good! </div>
                <div className="invalid-feedback"> no good! </div>
            </div>
        );
    }
}
export default SaladSelect;
