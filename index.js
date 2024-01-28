//MODULE IMPORTS
const express = require('express')
const cors = require('cors')
require('dotenv').config();
const { connectToDB } = require('./connectToDB')

//CORE FUNTIONS IMPORT


//INITIALIZE EXPRESS
const app = express()
const port = process.env.PORT || 4001

//MIDDLEWARE - REQUEST FORMATTING
const bodyParser = require('body-parser');
const createGroup = require('./coreFunctions/createGroup');
const getGroups = require('./coreFunctions/getGroups');
const createGuest = require('./coreFunctions/createGuest');
const getGuestCount = require('./coreFunctions/getGuestCount');
const getGuests = require('./coreFunctions/getGuests');
const getGuestCountIncCompanions = require('./coreFunctions/getGuestCountIncCompanions');
const modifyGuest = require('./coreFunctions/modifyGuest');
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// Enable CORS for all routes
app.use(cors())

//INITIALIZE CONNECTION WITH DB
// connectToDB()

// // MIDDLEWARE - AUTHENTICATION
// const authenticate = (req, res, next) => {
//     const token = req.header('Authorization');

//     if (!token || token !== 'your-secret-token') {
//         return res.status(401).json({ message: 'Unauthorized' });
//     }
//     next()
// }

// Use the authentication middleware for all routes
// app.use(authenticate)

// ---------------------------------

connectToDB()

//ROUTES
app.get('/', (req, res) => {
    res.send('Invalid request')
})

app.post('/', (req, res) => {
    res.send('Invalid request')
})

// app.get('/count/all', (req, res) => {

// })

app.get('/groups', (req, res) => {
    getGroups({ res })
})

app.post('/retrieve/guests', (req, res) => {
    // console.log(req.body);
    const filter = req.body
    getGuests({ filter, res })
})

app.post('/modify/guest', (req, res) => {
    // const filter = req.body
    modifyGuest(req.body.guestId, req.body.updatedData, res)
})

app.post('/retrieve/guestCount', (req, res) => {
    // console.log(req.body);
    const filter = req.body
    getGuestCount({ filter, res })
})

app.post('/retrieve/guestCountIncCompanions', (req, res) => {
    // console.log(req.body);
    const filter = req.body
    getGuestCountIncCompanions({ filter, res })
})

app.post('/create/group', (req, res) => {
    // console.log(req.body);
    createGroup({ ...req.body, res })
})

app.post('/create/guest', (req, res) => {
    // console.log(req.body);
    createGuest({ ...req.body, res })
})

app.post('/modify/guest', (req, res) => {
    console.log(req.body);
})

//Start app
app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})