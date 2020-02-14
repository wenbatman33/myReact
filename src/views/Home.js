import React from 'react';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
  }
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
      </div>
    );
  }
}
