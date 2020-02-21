import React from 'react';

// export default class Header extends React.Component {
//   constructor(props){
//     super(props);
//     this.state = { isOn: this.props.nickName };
//   }
//   render() {
//     return (
//       <div className='header'>
//         <div className='container'>
//           <div className='row'>
//             <div className='col-6'>Header</div>
//             <div className='col-3'>{this.props.nickName}</div>
//             <div className='col-3'>{this.state.isOn} 你好</div>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

const Header = (props) =>(
  <div className='header'>
    <div className='container'>
      <div className='row'>
        <div className='col-6'>Header</div>
        <div className='col-3'>{props.nickName}</div>
      </div>
    </div>
  </div>
);

export default Header;
