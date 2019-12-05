import React, { Component } from 'react';
import './App.css';
import CertificateListComponent from './CertificateListComponent';

class SideBar extends Component {
 
  render() {
    var CERTIFICATES_LIST = ['MFG','TECH','MFG2', 'TECH2', 'QA', 'INSP','CUST'];
    return (
      <div className='align-right'>
        <p>Need to Collect <span className="fas fa-filter"></span></p>
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