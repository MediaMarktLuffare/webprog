import React, { Component } from 'react';
import { Link } from 'react-router-dom';
//import inventory from './inventory.ES6';
import './App.css';

class SaladCheckbox extends Component {


    render() {
        return (
            <div>
                {Object.keys(this.props.inventory).filter(name => this.props.inventory[name][this.props.property]).map(name =>
                    <div className="form-check"
                        key={name} className="form-check form-check-inline col-md-3">
                        <input
                            checked={this.props.list[name] || false}
                            className="form-check-input"
                            type="checkbox"
                            value={this.props.property}
                            name={name}
                            onChange={this.props.handleSelect}
                        />

                        <label className="form-check-label"  >
                            <Link className="nounderline" to={'/view-ingredient/' + name}>
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