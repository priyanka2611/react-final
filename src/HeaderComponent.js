import React, { Component } from 'react';
import './App.css';
import _ from 'lodash';

class HeaderComponent extends Component {
 
  render() {
    const MAX_USER_SIZE = 10;
    return (

      <div className='site-header'>
        <div className='header-middle-area'>
          <h4>Operation Title</h4>
          <h3>OP-TITLE</h3>
        </div>
        <div className='header-middle-area'>
          <h4>Work Centre</h4>
          <h3>PP-WC1</h3>
        </div>
        <div className='header-middle-area'>
          <h4>Part</h4>
          <h3>2916</h3>
        </div>
        <div className='header-middle-area'>
          <h4>Rev</h4>
          <h3>1</h3>
        </div>
        <div className='header-middle-area'>
        <h4>Unit</h4>
        <select>
           { _.range(1, MAX_USER_SIZE + 1).map(value => <option key={value} value={value}>{value}</option>) }
        </select>
        </div>
      </div>
    );
  }
}

export default HeaderComponent;