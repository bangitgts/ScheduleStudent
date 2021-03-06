/* eslint-disable array-callback-return */
/* eslint-disable no-const-assign */
import React from "react";
var axios = require("axios");
var qs = require("qs");

class AddStudent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nameStudent: "",
      dateBirth: "",
      phoneNumber: "",
      userName: "",
      passWord: "",
      khoaHoc: "",
      fetchCourse: [],
    };
    this.onSubmitForm = this.onSubmitForm.bind(this);
    this.onGetclass = this.onGetclass.bind(this);
  }

  getAPI() {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch("http://localhost:3500/add-course", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        this.setState({
          fetchCourse: result,
        });
      })
      .catch((error) => console.log("error", error));
  }
  componentDidMount() {
    this.getAPI();
  }
  changeDangky() {
    
    const { fetchCourse } = this.state;

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

    var urlencoded = new URLSearchParams();
    urlencoded.append("nameCourse", this.state.khoaHoc);
    urlencoded.append("daDangki", "asask");

    var requestOptions = {
      method: "PUT",
      headers: myHeaders,
      body: urlencoded,
      redirect: "follow",
    };

    fetch("http://localhost:3500/change-dadangki", requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  }
  onSubmitForm(event) {
    var data = qs.stringify({
      nameStudent: this.state.nameStudent,
      dateBirth: this.state.dateBirth,
      phoneNumber: this.state.phoneNumber,
      userName: this.state.userName,
      passWord: this.state.passWord,
      khoaHoc: this.state.khoaHoc,
    });
    var config = {
      method: "post",
      url: "http://localhost:3500/add-student",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        alert(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });

    this.changeDangky();
    event.preventDefault();
  }
  onHandel(event) {
    console.log(event);
  }
  onGetclass(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    let name = target.name;
    this.setState({
      [name]: value,
    });
  }
  render() {
    const { fetchCourse } = this.state;
    let nameCourse = fetchCourse.map((data) => {
      return <option value={data.nameCourse}>{data.nameCourse}</option>;
    });
    return (
      <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
        <div className="panel panel-danger">
          <div className="panel-heading panel-warning">
            <h3 className="panel-title">Th??m H???c Vi??n</h3>
          </div>
          <div className="panel-body">
            <form onSubmit={this.onSubmitForm}>
              <div className="form-group">
                <label>T??n H???c Vi??n:</label>
                <input
                  onChange={this.onGetclass}
                  type="text"
                  name="nameStudent"
                  className="form-control"
                  required="required"
                />
              </div>
              <div className="form-group">
                <label>N??m sinh:</label>
                <input
                  onChange={this.onGetclass}
                  type="date"
                  name="dateBirth"
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label>S??? ??i???n tho???i:</label>
                <input
                  onChange={this.onGetclass}
                  type="number"
                  name="phoneNumber"
                  className="form-control"
                  required="required"
                />
              </div>
              <div className="form-group">
                <label>T???o T??i Kho???n ????ng Nh???p</label>
                <input
                  onChange={this.onGetclass}
                  type="text"
                  name="userName"
                  className="form-control"
                  required="required"
                />
              </div>
              <div className="form-group">
                <label>Password</label>
                <input
                  onChange={this.onGetclass}
                  type="password"
                  name="passWord"
                  className="form-control"
                  required="required"
                />
              </div>
              <label>????ng K?? Kh??a H???c</label>
              <select
                onChange={this.onGetclass}
                name="khoaHoc"
                className="form-control"
                required="required"
              >
                {/* <option value="Kh??a 1">Kh??a 1</option>
                <option value="Kh??a 2">Kh??a 2</option> */}
                {nameCourse}
              </select>
              <br></br>

              <div className="text-center">
                <button type="submit" className="btn btn-warning">
                  Th??m
                </button>
                &nbsp;
                <button type="reset" className="btn btn-danger">
                  H???y B???
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export { AddStudent };
