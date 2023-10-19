const connectDb = require('../model/db')


const viewsubCategory = async (req, res) => {
    try {
        const sqlQuery = `SELECT * FROM tbl_admin_subcategory`
        await connectDb.query(sqlQuery, (err, result) => {
            if (err) {
                return res.status(404).json({ message: "Not Found" })
            }
            res.status(200).json({
                success: true,
                result
            })
        })
    } catch (error) {
        res.send({ status: 500, Error: error.message })
    }
}

// const addsubCategory =  (req, res) => {
//     try {
//         const data = req.body

//         console.log(data)
       
//         const sqlQuery = 'INSERT INTO tbl_admin_subcategory SET ?'
//         connectDb.query(sqlQuery, data, (err, result) => {
//             if (err) {
//                res.json(err)
//             }
//             else{
//                 res.json(result)
                                                           
//             }
//         }
//         )
       
//     } catch (error) {
//         res.send({ status: 500, Error: error.message })
//     }
// }

const addsubCategory = async (req, res) => {
    try {
        let sqlQuery = 'INSERT INTO tbl_admin_subcategory SET ?'
        let data = {
            pCategoryid: req.body.pCategoryid,
            subCategoryid: req.body. subCategoryid,
            subCategoryname: req.body. subCategoryname,
            photo: req.file.location           ///rather then photo: req.body.photo,
         
        }

        await connectDb.query(sqlQuery, data, function (error, result) {
            if (error) {
                console.log("error", error.sqlMessage)
            }
            else {
            res.json(result)
        }
    })

} catch (error) {
    console.log("error found...")
}
}

const updateSubcategory = (req, res) => {
    try {
    
        const subCategoryname = req.body.subcatname
        console.log(subCategoryname)
        const subCategoryid = req.params.id;
        let SqlQuery = `UPDATE tbl_admin_subcategory SET subCategoryname =? WHERE subCategoryid = ${subCategoryid}`
        connectDb.query(SqlQuery,subCategoryname,(err, result) => {
            if (err) {
                res.json(err)
            }
            else {
                res.json(result)
            }
        })

    } catch (error) {

    }
}

const findsubCategory = async (req, res) => {
    try {
        const sqlQuery = `SELECT * FROM tbl_admin_subcategory where pCategoryname = ?`
        await connectDb.query(sqlQuery, (err, result) => {
            if (err) {
                return res.status(404).json({ message: "Not Found" })
            }
            res.status(200).json({
                success: true,
                result
            })
        })
    } catch (error) {
        res.send({ status: 500, Error: error.message })
    }
}

module.exports = {addsubCategory, viewsubCategory,  updateSubcategory, findsubCategory}