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
    };
    this.onSubmitForm = this.onSubmitForm.bind(this);
    this.onGetclass = this.onGetclass.bind(this);
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
    return (
      <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
        <div className="panel panel-danger">
          <div className="panel-heading panel-warning">
            <h3 className="panel-title">Thêm Học Viên</h3>
          </div>
          <div className="panel-body">
            <form onSubmit={this.onSubmitForm}>
              <div className="form-group">
                <label>Tên Học Viên:</label>
                <input
                  onChange={this.onGetclass}
                  type="text"
                  name="nameStudent"
                  className="form-control"
                  required="required"
                />
              </div>
              <div className="form-group">
                <label>Năm sinh:</label>
                <input
                  onChange={this.onGetclass}
                  type="date"
                  name="dateBirth"
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label>Số điện thoại:</label>
                <input
                  onChange={this.onGetclass}
                  type="number"
                  name="phoneNumber"
                  className="form-control"
                  required="required"
                />
              </div>
              <div className="form-group">
                <label>Tạo Tài Khoản Đăng Nhập</label>
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
              <label>Đăng Ký Khóa Học</label>
              <select
                onChange={this.onGetclass}
                name="khoaHoc"
                className="form-control"
                required="required"
              >
                <option value="Khóa 1">Khóa 1</option>
                <option value="Khóa 2">Khóa 2</option>
              </select>
              <br></br>

              <div className="text-center">
                <button type="submit" className="btn btn-warning">
                  Thêm
                </button>
                &nbsp;
                <button type="reset" className="btn btn-danger">
                  Hủy Bỏ
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
