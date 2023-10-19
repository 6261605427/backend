const express = require('express')
const adminoffer_route = express.Router()


const { viewoffer, createoffer, updateoffer, findoffer, update_status} = require('../controller/offers')

adminoffer_route.post('/api/admin/offer/createoffer', createoffer)
adminoffer_route.get('/api/admin/offer/viewoffer',viewoffer )
adminoffer_route.put('/api/admin/offer/updateoffer/:id', updateoffer)
adminoffer_route.get('/api/admin/offer/findoffer/',findoffer )
adminoffer_route.put('/api/admin/offer/updateoffer/:id', update_status)





module.exports = adminoffer_route