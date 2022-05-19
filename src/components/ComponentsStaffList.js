import React, { Component } from "react";
import { STAFFS } from "./shared/staffs";
import Memberinfo from "./ComponentsMemberinfo";
import "./StaffList.css";

class StaffList extends Component {
  constructor(props) {
    super(props);

    this.state = { status: null };
  }
  memberSelected(list) {
    return this.setState({ status: list });
  }

  render() {
    if (this.state.status != null) {
      var iSuccess = (
        <Memberinfo
          name={this.state.status.name}
          doB={this.state.status.doB}
          startDate={this.state.status.startDate}
          department={this.state.status.department.name}
          annualLeave={this.state.status.annualLeave}
          overTime={this.state.status.overTime}
        />
      );
    } else {
      iSuccess = "Bấm vào tên nhân viên để hiện ra thông tin chi tiết";
    }
    const newSTAFFS = STAFFS.slice(0, 6);
    var listname = newSTAFFS.map((list) => {
      return (
        <div
          className="col-lg-4 col-md-6 col-12"
          id="row"
          onClick={() => this.memberSelected(list)}
        >
          <p>{list.name}</p>
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
        <div className="info">
          <div>{iSuccess}</div>
        </div>
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
