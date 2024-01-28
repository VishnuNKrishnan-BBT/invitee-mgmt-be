const Guest = require('../models/guest')

const getGuests = ({
    filter = null,
    res = null
}) => {

    Guest.find(filter)
        .then(result => {
            if (result === null) {
                const returnData = {
                    "status": 500,
                    "message": 'No guests found',
                    "data": []
                }
                res && res.json(returnData)
                return returnData
            } else {
                const returnData = {
                    "status": 200,
                    "message": null,
                    "data": result.sort((a, b) => a.name.localeCompare(b.name))
                }
                res && res.json(returnData)
                return returnData
            }
        })
}

module.exports = getGuests