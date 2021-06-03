/* eslint-disable no-undef */
var axios = require("axios");
var config = {
    method: "get",
    url: "http://localhost:3500/add-course",
    headers: {},
};

let b = function nhanDulieu(data) {
    return data;
}

function duLieu() {
    var course20 = [];
    var course30 = [];
    var course40 = [];
    axios(config)
        .then(function(response) {
            const result = response.data;
            // console.log(result)
            for (let item of result) {
                if (parseInt(item.amount) <= 20 && item.schedule === "3-5-7") {
                    let temp = {
                        nameCourse: item.nameCourse,
                        schedule: item.schedule,
                        thu: "le",
                    };
                    //   console.log(temp)
                    course20.push(temp);
                    nhanDulieu(course20);
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
        })
        .catch(function(error) {
            console.log(error);
        });

    console.log(course30);
}

// function getCourse() {
//     var requestOptions = {
//         method: "GET",
//         redirect: "follow",
//     };

//     fetch("http://localhost:3500/add-course", requestOptions)
//         .then((response) => response.json())
//         .then((result) => {
//             var course20 = [];
//             var course30 = [];
//             var course40 = [];

//             for (let item of result) {
//                 if (parseInt(item.amount) <= 20 && item.schedule === "3-5-7") {
//                     let temp = {
//                         nameCourse: item.nameCourse,
//                         schedule: item.schedule,
//                         thu: "le",
//                     };
//                     course20.push(temp);
//                 }
//                 if (parseInt(item.amount) <= 20 && item.schedule === "2-4-6") {
//                     let temp = {
//                         nameCourse: item.nameCourse,
//                         schedule: item.schedule,
//                         thu: "chan",
//                     };
//                     course20.push(temp);
//                 }
//                 if (
//                     parseInt(item.amount) > 20 &&
//                     parseInt(item.amount) <= 30 &&
//                     item.schedule === "3-5-7"
//                 ) {
//                     let temp = {
//                         nameCourse: item.nameCourse,
//                         schedule: item.schedule,
//                         thu: "le",
//                     };
//                     course30.push(temp);
//                 }
//                 if (
//                     parseInt(item.amount) > 20 &&
//                     parseInt(item.amount) <= 30 &&
//                     item.schedule === "2-4-6"
//                 ) {
//                     let temp = {
//                         nameCourse: item.nameCourse,
//                         schedule: item.schedule,
//                         thu: "chan",
//                     };
//                     course30.push(temp);
//                 }
//                 if (parseInt(item.amount) > 30 && item.schedule === "3-5-7") {
//                     let temp = {
//                         nameCourse: item.nameCourse,
//                         schedule: item.schedule,
//                         thu: "le",
//                     };
//                     course40.push(temp);
//                 }
//                 if (parseInt(item.amount) > 30 && item.schedule === "2-4-6") {
//                     let temp = {
//                         nameCourse: item.nameCourse,
//                         schedule: item.schedule,
//                         thu: "chan",
//                     };
//                     course40.push(temp);
//                 }
//             }
//         })
//         .catch((error) => console.log("error", error));

//     console.log(courses20);
// }

function getRoom() {
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

duLieu();
console.log(b);