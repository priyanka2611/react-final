import React, { Component } from 'react';
import './App.css';
class CertificationComponent extends Component {
 
  render() {
    var CERTIFICATES_LIST = ['MFG','TECH','MFG2', 'TECH2', 'QA', 'INSP','CUST'];
    return (
      <div className ='horizontal-align'>
        <p className='fa fa-thumbs-up'>Certifications needed</p>
        <ul className='list-style-horizontal'>
                {CERTIFICATES_LIST.map(function(certificate, index){
                    return <li className='list-style-horizontal fa fa-thumbs-up' key={ index }>  {certificate}  </li>;
                  })}
            </ul>
      </div>
 );
  }
}

export default CertificationComponent;