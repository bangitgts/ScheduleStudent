const courses20 = [{
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
    {
        khoa: "CSDL1a",
        thu: "le"
    },
    {
        khoa: "CSDL1",
        thu: "le"
    },
    {
        khoa: "CSDL3",
        thu: "chan"
    },
];

const room20 = [{
        id: "PO1chan",
        thu: "chan",
        lop: [],
    },
    {
        id: "PO1le",
        thu: "le",
        lop: [],
    },
    {
        id: "PO2chan",
        thu: "chan",
        lop: ["ASJKASJK"],
    },
    {
        id: "PO2le",
        thu: "le",
        lop: [],
    },
];

function XepLop(room, course) {
    let temp = []
    for (let item of course) {
        const b = room.find(el => el.lop.length === 0);
        console.log("day la b" + JSON.stringify(b));
        try {
            if ((b.length !== 0) && (item.thu === b.thu)) {
                b.lop.push(item);
                temp.push(b);
            }
        } catch (error) {
            console.log("da tran");
            console.log(item);
        }
    }
    // console.log(temp)
    // console.log(course30)
    console.log(temp);
}

XepLop(room20, courses20);