import { Component } from "react";

class SortClass extends Component {
  render() {
    return (
      <div>
        <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
          <button type="button" className="btn btn-primary">
            Nhấn để sắp xếp lịch học
          </button>
        </div>
        <br />
        <br />
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <table className="table table-bordered table-hover">
            <thead>
              <tr>
                <th className="text-center">Lớp</th>
                <th className="text-center">Thứ 2</th>
                <th className="text-center">Thứ 3</th>
                <th className="text-center">Thứ 4</th>
                <th className="text-center">Thứ 5</th>
                <th className="text-center">Thứ 6</th>
                <th className="text-center">Thứ 7</th>
                <th className="text-center">Chủ nhật</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="text-center">2</td>
                <td className="text-center">Học lập trình</td>
                <td className="text-center">x</td>
                <td className="text-center">x</td>
                <td className="text-center">x</td>
                <td className="text-center">x</td>
                <td className="text-center">x</td>
                <td className="text-center">x</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
export default SortClass
