import React, { Component } from "react";
import { STAFFS } from "./shared/staffs";
import "./StaffList.css";

class StaffList extends Component {
  constructor(props) {
    super(props);
    this.state = { no: null };
  }

  render() {
    var newSTAFFS = STAFFS.splice(0, 6);
    const listname = newSTAFFS.map((list) => {
      return (
        <div className="col-lg-4 col-md-6 col-12" id="row" key={list.id}>
          <div id="item-1">
            <p>{list.name}</p>
          </div>
        </div>
      );
    });

    return (
      <div id="wapper">
        {/*Tạo header của trang*/}
        <div id="header">
          <h3>Ứng dụng quản lý nhân sự v1.0</h3>
        </div>
        <div>{listname}</div>
      </div>
    );
  }
}

export default StaffList;

{
  /* 
function StaffList() { phiên bản 1.1
  return (
    <div id="wapper">
      
      <div id="header">
        <h3>Ứng dụng quản lý nhân sự v1.0</h3>
      </div>
      
      <div id="row">
        <div className="col-lg-4 col-md-6 col-12" id="item-1">
          <p>{STAFFS[0].name}</p>
        </div>

        <div className="col-lg-4 col-md-6 col-12">
          <p>{STAFFS[1].name}</p>
        </div>
        <div className="col-lg-4 col-md-6 col-12">
          <p>{STAFFS[2].name}</p>
        </div>
        <div className="col-lg-4 col-md-6 col-12">
          <p>{STAFFS[3].name}</p>
        </div>
        <div className="col-lg-4 col-md-6 col-12">
          <p>{STAFFS[4].name}</p>
        </div>
        <div className="col-lg-4 col-md-6 col-12">
          <p>{STAFFS[5].name}</p>
        </div>
      </div>
     
      <div id="detai" className="col-lg-4 col-md-6 col-12"></div>
    </div>
  );
}
export default StaffList;
*/
}
