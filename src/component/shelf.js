import React from 'react';

export default class Shelf extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      shelfItems:[
        'shampoo',
        'coke',
        'pepsi'
      ]
    }
  }
  render() {
    const shelfItems = this.state.shelfItems.map((item, index)=>{
      return <li key={index}><button>[+]</button>{item}</li>
    });
    return (
      <div className='Shelf'>
        <h2></h2>
        <ul>
          {shelfItems}
        </ul>
      </div>
    );
  }
}
