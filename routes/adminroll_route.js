const express = require('express')
const adminroll_route = express.Router()


const { adminrolePost, adminrole_view, adminrole_update} = require('../controller/admin_role')

adminroll_route.post('/adminrolePost', adminrolePost)
adminroll_route.get('/adminrole_view', adminrole_view)
adminroll_route.put('/adminrole_update/:id', adminrole_update)



module.exports = adminroll_route 