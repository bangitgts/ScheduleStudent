import React from "react";

class AddRoom extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nameRoom: "",
      capacity: "", // khai giang hay chua
    };
    this.onSubmitForm = this.onSubmitForm.bind(this);
    this.onGetclass = this.onGetclass.bind(this);
  }
  onSubmitForm(event) {
    var axios = require("axios");
    var qs = require("qs");
    var data = qs.stringify({
      nameRoom: this.state.nameRoom,
      capacity: this.state.capacity,
    });
    var config = {
      method: "post",
      url: "http://localhost:3500/add-room",
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
            <h3 className="panel-title">Thêm Phòng</h3>
          </div>
          <div className="panel-body">
            <form onSubmit={this.onSubmitForm}>
              <div className="form-group">
                <label>Tên Phòng:</label>
                <input
                  onChange={this.onGetclass}
                  type="text"
                  name="nameRoom"
                  className="form-control"
                />
              </div>
              <label>Sức chứa</label>
              <select
                onChange={this.onGetclass}
                name="capacity"
                className="form-control"
                required="required"
              >
                <option value="1">Phòng 20</option>
                <option value="2">Phòng 30</option>
                <option value="3">Phòng 40</option>
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

export { AddRoom };
