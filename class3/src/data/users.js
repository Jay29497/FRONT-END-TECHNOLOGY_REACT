const users = [
    {
        id: 1,
        name: "Jay",
        email: "jay@gmail.com",
        age: 26,
        address: {
            city: "Bengaluru",
            pin: "560058",
        },
        bank: [
            {
                accNo: 12334,
                bName: "SBI",
                type: "Savings",
            },
            {
                accNo: 4334,
                bName: "HDFC",
                type: "current",
            },
        ],
    },
    {
        id: 2,
        name: "Anju",
        email: "anju@gmail.com",
        age: 26,
        address: {
            city: "Mysore",
            pin: "560090",
        },
        bank: [
            {
                accNo: 12335,
                bName: "BOI",
                type: "Savings",
            },
            {
                accNo: 4335,
                bName: "IB",
                type: "current",
            },
        ],
    },
];

export default users;