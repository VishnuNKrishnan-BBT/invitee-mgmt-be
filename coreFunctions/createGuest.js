const Guest = require('../models/guest')

const createGuest = ({
    guestId = null,
    name = '',
    companions = '',
    origin = '',
    group = '',
    priority = 2,
    invited = false,
    attendance = 'unsure',
    notes = '',
    res
}) => {

    if (guestId === null) {
        res.json({ "status": 400, "message": `Guest ID is mandatory!` })
        return
    }

    const newGuest = new Guest({
        guestId: guestId,
        name: name,
        companions: companions,
        origin: origin,
        group: group,
        priority: priority,
        invited: invited,
        attendance: attendance,
        notes: notes
    })

    newGuest.save()
    res.json({ "status": 200, "message": `${name} added successfully!` })
    return
}


module.exports = createGuest