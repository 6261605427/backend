const express = require('express')

const adminRoutes = express.Router()
// const  Validation = require('../Validation.js')


let multerS3 = require('multer-s3');
let multer = require("multer")
const { S3Client } = require('@aws-sdk/client-s3');

const bucketName = "projectanu";   ///name of bucket is forimg12345

//store file in AWS S3 configuration 
const s3 = new S3Client({
    region: "ap-south-1",
    credentials: {
        accessKeyId: "AKIAWFKJUVLDMDQM3NV5",
        secretAccessKey: "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"
    }
}) 

//Storage Configuraion
let storage = multerS3({
    s3: s3,
    bucket: bucketName,
    acl: 'public-read',
    metadata: (req, file, cb) => {
        cb(null, { fieldName: file.fieldname })
    }, 
    contentType: multerS3.AUTO_CONTENT_TYPE,   
    key: (req, file, cb) => {
        cb(null, file.originalname)
    }

})
let upload = multer({ storage: storage })


/**
 * @swagger
 * components:
 *   schemas:
 *     tbl_adminuser:
 *       type: object
 *       properties:
 *         uid:
 *           type: string
 *         name:
 *           type: string
 *         email:
 *           type: string
 *         password:
 *           type: string
 *         mobile:
 *           type: string
 *         photo:
 *           type: string
 *         aadhar:
 *           type: string
 *         dob:
 *           type: number
 *         qualification:
 *           type: string
 *         doj:
 *           type: number
 *         state:
 *           type: string
 *         city:
 *           type: string
 *         address:
 *           type: string
 *         pin:
 *           type: string
 *         status:
 *           type: string
 */


/**
 *@swagger
 * /userlist:
 *          get:
 *              summary: This get api is used to check get metod is working or not
 *              description: This api is used to check get metod is working or not
 *              responses:
 *                  200:
 *                      description: to test get method
 *                      content: 
 *                          application/json:
 *                              schema:
 *                                  type: array
 *                                  items:
 *                                      $ref: '#components/schemas/tbl_adminuser'
 * 
 
*/

/**
 * @swagger
 * /api/admin/userregister:
 *   post:
 *     summary: Add a new employee
 *     description: Add a new employee
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/tbl_adminuser'
 *     responses:
 *       200:
 *         description: Employee added successfully
 */

/**
 * @swagger
 * /api/admin/deleteUser/{id}:
 *   delete:
 *     summary: Delete an employee by emp_id
 *     description: Delete an employee by emp_id
 *     parameters:
 *       - in: path
 *         name: id
 *         description: Employee ID to delete
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Employee deleted successfully
 */


/**
 * @swagger
 * /api/admin/update_user/{id}:
 *                put:
 *                    summary: node js api
 *                    description: node js api
 *                    parameters:
 *                      - in: path
 *                        name: emp_id
 *                        required: true
 *                        description: string Emp_id required
 *                        schema:
 *                              type: string
 *                    requestBody:
 *                         required: true
 *                         content:
 *                           application/json:
 *                             schema:
 *                                 $ref : '#components/schemas/tbl_adminuser'
 *                    responses:
 *                       200:
 *                         description: added succussfully
 *                         content:
 *                            application/json:
 *                                  schema:
 *                                     type: array
 *                                     items:
 *                                         $ref : '#components/schemas/tbl_adminuser'                       
 */



const { userlist, userregister, deleteUser,update_user,status_admin_user, create } = require('../controller/admin')

adminRoutes.get('/userlist', userlist)

 adminRoutes.post('/api/admin/userregister', upload.single('photo'), userregister)
// adminRoutes.post('/api/admin/ 
adminRoutes.delete('/api/admin/deleteUser/:id', deleteUser)
adminRoutes.put('/api/admin/update_user/:id', update_user)
adminRoutes.put('/api/admin/status_admin_user', status_admin_user)
adminRoutes.post('/ create', create)





module.exports = { adminRoutes }