import React from "react";

class AddCourse extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nameCourse: "",
      schedule: "",
      during: "",
      isActive: false, // khai giang hay chua
    };
    this.onSubmitForm = this.onSubmitForm.bind(this);
    this.onGetclass = this.onGetclass.bind(this);
  }
  onSubmitForm(event) {
    var axios = require("axios");
    var qs = require("qs");
    var data = qs.stringify({
      nameCourse: this.state.nameCourse,
      schedule: this.state.schedule,
      during: this.state.during,
      isActive: this.state.isActive,
    });
    var config = {
      method: "post",
      url: "http://localhost:3500/add-course",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
       // console.log(JSON.stringify(response.data));
        alert(JSON.stringify(response.data))
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
            <h3 className="panel-title">Thêm Khóa Học</h3>
          </div>
          <div className="panel-body">
            <form onSubmit={this.onSubmitForm}>
              <div className="form-group">
                <label>Tên Khóa học:</label>
                <input
                  onChange={this.onGetclass}
                  type="text"
                  name="nameCourse"
                  className="form-control"
                />
              </div>
              <label>Lịch học</label>
              <select
                onChange={this.onGetclass}
                name="schedule"
                className="form-control"
                required="required"
              >
                <option value="1">Thứ 2 - 4 - 6 </option>
                <option value="2">Thứ 3 - 5 - 7</option>
                <option value="3">Full Tuần</option>
              </select>

              <label>Thời gian học</label>
              <select
                onChange={this.onGetclass}
                name="during"
                className="form-control"
                required="required"
              >
                <option value="1">Trong 2 Tuần</option>
                <option value="2">Trong 3 Tuần</option>
                <option value="3">Trong 4 Tuần</option>
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

export { AddCourse };
