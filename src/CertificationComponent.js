import React, { Component } from 'react';
import './App.css';
import _ from 'lodash';
class CertificationComponent extends Component {
 
  render() {
    var CERTIFICATES_LIST = ['MFG','TECH','MFG2', 'TECH2', 'QA', 'INSP','CUST'];
    return (
      <div>
        <p>Certifications needed</p>
        <ul className='list-style-horizontal'>
                {CERTIFICATES_LIST.map(function(certificate, index){
                    return <li className='list-style-horizontal' key={ index }>  {certificate}  </li>;
                  })}
            </ul>
      </div>
 );
  }
}

export default CertificationComponent;