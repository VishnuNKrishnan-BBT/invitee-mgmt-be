const Group = require('../models/group')

const getGroups = ({
    res
}) => {

    Group.find({})
        .then(result => {
            if (result === null) {
                res.json({ "status": 500, "message": 'No groups created', data: [] })
            } else {
                let data = []
                result.forEach(obj => {
                    data.push(obj.groupName)
                })
                data = data.sort()
                res.json({ "status": 200, "message": null, "data": data, count: data.length })
            }
        })
}

module.exports = getGroups