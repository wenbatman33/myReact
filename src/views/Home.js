import React from 'react';

export default class Home extends React.Component {
  componentDidMount() {
    console.log("componentDidMount");
  }
  shouldComponentUpdate() {
    console.log("shouldComponentUpdate");
  }
  componentDidUpdate() {
    console.log("componentDidUpdate");
  }
  componentWillUnmount() {
    console.log("componentWillUnmount");
  }
  componentDidCatch() {
    console.log("componentDidCatch");
  }

  render() {
    return (
      <div>
        <h2>Home</h2>
        <hr/>
      </div>
    );
  }
}
