import React,{ Component } from 'react';
import AddClass from './component/AddClass.jsx';
import ShowClass from './component/ShowClass.jsx';
import SortClass from './component/SortClass.jsx';

class App extends Component{
  constructor(props){
    super(props);
    this.state={
      dataID: [
        {
          
        }
      ]
    }
  }
  onRecevie = (prams) => {
    const dataID = this.state.dataID;
    dataID.push(prams);
    this.setState(dataID);
    console.log(this.state.dataID)
  }
  render(){
    return(
      <div className="container">
          <AddClass onGetData={this.onRecevie}/>
          <ShowClass onRecevieData={this.state.dataID}/>
          <SortClass/>
      </div>
    )
  }
}
export default App