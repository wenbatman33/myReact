import React from 'react';

const Header = (props) =>(
  <div className='header'>
    <div className='container'>
      <div className='row'>
        <div className='col-4'>Header</div>
        <div className='col-8 text-right'>
          <span className='mr-4'><a href='/page_1'>page_1</a></span>
          <span className='mr-4'><a href='/page_2'>page_2</a></span>
          <span className='mr-4'><a href='/page_3'>page_3</a></span>
          <span className='mr-4'><a href='/page_4'>page_4</a></span>
        </div>
      </div>
    </div>
  </div>
);

export default Header;
