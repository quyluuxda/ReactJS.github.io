const uuidv4 = require('uuid/v4');
let items = [
    {
        id: uuidv4(),
        name: "Hoc HTML",
        level: 1
    },
    {
        id: uuidv4(),
        name: "Hoc CSS",
        level: 0
    },
    {
        id: uuidv4(),
        name: "Hoc Javascript",
        level: 2
    },
]

export default items;