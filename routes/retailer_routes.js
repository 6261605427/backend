const express = require('express')
const retailer_route = express.Router()


const { viewShop, newshopRegister, updateShop, updateStatus, updatepassword, updatedocuments} = require('../controller/retailer')

retailer_route.post('/api/retailer/newshopRegister', newshopRegister)
retailer_route.get('/api/retailer/viewShop', viewShop)
retailer_route.put('/adminrole_update/:regno', updateShop)
retailer_route.put('/adminrole_update/:regno', updateStatus)
retailer_route.put('/adminrole_update/:regno', updatepassword)
retailer_route.put('/adminrole_update/:regno', updatedocuments)



module.exports = retailer_route 