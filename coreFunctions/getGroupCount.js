const Group = require('../models/group')

const getGroupCount = ({
    filter = null,
    res = null
}) => {

    console.log(filter);

    Group.find(filter)
        .then(result => {
            if (result === null) {
                const returnData = {
                    "status": 500,
                    "message": 'No groups found',
                    "data": { count: 0 }
                }
                res && res.json(returnData)
                return returnData
            } else {
                const returnData = {
                    "status": 200,
                    "message": null,
                    "data": { count: result.length }
                }
                res && res.json(returnData)
                return returnData
            }
        })
}

module.exports = getGroupCount