import { Component } from 'react';
import inventory from './inventory.ES6';

class SaladCheckBox extends Component {
    constructor(props){
        super(props);
        this.state = {};

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event){
        this.props.parentCallback(event.target.name);
    }

    render(){
        return(
        <div>
            {Object.keys(inventory).filter(name => inventory[name][this.props.property])
            .map(name => 
                <div key = {name}>
                    <input
                        type = "checkbox"
                        name = {name}
                        onChange = {this.handleChange}
                />
                <label key = {name} value = {name}>{name + ', ' + inventory[name].price +' kr'} </label>
                </div>
            )}
        </div>
        );
    }

}
export default SaladCheckBox;