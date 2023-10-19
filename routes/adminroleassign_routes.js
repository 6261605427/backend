const express = require('express')
const adminrollassign = express.Router()


const {checkrole, grantrole, changerole, revokerole} = require('../controller/adminroleassign')

adminrollassign.post('/api/admin/roleassign/grantrole', grantrole)
adminrollassign.get('/api/admin/roleassign/checkrole', checkrole)
adminrollassign.put('/api/admin/roleassign/changerole/:id',  changerole)
adminrollassign.delete('/api/admin/roleassign/revokerole/:id', revokerole )



module.exports = adminrollassign