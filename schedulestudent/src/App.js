import React, { Component } from "react";
import AddClass from "./component/AddClass.jsx";
import ShowClass from "./component/ShowClass.jsx";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataID: [],
    };
  }
  onRecevie = (prams) => {
    const dataID = this.state.dataID;
    dataID.push(prams);
    this.setState(dataID);
    console.log(this.state.dataID);
  };
  render() {
    return (
      <div className="container">
        <div className="row">
          <AddClass />
          <ShowClass onRecevieData={[1,2,3,4]} />
          </div>
      </div>
    );
  }
}
export default App;
