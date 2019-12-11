import React, { Component } from 'react';
import './App.css';
import { MdTune } from 'react-icons/md';
import CertificateListComponent from './CertificateListComponent';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
class SideBar extends Component {
  showToaster = () => {
    toast.error("Error Notification !", {
      position: toast.POSITION.TOP_RIGHT
    });
  }
  render() {
    return (
      <div className='align-right'>
        <div><label> Need to Collect <MdTune style={{ float: "right" }} /></label></div>
        <ul className='list-style-horizontal'>
          {
            Object.keys(this.props.certificateList).map((certificate, index) => {
              return <li className='list-style-horizontal' key={index}>
                <CertificateListComponent certName={certificate} certVal={this.props.certificateList[certificate]} handledPausedPlayer={this.showToaster} />
              </li>;
            })
          }
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    certificateList: state.unitReducer.unitCertificates[state.unitReducer.currentUnit]

  }
}

export default connect(mapStateToProps)(SideBar);
