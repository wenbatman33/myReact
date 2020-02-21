import React, { Component } from 'react';
import { connect } from 'react-redux';
import { simpleAction } from 'actions/simpleAction';

const mapDispatchToProps = dispatch => ({
  simpleAction: () => dispatch(simpleAction())
})
const mapStateToProps = state => ({
...state
})
 
class RD extends Component {
  simpleAction = (event) => {
    this.props.simpleAction();
  }
  render() {
  return (
      <div className="RD">
        <button onClick={this.simpleAction}>Test redux action</button>
        <pre>
          { JSON.stringify(this.props) }
        </pre>
      </div>
    );
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(RD);