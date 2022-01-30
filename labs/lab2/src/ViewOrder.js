import { Component } from 'react';

class ViewOrder extends Component {
    render(){
        return(
            <div className='container col-12'>
                <div className='row h-200 p-5 bg-light border rounded-3'>
                    <h1>Beställningen</h1>
                    {this.props.order.map(salad =>
                        <div className="form-control form-control-lg">
                            {salad.getIngredients()+' pris: '+salad.getPrice()}
                        </div>
                    )}
                </div>
            </div>
        );
    }
}
export default ViewOrder;