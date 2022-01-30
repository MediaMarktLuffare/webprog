import { Component } from 'react';

class ViewOrder extends Component {
    render(){
        return (
            <div className='container col-12'>
                <div className='row h-200 p-5 bg-light border rounded-3'>
                    <h4>Beställningen</h4>
                    {this.props.order.map(salad =>
                        <div key={salad} className='form-check form-check-inline col-md-3'>
                            {salad.getIngredients()+' '+ salad.getPrice()}                                
                        </div>
                    )}
                </div>
            </div>
        );
    }
}
export default ViewOrder;