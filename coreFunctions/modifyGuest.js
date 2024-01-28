const Guest = require('../models/guest')

const modifyGuest = async (
    guestId = null,
    updatedData = {},
    res
) => {

    if (guestId === null) {
        res.json({ "status": 400, "message": `Guest ID is mandatory!` })
        return
    }

    async function modifyGuestById(guestId, updatedData) {
        try {
            const updatedInvitee = await Guest.findOneAndUpdate(
                { guestId: guestId },
                { $set: updatedData },
                { new: true } // Returns the updated document
            );

            console.log('Updated invitee:', updatedInvitee);
        } catch (error) {
            console.error('Error updating invitee:', error);
        }
    }

    modifyGuestById(guestId, updatedData).then(result => {
        res.json({
            status: 200,
            message: 'success',
            data: result
        })
    })

    // res.json({ "status": 200, "message": `${guestId} modified successfully!` })
    // return
}


module.exports = modifyGuest