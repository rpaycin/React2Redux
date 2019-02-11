import React, { Component } from 'react';
import { connect } from 'react-redux';
import { increment, decrement } from '../ReduxFiles/ActionCreators';
import {store} from '../index';

class Counter extends Component {
    render() {
        return (
            <div>                
                <button onClick={this.incrementEvent.bind()}>Arttır</button>
                <button onClick={this.decrementEvent.bind()}>Azalt</button>

                <h1>{this.props.counterProp}</h1>                
            </div>
        );
    }

    incrementEvent = () => {
        //dispatch metotu increment metotundan dönen actionu store yönlendirir
        store.dispatch(increment(2));    
    };
    
    decrementEvent = () => {    
        store.dispatch(decrement(1));
    };
}
 
function mapStateToProps(state) {
    //state reducer tarafından güncellendikten sonra burası tetiklenir
    return {
        counterProp:state
    };
}

export default connect(
    mapStateToProps,
)(Counter);