import { Component } from 'react';
import Salad from './Salad';

class ViewOrder extends Component {
    render(){
        return (
            <div className='container col-12'>
                <div className='row h-200 p-5 bg-light border rounded-3'>
                    <h4>Beställningen</h4>
                    {this.props.order.map(mySalad =>
                        <div key={mySalad.uuid} className="form-control form-control-lg">
                            {Salad.getIngredients(mySalad)+', pris: '+ Salad.getPrice(mySalad)}                                
                        </div>
                    )}
                    <p></p>
                    <form onSubmit={this.props.handleSubmit}>
                        <button type="submit" className="btn btn-primary mb-3">Beställ</button>
                    </form>
                </div>

            </div>
        );
    }
}
export default ViewOrder;