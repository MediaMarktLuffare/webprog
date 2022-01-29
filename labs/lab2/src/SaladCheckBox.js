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
                        <div key={name}>
                            <input
                                type='checkbox'
                                name={name}
                                onChange={this.handleChange}
                            />
                            <label>
                                {name +', '+inventory[name].price+' kr'}
                            </label>                                               
                        </div>
                    )}
                </div>
            </form>
        );
    }
}
export default SaladCheckBox;