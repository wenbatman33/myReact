import React from 'react';
import { connect } from 'react-redux';

class Counter extends React.Component {
  increment = () => {
    this.props.dispatch({ type: 'INCREMENT' });
  }

  decrement = () => {
    this.props.dispatch({ type: 'DECREMENT' });
  }

  render() {
    return (
      <div>
        <h2>Counter :{this.props.count}</h2>
        <div className='py-3'>
          <button onClick={this.decrement} className='mr-2'>--</button>
          <button onClick={this.increment} className='mr-2'>++</button>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log(state)
  return {
    count: state.count
  };
}
export default connect(mapStateToProps)(Counter);

