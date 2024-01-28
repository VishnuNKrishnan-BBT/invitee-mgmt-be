const Guest = require('../models/guest')

const getGuestCountIncCompanions = ({
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

                var totalCount = 0

                result.forEach(obj => {
                    totalCount += 1

                    if (obj.companions !== '') {
                        totalCount += obj.companions.split(',').length
                    }
                })

                const returnData = {
                    "status": 200,
                    "message": null,
                    "data": { count: totalCount }
                }
                res && res.json(returnData)
                return returnData
            }
        })
}

module.exports = getGuestCountIncCompanions