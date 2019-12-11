import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { IoIosCheckmarkCircleOutline } from "react-icons/io";

class HeaderComponent extends Component {

  selectUnit = (event) => {
    const selectedUnit = event.target.value;
    this.props.setCurrentUnit(selectedUnit);

  }
  render() {
    const circleOutline = true ? <IoIosCheckmarkCircleOutline /> : null
    return (

      <div className='site-header horizontal-align-header'>
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
          <h4>Unit {circleOutline}</h4>
          <select onChange={this.selectUnit}>
            {this.props.units.map(value => <option key={value} value={value}>{value}</option>)}
          </select>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    units: Object.keys(state.unitReducer.unitCertificates)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setCurrentUnit: (unitVal) => dispatch({ type: "SET_UNIT", payload: unitVal }) //unit val has value of selected dropdown
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(HeaderComponent);