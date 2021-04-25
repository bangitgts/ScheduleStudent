import React, { Component } from "react";
class AddClass extends Component {
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
                <form>
                  <div className="form-group">
                    <label>Tên lớp :</label>
                    <input type="text" className="form-control" />
                  </div>
                  <label>Trạng thái</label>
                  <select className="form-control" required="required">
                    <option value={1}>Khai giảng</option>
                    <option value={0}>Chưa khai giảng</option>
                  </select>
                  <br />
                  <label>Lựa chọn phòng học:</label>
                  <select className="form-control" required="required">
                    <option value={1}>Phòng 20 người</option>
                    <option value={0}>Phòng 30 người</option>
                    <option value={-1}>Phòng 40 người </option>
                  </select>
                  <br />
                  <label>Lịch học trong tuần:</label>
                  <select className="form-control" required="required">
                    <option value={1}>Thứ 2 - Thứ 4 - Thứ 6</option>
                    <option value={0}>Thứ 3 - Thứ 5 - Thứ 7</option>
                    <option value={-1}>Lịch full tuần</option>
                  </select>
                  <br />
                  <label>Số lượng học viên đã đăng ký:</label>
                  <input type="number" className="form-control" />
                  <br />
                  <div className="text-center">
                    <button type="submit" className="btn btn-warning">Thêm</button>&nbsp;
                    <button type="submit" className="btn btn-danger">Hủy Bỏ</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div></div>
      
    );
  }
}
export default AddClass;
