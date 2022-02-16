import './App.css';
import { Component } from 'react';
import {Link} from "react-router-dom";

class SaladCheckbox extends Component {
    render(){
        return(
            <div>
                <h4>Välj {this.props.property}</h4>
                {Object.keys(this.props.inventory).filter(name => this.props.inventory[name][this.props.property])
                .map(name =>
                    <div key={name} className='form-group form-check form-check-inline col-md-3'>
                        <input
                           className='form-check-input'
                            type='checkbox'
                            value={this.props.property}
                            name={name}
                            onChange={this.props.handleChange} 
                            checked={this.props.list[name] || false}                          
                        />
                        <label className='form-check-label'>
                            <Link className="nounderline" to={'/view-ingredient/'+name}>
                                {name}
                            </Link>
                        </label>                                          
                    </div>
                )}
            </div>
        );
    }
}
export default SaladCheckbox;