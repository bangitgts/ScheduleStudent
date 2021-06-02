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
        khoa: "CSDL1",
        thu: "le"
    },
    {
        khoa: "CSDL3",
        thu: "chan"
    },
];
const course30 = [


]
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
        lop: [],
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
        try {
            if ((b.length !== 0) && (item.thu === b.thu)) {
                b.lop.push(item);
                temp.push(JSON.stringify(b));
                console.log(item)
            }
        } catch (error) {
            console.log("da tran");
            console.log(item);
            course30.push(item) // du lieu con du 
        }
    }
    console.log(temp)
    console.log(course30)
}

XepLop(room20, courses20);