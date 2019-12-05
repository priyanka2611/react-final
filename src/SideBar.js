import React, { Component } from 'react';
import './App.css';
import _ from 'lodash';
import CertificateListComponent from './CertificateListComponent';
class SideBar extends Component {
 
  render() {
    var CERTIFICATES_LIST = ['MFG','TECH','MFG2', 'TECH2', 'QA', 'INSP','CUST'];
    return (
      <div>
        <ul className='list-style-horizontal'>
                {CERTIFICATES_LIST.map(function(certificate, index){
                    return <li className='list-style-horizontal' key={ index }>  <CertificateListComponent/>  </li>;
                  })}
            </ul>
      </div>
 );
  }
}

export default SideBar;