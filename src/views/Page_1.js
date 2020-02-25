import React from 'react';

function ShowDiv(props){
  if(props.abc>=10){
    return (<h3> 大於10 </h3>)
  } else {
    return (<h3> 小於10 </h3>)
  }
}
export default class Page_1 extends React.Component {
  state={
    count:0
  }
  increment = () => {
    this.setState((prevState, props) => ({
      count: prevState.count+1
    }));
  }

  decrement = () => {
    this.setState((prevState, props) => ({
      count: prevState.count-1
    }));
  }

  multiply = () => {
    this.setState((prevState, props) => ({
      count: prevState.count*2
    }));
  }
  
  

  render() {
    return (
      <div>
        <h1>page_1</h1>
        <p>{this.state.count}</p>
        <ShowDiv abc={this.state.count}/>
        <div className="abd"></div>
        <p className="wgud"></p>
        <p>
          <button onClick={this.increment}>++</button>
          <button onClick={this.decrement}>--</button>
          <button onClick={this.multiply}>xx</button>
        </p>
      </div>
    );
  }
}
