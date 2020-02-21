import React from 'react';

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn==='batman') {
    return (<h1>Welcome batman back!</h1>);
  }
  return (<h1>Please sign up.</h1>);
} 
export default class Login extends React.Component {

  modifyText = (msg) =>{
    console.log(msg)
  }
  render() {
    return (
      <div className='container'>
        <div className='row'>
          <div className='col'>Login</div>
          <div className='col'> {this.props.match.params.nickName} </div>
        </div>
        <div className='row'>
          <Greeting isLoggedIn={this.props.match.params.nickName} />
        </div>
        <button id='BTN' onClick={ num => this.modifyText(5)}>BTN</button>
      </div>
    );
    
  }
}
