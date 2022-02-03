import { Component } from 'react';
import inventory from './inventory.ES6';

class SaladCheckbox extends Component {
    render(){
        return(
            <form
                id={this.props.id}
            >
                <div>
                    <h4>Välj {this.props.property}</h4>
                    {Object.keys(inventory).filter(name => inventory[name][this.props.property])
                    .map(name =>
                        <div key={name} className='form-check form-check-inline col-md-3'>
                            <input
                                className='form-check-input'
                                type='checkbox'
                                value={this.props.property}
                                name={name}
                                onChange={this.props.handleChange} 
                                checked={this.props.list[name] || false}                          
                            />
                            <label className='form-check-label'>
                                {name}
                            </label>                                             
                        </div>
                    )}
                </div>
            </form>
        );
    }
}
export default SaladCheckbox;