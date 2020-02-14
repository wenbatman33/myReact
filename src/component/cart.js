import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as CartActions from '@/actions/cart'
import Shelf from '@/component/shelf'

class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {
    const cartList = this.props.cart.map((item, idx) => <li key={idx}>{item}</li>);
    return (
      <div className='Cart'>
        <Shelf addItem= { this.props.actions.addToCart } />
        <h2>Cart Items</h2>
        <ol>
          {cartList}
        </ol>
      </div>
    );
  }
}

function mapStateToProps(state, props) {
  return {
      cart: state.cart
  };
}

function mapDispatchToProps(dispatch) {
  return {
      actions: bindActionCreators(CartActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);