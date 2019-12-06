import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { MdSave } from 'react-icons/md';
import { TiThumbsUp } from 'react-icons/ti';
import { handleSubmit } from './redux/reducers/CertificateReducer'
class CertificateListComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
      status: props.certVal
    };

  }
  saveCertdata = () => {
    if(this.props.playerStatus){
      const data = { certName: this.props.certName, certVal: this.state.status };
      this.props.saveData(data)
    }
    else{
      this.props.handledPausedPlayer();
    }
  }

  render() {
    return (
      <div className='box-create '>
        <div className="p-5 pl-10 certificate-bg-color">
          <div className="flex fcontent-space-between">
            <div>
              <label>
                <TiThumbsUp style={{ float: "left" }} />HEADER-{this.props.certName}
                <button onClick={this.saveCertdata} style={{ float: "right" }}><MdSave ></MdSave></button>
              </label>
            </div>
            <div><i className="fa fa-floppy-o"></i></div>
          </div>
        </div>
        <div className="pl-10 pr-10">
          <div className="pt-10">
            <p className="margin-0">Complete?</p>
          </div>
        </div>
        <div className="pl-10 pr-10">
          <div className="flex">
            <button onClick={() => this.setState({ status: 1 })} className="r-btn r-btn-white bg-blue r-btn-l-circle">Accept</button>
            <button onClick={() => this.setState({ status: -1 })} className="r-btn r-btn-white bg-black r-btn-r-circle">Reject</button>
          </div>
        </div>

        <div className="pl-10 pr-10">
          <div className="pt-10">
            <p className="margin-0">Comments (optional)</p>
          </div>
          <div className="p-2">
            <textarea rows="3" cols="20" className="operation-bg-color border-radius-4">
            </textarea>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    playerStatus: state.playerReducer.player
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    saveData: (data) => { dispatch({ type: 'ADD_DATA', payload: data }) }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(CertificateListComponent);