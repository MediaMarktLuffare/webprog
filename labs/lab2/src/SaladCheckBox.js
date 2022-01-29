import { Component } from 'react';
import inventory from './inventory.ES6';

class SaladCheckBox extends Component {
    render(){
        return(
            <form>
                <div>
                    <h4>Välj {this.props.property}</h4>
                    {Object.keys(inventory).filter(name => inventory[name][this.props.property])
                    .map(name =>
                        <div key={name} className="form-check form-check-inline col-md-3">
                            <input
                                className="form-check-input"
                                type='checkbox'
                                name={this.props.property}
                                value={name}
                                onChange={this.props.handleChange}
                            />
                            <label className="form-check-label">
                                {name}
                            </label>                                             
                        </div>
                    )}
                </div>
            </form>
        );
    }
}
export default SaladCheckBox;