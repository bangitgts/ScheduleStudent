/* eslint-disable react/no-typos */
/* eslint-disable no-useless-constructor */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/heading-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { SideBar } from "../../SideBar";

import { TopBar } from "../../TopBar";
class TableRoom extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }
  getAPI() {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch("http://localhost:3500/add-room", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        this.setState({
          data: result,
        });
      })
      .catch((error) => console.log("error", error));
  }
  componentDidMount() {
    this.getAPI();
  }

  render() {
    const { data } = this.state;
    const duLieu = data.map((data) => {
      return (
        <tr>
          <td>{data.nameRoom}</td>
          <td>{data.capacity}</td>
        </tr>
      );
    });
    return (
      <div>
        <div id="wrapper">
          {/* Sidebar */}
          <SideBar />
          {/* End of Sidebar */}
          {/* Content Wrapper */}
          <div id="content-wrapper" className="d-flex flex-column">
            {/* Main Content */}
            <div id="content">
              <TopBar />
              {/* Begin Page Content */}
              <div className="container-fluid">
                {/* Page Heading */}
                <h1 className="h3 mb-2 text-gray-800"></h1>
                {/* DataTales Example */}
                <div className="card shadow mb-4">
                  <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">
                      Thông Tin Các Phòng Học
                    </h6>
                  </div>
                  <div className="card-body">
                    <div className="table-responsive">
                      <table
                        className="table table-bordered"
                        id="dataTable"
                        width="100%"
                        cellSpacing={0}
                      >
                        <thead>
                          <tr>
                            <th>Tên Phòng Học</th>
                            <th>Sức Chứa</th>
                          </tr>
                        </thead>
                        <tbody>{duLieu}</tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <footer className="sticky-footer bg-white">
              <div className="container my-auto">
                <div className="copyright text-center my-auto">
                  <span>Copyright © Your Website 2020</span>
                </div>
              </div>
            </footer>
            {/* End of Footer */}
          </div>
          {/* End of Content Wrapper */}
        </div>
        {/* End of Page Wrapper */}
        {/* Scroll to Top Button*/}
        <a className="scroll-to-top rounded" href="#page-top">
          <i className="fas fa-angle-up" />
        </a>
        {/* Logout Modal*/}
        <div
          className="modal fade"
          id="logoutModal"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Ready to Leave?
                </h5>
                <button
                  className="close"
                  type="button"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                Select "Logout" below if you are ready to end your current
                session.
              </div>
              <div className="modal-footer">
                <button
                  className="btn btn-secondary"
                  type="button"
                  data-dismiss="modal"
                >
                  Cancel
                </button>
                <a className="btn btn-primary" href="login.html">
                  Logout
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export { TableRoom };
