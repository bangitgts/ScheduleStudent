import React, { Component } from "react";

class XepLichHoc extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cousres: {
        cousres20: [
          {
            khoa: "CSDL1",
            thu: "chan",
          },
        ],
        cousres30: [
          {
            khoa: "CSDL1",
            thu: "chan",
          },
        ],
        cousres40: [
          {
            khoa: "CSDL1",
            thu: "chan",
          },
        ],
      },

      romms: {
        room20: [
          {
            roomName: [],
            thuChan: [],
            thuLe: [],
          },
        ],

        room30: [
          {
            roomName: [],
            thuChan: [],
            thuLe: [],
          },
        ],
        room40: [
          {
            roomName: [],
            thuChan: [],
            thuLe: [],
          },
        ],
      },
    };
  }

  getCourse() {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch("http://localhost:3500/add-course", requestOptions)
      .then((response) => response.json())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  }
  getRoom() {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch("http://localhost:3500/add-room", requestOptions)
      .then((response) => response.json())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  }
  XepLop(room, course) {
    let temp = [];
    for (let item of course) {
      const b = room.find((el) => el.lop.length === 0);
      try {
        if (b.length !== 0 && item.thu === b.thu) {
          b.lop.push(item);
          temp.push(JSON.stringify(b));
          console.log(item);
        }
      } catch (error) {
        console.log("da tran");
        console.log(item);
      }
    }
    console.log(temp);
    //console.log(course30)
  }
  componentDidMount() {
    this.getCourse();
    this.getRoom();
  }

  render() {
    return <h2>asklklas</h2>;
  }
}
export { XepLichHoc };
