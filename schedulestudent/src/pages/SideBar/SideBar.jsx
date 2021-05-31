/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import { Link } from "react-router-dom";
class SideBar extends React.Component {
  render() {
    return (
      <ul
        className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
        id="accordionSidebar"
      >
        {/* Sidebar - Brand */}
        <a
          className="sidebar-brand d-flex align-items-center justify-content-center"
          href="index.html"
        >
          <div className="sidebar-brand-icon rotate-n-15">
            <i className="fas fa-laugh-wink" />
          </div>
          <div className="sidebar-brand-text mx-3">Quản lí Trung Tâm</div>
        </a>
        {/* Divider */}
        <hr className="sidebar-divider my-0" />
        {/* Nav Item - Dashboard */}
        <li className="nav-item">
          <a className="nav-link" href="index.html">
            <i className="fas fa-fw fa-tachometer-alt" />
            <span>Dashboard</span>
          </a>
        </li>
        {/* Divider */}
        <hr className="sidebar-divider" />
        {/* Heading */}
        <div className="sidebar-heading">Interface</div>
        {/* Nav Item - Pages Collapse Menu */}
        <li className="nav-item">
          <a
            className="nav-link collapsed"
            href="#"
            data-toggle="collapse"
            data-target="#collapseTwo"
            aria-expanded="true"
            aria-controls="collapseTwo"
          >
            <i className="fas fa-fw fa-cog" />
            <span>Quản lí</span>
          </a>
          <div
            id="collapseTwo"
            className="collapse"
            aria-labelledby="headingTwo"
            data-parent="#accordionSidebar"
          >
            <div className="bg-white py-2 collapse-inner rounded">
              <h6 className="collapse-header">Tùy chỉnh:</h6>
              <Link className="collapse-item" to="/add-student">
                Thêm Học Viên
              </Link>
              <Link></Link>
              <Link className="collapse-item" to="/add-course">
                Thêm Khóa Học
              </Link>
              <Link></Link>
              <Link className="collapse-item" to="/add-room">
                Thêm Phòng Học
              </Link>
              <Link></Link>
            </div>
          </div>
        </li>

        {/* Nav Item - Pages Collapse Menu */}
        <li className="nav-item">
          <a
            className="nav-link collapsed"
            href="#"
            data-toggle="collapse"
            data-target="#collapsePages"
            aria-expanded="true"
            aria-controls="collapsePages"
          >
            <i className="fas fa-fw fa-folder" />
            <span>Thông tin</span>
          </a>
          <div
            id="collapsePages"
            className="collapse"
            aria-labelledby="headingPages"
            data-parent="#accordionSidebar"
          >
            <div className="bg-white py-2 collapse-inner rounded">
              <Link className="collapse-item" to="/add-student">
                Danh Sách Học Viên
              </Link>
              <Link></Link>
              <Link className="collapse-item" to="/add-course">
                Danh Sách Khóa Học
              </Link>
              <Link></Link>
              <Link className="collapse-item" to="/add-room">
                Danh Sách Phòng Học
              </Link>
              <Link></Link>
            </div>
          </div>
        </li>
      </ul>
    );
  }
}

export { SideBar };
