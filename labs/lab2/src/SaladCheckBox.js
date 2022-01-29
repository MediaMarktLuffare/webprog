import { Component } from 'react';
import inventory from './inventory.ES6';

class SaladCheckBox extends Component {
    constructor(props){
        super(props);
        this.state = {};

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event){
        console.log(this.props.property+' '+ event.target.name +' Är intryckt '+event.target.checked);
        
    }

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
                                value={name}
                                onChange={this.handleChange}
                            >
                            </input>
                            {name +', '+inventory[name].price+' kr'}                                               
                        </div>
                    )}
                </div>
            </form>
        );
    }
}
export default SaladCheckBox;