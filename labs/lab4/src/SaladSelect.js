import { Component } from 'react';

class SaladSelect extends Component {
    render(){
        return(
            <div className='form-group col-md-4'>
                <h4>Välj {this.props.property}</h4>
                <select
                    required
                    className='col-md-4 form-select'
                    name={this.props.property}
                    value={this.props.value}
                    onChange={this.props.handleChange}                        
                >
                    <option value=''>Gör ditt val</option>
                    {Object.keys(this.props.inventory || {}).filter(name =>
                    this.props.inventory[name][this.props.property]).map(name =>
                    <option key={name} value={name}>{name +', '+this.props.inventory[name].price+' kr'}</option>)}
                </select>
                <div className="invalid-feedback">Doesn't look good!</div>
                <div className="valid-feedback">Looks good!</div>
            </div> 
        );
    }
}
export default SaladSelect;