/* eslint-disable no-lone-blocks */
import React from "react";
import dulieuc from "../../dulieu";
import { courses20, room20 } from "../../testthuatoan";

class XepLichHoc extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      course20: [],
      course30: [],
      course40: [],
      room20: [],
      room30: [],
      room40: [],
    };
    this.data = [];
    var temp = []
    for (let item of this.state.course20) {

        const b = this.state.room20.find(el => el.lop.length === 0);
        console.log("day la b" + JSON.stringify(b));
        try {
            if ((b.length !== 0) && (item.thu === b.thu)) {
                b.lop.push(item);
                temp.push(JSON.stringify(b));
                //  console.log(item)
            }
        } catch (error) {
            // console.log("da tran");
            // console.log(item);
           // course30.push(item) // du lieu con du 
        }
    }
 
  }


  getCourse() {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch("http://localhost:3500/add-course", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        var course20 = [];
        var course30 = [];
        var course40 = [];

        for (let item of result) {
          if (parseInt(item.amount) <= 20 && item.schedule === "3-5-7") {
            let temp = {
              nameCourse: item.nameCourse,
              schedule: item.schedule,
              thu: "le",
            };
            course20.push(temp);
          }
          if (parseInt(item.amount) <= 20 && item.schedule === "2-4-6") {
            let temp = {
              nameCourse: item.nameCourse,
              schedule: item.schedule,
              thu: "chan",
            };
            course20.push(temp);
          }
          if (
            parseInt(item.amount) > 20 &&
            parseInt(item.amount) <= 30 &&
            item.schedule === "3-5-7"
          ) {
            let temp = {
              nameCourse: item.nameCourse,
              schedule: item.schedule,
              thu: "le",
            };
            course30.push(temp);
          }
          if (
            parseInt(item.amount) > 20 &&
            parseInt(item.amount) <= 30 &&
            item.schedule === "2-4-6"
          ) {
            let temp = {
              nameCourse: item.nameCourse,
              schedule: item.schedule,
              thu: "chan",
            };
            course30.push(temp);
          }
          if (parseInt(item.amount) > 30 && item.schedule === "3-5-7") {
            let temp = {
              nameCourse: item.nameCourse,
              schedule: item.schedule,
              thu: "le",
            };
            course40.push(temp);
          }
          if (parseInt(item.amount) > 30 && item.schedule === "2-4-6") {
            let temp = {
              nameCourse: item.nameCourse,
              schedule: item.schedule,
              thu: "chan",
            };
            course40.push(temp);
          }
        }

        this.setState({
          course20: course20,
          course30: course30,
          course40: course40,
        });
      })
      .catch((error) => console.log("error", error));
  }
  getRoom() {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch("http://localhost:3500/add-room", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        var room20 = [];
        var room30 = [];
        var room40 = [];

        for (let item of result) {
          if (item.capacity === "1") {
            let temp = {
              nameRoom: item.nameRoom,
              capacity: item.capacity,
              thu: "chan",
              lop: [],
            };
            room20.push(temp);
          }
          if (item.capacity === "2") {
            let temp = {
              nameRoom: item.nameRoom,
              capacity: item.capacity,
              thuchan: "chan",
              lop: [],
              // se add so, gia lap 0: hoc 2-4-6, 1 hoc 357, 2 = hoc full
            };
            room30.push(temp);
          }
          if (item.capacity === "3") {
            let temp = {
              nameRoom: item.nameRoom,
              capacity: item.capacity,
              thuchan: "chan",
              lop: [],
            };
            room40.push(temp);
          }
        }

        for (let item of result) {
          if (item.capacity === "1") {
            let temp = {
              nameRoom: item.nameRoom,
              capacity: item.capacity,
              thu: "le",
              lop: [],
            };
            room20.push(temp);
          }
          if (item.capacity === "2") {
            let temp = {
              nameRoom: item.nameRoom,
              capacity: item.capacity,
              thuchan: "le",
              lop: [],
              // se add so, gia lap 0: hoc 2-4-6, 1 hoc 357, 2 = hoc full
            };
            room30.push(temp);
          }
          if (item.capacity === "3") {
            let temp = {
              nameRoom: item.nameRoom,
              capacity: item.capacity,
              thuchan: "le",
              lop: [],
            };
            room40.push(temp);
          }
        }
        this.setState({
          room20: room20,
          room30: room30,
          room40: room40,
        });
      })
      .catch((error) => console.log("error", error));
  }
  // XepLop(room, course) {
  //   let temp = [];
  //   for (let item of course) {
  //     const b = room.find((el) => el.lop.length === 0);
  //     console.log("day la b" + JSON.stringify(b));
  //     try {
  //       if (b.length !== 0 && item.thu === b.thu) {
  //         b.lop.push(item);
  //         temp.push(JSON.stringify(b));
  //          console.log(item)
  //       }
  //     } catch (error) {
  //       console.log("da tran");
  //       console.log(item);
  //        course30.push(item) // du lieu con du
  //     }
  //   }
  //   console.log(temp)
  //   console.log(course30)
  // }

  SortLop(rooms, course) {
    let temp = [];
    const room = rooms;
    console.log("tong rong" + room);
    for (let item of course) {
      const b = room.find((el) => el.lop.length === 0);
      //console.log("day la b" + JSON.stringify(b));
      let c = b;
      try {
        if (b.length !== 0 && item.thu === b.thu) {
          // let c =  c.lop.push(item);
          // temp.push(JSON.stringify(c));
          // console.log(item);
          console.log(item);
        }
      } catch (error) {
        // console.log("da tran");
        // console.log(item);
        //course30.push(item); // du lieu con du
      }
    }
    console.log("day la " + temp);
    console.log("room" + JSON.stringify(room));
  }

  componentWillMount() {
    this.getCourse();
    this.getRoom();
  }

  componentDidUpdate() {
    console.log("Component did update!");
    
  }
  abc() {
    console.log("anc");
  }
  render() {
    console.log("day la temp" + this.temp)
    return (
      <button
        onClick={
          () => {
            let temp = []
            for (let item of this.state.course20) {
                const b = this.state.room20.find(el => el.lop.length === 0);
                console.log("day la b" + b);
               
                try {
                    if ((b.length !== 0) && (item.thu === b.thu)) {
                        b.lop.push(item);
                        temp.push(b);
                        //  console.log(item)
                    }
                } catch (error) {
                    console.log("da tran");
                    console.log(item);
                    // course30.push(item) // du lieu con du 
                }
            }
            // console.log(temp)
            // console.log(course30)
            console.log(temp);
        }
        }
        type="button"
        class="btn btn-info"
      >
        button
      </button>
    );
  }
}
export { XepLichHoc };
