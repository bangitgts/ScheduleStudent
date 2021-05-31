import { Component } from "react";

class ShowClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: true,
    };
    this.activeAddclass = this.activeAddclass.bind(this);
  }
  activeAddclass() {
    if (this.state.isActive === true) {
      this.setState({
        isActive: false,
      });
    } else {
      this.setState({
        isActive: true,
      });
    }
    //console.log(this.state.isActive)
  }
  render() {
    //const isActiveadd = this.state.activeAddclass
    const elementClass = this.props.onRecevieData.map((item, index) => {
      return (
        <tr key={++index}>
          <td>{++index}</td>
          <td>{item.nameClass}</td>
          <td>{item.amountMember}</td>
          <td>fake</td>
          <td>{item.isActive}</td>
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
      );
    });
    return (
      <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
        <div className="row mt-15">
          <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
            <button
              onClick={this.activeAddclass}
              type="button"
              className="btn btn-default"
            >
              Thêm học sinh
            </button>
          </div>

          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <h3 className="text-center">Danh Sách Lớp Học</h3>
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
              <tbody>{elementClass}</tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
export default ShowClass;
