import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { handleSubmit } from './redux/reducers/CertificateReducer'
import { TiThumbsUp, TiThumbsDown } from 'react-icons/ti';
class CertificationComponent extends Component {
  render() {
  //  var CERTIFICATES_LIST = ['MFG','TECH','MFG2', 'TECH2', 'QA', 'INSP','CUST'];
  
    return (
      <div className ='horizontal-align'>
        <p className='fa fa-thumbs-up'>Certifications needed-</p>
        <span className="glyphicon glyphicon-ok-circle"></span>
        <ul className='list-style-horizontal'>
                {Object.keys(this.props.cerificateList).map((certificate, index)=>{
                  const thumbImageShow = this.props.cerificateList[certificate]==1 ? <TiThumbsUp/> : this.props.cerificateList[certificate]=== -1 ? <TiThumbsDown/> :null
                    return <li className='list-style-horizontal fa fa-thumbs-up' key={ index }> {thumbImageShow} {certificate}  </li>;
                  })}
            </ul>
      </div>
 );
  }
}
const mapStateToProps = (state) => {
  return {
    cerificateList: state.unitReducer.unitCertificates[state.unitReducer.currentUnit]
  }
 }

export default  connect(mapStateToProps)(CertificationComponent);