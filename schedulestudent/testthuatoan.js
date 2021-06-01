const cousres = [20, 30, 40];
const room = ["C20", "C20", "C30", "C40"];

const courses20 = [{
        khoa: "CSDL1",
        thu: "le"
    },
    {
        khoa: "CSDL1",
        thu: "chan"
    },

    {
        khoa: "CSDL2",
        thu: "le"
    },

    {
        khoa: "CSDL2",
        thu: "chan"
    },

];

const room20 = [{
        id: "PO1chan",
        thu: "chan",
        lop: [1],
    },
    {
        id: "PO1le",
        thu: "le",
        lop: [],
    },
    {
        id: "PO2chan",
        thu: "chan",
        lop: [],
    },
    {
        id: "PO2le",
        thu: "le",
        lop: [],
    },
];
// for (let item of room20) {
//     for (let lop of courses20) {
//         if (lop.thu === item.thu && item.lop.length === 0) {
//             let a = item.lop.push(lop.khoa);
//             console.log(a);
//             break;
//         }
//     }
// if (courses20[0].thu === item.thu && item.lop.length === 0) {
//     item.lop.push(courses20[0].khoa);
//     console.log(item)
//     break;
// }



//const alligator = ["thick scales", 80, "4 foot tail", "rounded snout"];

// const b = room20.find(el => el.lop.length === 0); // returns '4 foot tail'

// console.log(b)
// console.log(room20);
// for (let item of courses20) {
//     const b = room20.find(el => el.lop.length === 0);
//     try {
//         if (b.length !== 0 && (item.thu === b.thu)) {
//             b.lop.push(item);
//         }
//         console.log(b)
//     } catch (error) {
//         console.log("da tran")
//     }
// }

function XepLop(room, course) {
    let temp = []
    for (let item of course) {

        const b = room.find(el => el.lop.length === 0);
        try {
            if (b.length !== 0 && (item.thu === b.thu)) {
                b.lop.push(item);
                temp.push(JSON.stringify(b));
            }
        } catch (error) {
            console.log("da tran")
        }
    }
    console.log(temp)
}
XepLop(room20, courses20);