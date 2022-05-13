import React, { Component } from "react";
import { STAFFS } from "./shared/staffs";
import "./StaffList.css";

function StaffList() {
  function memberinfo() {
    return <p>123</p>;
  }

  return (
    <div id="wapper">
      {/*Tạo top của trang*/}
      <div id="header">
        <h3>Ứng dụng quản lý nhân sự v1.0</h3>
      </div>
      {/*hiển thị list nhân viên*/}
      <div id="row">
        <div className="col-lg-4 col-md-6 col-12" id="item-1">
          <p onClick={() => memberInfo()}>{STAFFS[0].name}</p>
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
      {/*Hiển thị thông tin chi tiết*/}
      <div id="detai" className="col-lg-4 col-md-6 col-12">
        <memberInfo />
        <p>
          <strong id="name"></strong>
        </p>
        <p id="birth"></p>
        <p id="date"></p>
        <p id="division"></p>
        <p id="date1"></p>
        <p id="date2"></p>
      </div>
    </div>
  );
}
export default StaffList;
