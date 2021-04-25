import { Component } from 'react';
import AddClass from './component/AddClass';
import ShowClass from './component/ShowClass';
import SortClass from './component/SortClass';

class App extends Component{
  render(){
    return(
      <div className="container">
        <AddClass/>
        <ShowClass/>
        <SortClass/>
      </div>
    )
  }
}
export default App