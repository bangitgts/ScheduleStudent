import { Component } from "react";

class ShowClass extends Component {
  render() {
    return (
      <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
        <div className="row mt-15">
          <h3 className="text-center">Danh Sách Lớp Học</h3>
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <table className="table table-bordered table-hover">
              <thead>
                <tr>
                  <th className="text-center">STT</th>
                  <th className="text-center">Tên lớp học</th>
                  <th className="text-center">Số lượng đã đăng ký</th>
                  <th className="text-center">Lịch học</th>
                  <th className="text-center">Phòng học</th>
                  <th className="text-center">Trạng thái</th>
                </tr>
              </thead>
              <tbody>
                {/* <tr>
                                    <td></td>
                                    <td>
                                        <input type="text" class="form-control" />
                                    </td>
                                    <td>
                                        <select class="form-control">
                                            <option value="-1">Tất Cả</option>
                                            <option value="0">Ẩn</option>
                                            <option value="1">Kích Hoạt</option>
                                        </select>
                                    </td>
                                    <td></td>
                                </tr> */}
                <tr>
                  <td>1</td>
                  <td>Học lập trình</td>
                  <td>45</td>
                  <td>2-4-6</td>
                  <td>5</td>
                  <td className="text-center">
                    <span className="label label-success">Đang giảng dạy</span>
                  </td>
                  <td className="text-center">
                    <button type="button" className="btn btn-danger">
                      <span className="fa fa-pencil" />
                      Xóa
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
export default ShowClass