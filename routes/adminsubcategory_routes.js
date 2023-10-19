const express = require('express')
const adminsubcategory_route = express.Router()

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


const { addsubCategory, viewsubCategory,  updateSubcategory, findsubCategory} = require('../controller/admin_subcategory')

adminsubcategory_route.post('/api/admin/subcategory/addcategory', upload.single('photo'), addsubCategory)
adminsubcategory_route.get('/api/admin/subcategory/viewcategory', viewsubCategory)
adminsubcategory_route.get('/api/admin/subcategory/findcategory/:subCategoryname', findsubCategory)
adminsubcategory_route.put('/api/admin/subcategory/updatecategory/:id',  updateSubcategory)

module.exports = adminsubcategory_route 
