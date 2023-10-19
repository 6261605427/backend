const express = require('express')
const retailer_product_route = express.Router()


const { viewShop, newshopRegister, updateShop, updateStatus, updatepassword, updatedocuments} = require('../controller/retailer')

retailer_product_route.post('/api/retailer/newshopRegister', newshopRegister)
retailer_product_route.get('/api/retailer/viewShop', viewShop)
retailer_product_route.put('/adminrole_update/:regno', updateShop)
retailer_product_route.put('/adminrole_update/:regno', updateStatus)
retailer_product_route.put('/adminrole_update/:regno', updatepassword)
retailer_product_route.put('/adminrole_update/:regno', updatedocuments)



module.exports = retailer_product_route 