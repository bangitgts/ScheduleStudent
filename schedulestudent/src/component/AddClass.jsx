import React, { Component } from "react";
class AddClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nameClass: "",
      isActive: "",
      roomClass: "",
      scheduleClass: "",
      amountMember: "",
    };
    this.onSubmitForm = this.onSubmitForm.bind(this);
    this.onGetclass = this.onGetclass.bind(this);
  }
  onSubmitForm(event) {
    this.props.onGetData(this.state);
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
      <div>
        <div className="text-center">
          <h1>Sắp xếp lịch học</h1>
          <hr />
        </div>
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <div className="panel panel-danger">
              <div className="panel-heading panel-warning">
                <h3 className="panel-title">Thêm lớp học</h3>
              </div>
              <div className="panel-body">
                <form onSubmit={this.onSubmitForm}>
                  <div className="form-group">
                    <label>Tên lớp :</label>
                    <input
                      onChange={this.onGetclass}
                      type="text"
                      name="nameClass"
                      className="form-control"
                    />
                  </div>
                  <label>Trạng thái</label>
                  <select
                   value={this.state.isActive}
                   onChange={this.onGetclass}
                   name="isActive"
                   className="form-control" 
                   required="required"
                  >
                     <option value='1'>Khai giảng</option>
                     <option value='0'>Chưa khai giảng</option>
                  </select>
                  <br></br>
                  <label>Lựa chọn phòng học:</label>
                  <select
                    value = {this.state.roomClass}
                    onChange={this.onGetclass}
                    name="roomClass"
                    className="form-control"
                    required="required"
                  >
                    <option value={"1"}>Phòng 20 người</option>
                    <option value={"0"}>Phòng 30 người</option>
                    <option value={"-1"}>Phòng 40 người </option>
                  </select>
                  <br />
                  <label>Lịch học trong tuần:</label>
                  <select
                    value = {this.state.scheduleClass}
                    onChange={this.onGetclass}
                    name="scheduleClass"
                    className="form-control"
                    required="required"
                  >
                    <option value={1}>Thứ 2 - Thứ 4 - Thứ 6</option>
                    <option value={0}>Thứ 3 - Thứ 5 - Thứ 7</option>
                    <option value={-1}>Lịch full tuần</option>
                  </select>
                  <br />
                  <label>Số lượng học viên đã đăng ký:</label>
                  <input
                    value={this.state.amountMember}
                    onChange={this.onGetclass}
                    name="amountMember"
                    type="number"
                    className="form-control"
                  />
                  <br />
                  <div className="text-center">
                    <button type="submit" className="btn btn-warning">
                      Thêm
                    </button>
                    &nbsp;
                    <button type="reset " className="btn btn-danger">
                      Hủy Bỏ
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default AddClass;
