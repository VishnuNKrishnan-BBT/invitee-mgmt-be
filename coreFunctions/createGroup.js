const Group = require('../models/group')

const createGroup = ({
    groupName,
    res
}) => {

    Group.findOne({ groupName: groupName })
        .then(result => {
            if (result !== null) { //If license plate already exists
                res.json({ "status": 500, "message": `${groupName} already exists!` })
            } else { //If license plate does not exist
                const newGroup = new Group({
                    groupName: groupName
                })

                newGroup.save()
                res.json({ "status": 200, "message": `${groupName} added successfully!` })
            }
        })
}

module.exports = createGroup