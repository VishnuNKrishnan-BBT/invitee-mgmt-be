const Guest = require('../models/guest')

const getGuestCount = ({
    filter = null,
    res = null
}) => {

    Guest.find(filter)
        .then(result => {
            if (result === null) {
                const returnData = {
                    "status": 500,
                    "message": 'No guests found',
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

module.exports = getGuestCount