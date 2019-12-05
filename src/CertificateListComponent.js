import React, { Component } from 'react';
import './App.css';
class CertificateListComponent extends Component {
 
  render() {
   return (
      <div className = 'box-create '>
       <div className="p-5 pl-10 certificate-bg-color">
                            <div className="flex fcontent-space-between">
                                <div><label><i className="fa fa-thumbs-up"></i> HEADER-TECH2</label></div>
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
                                <button className="r-btn r-btn-white bg-blue r-btn-l-circle">Accept</button>
                                <button className="r-btn r-btn-white bg-black r-btn-r-circle">Reject</button>
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

export default CertificateListComponent;