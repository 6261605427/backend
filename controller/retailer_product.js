const connectDb = require('../model/db')


const viewproduct = async (req, res) => {
    try {
        const sqlQuery = `SELECT * FROM tbl_retailer_product`
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

const  addproduct =  (req, res) => {
    try {
        const data = req.body;
       
        const sqlQuery = 'INSERT INTO tbl_retailer_product SET ?';
        connectDb.query(sqlQuery, data, (err, result) => {
            if (err) {
               res.json(err)
            }
            else{
                res.json(result)
                                                           
            }
        }
        )
       
    } catch (error) {
        res.send({ status: 500, Error: error.message })
    }
}


const updateproduct = (req, res) => {
    try {
        let data = req.body;
        let id = req.params.id
        let SqlQuery = "UPDATE tbl_retailer_product SET ? WHERE regno =?"
        connectDb.query(SqlQuery, [data, id], (err, result) => {
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

const updatediscount = async(req, res) => {
    try {
        let status = req.query.status;
        let id = req.query.uid;
        let SqlQuery = 'UPDATE  tbl_retailer_product SET status=? WHERE regno=?';
        await connectDb.query(SqlQuery, [status, id], (err, result) => {
            if (err) {
                res.json(err)
            }
            else {
                res.json(result)
            }
        })


    } catch (error) {
     console.log(error)
    }
}

const updatequantity = async(req, res) => {
    try {
        let status = req.query.status;
        let id = req.query.uid;
        let SqlQuery = "UPDATE tbl_retailer_product SET password = ? WHERE regno =?"
        await connectDb.query(SqlQuery, [status, id], (err, result) => {
            if (err) {
                res.json(err)
            }
            else {
                res.json(result)
            }
        })


    } catch (error) {
     console.log(error)
    }
}

// const updatedocuments = async(req, res) => {
//     try {
//         let status = req.query.status;
//         let id = req.query.uid;
//         let SqlQuery = 'UPDATE  tbl_retailer_product SET status=? WHERE uid=?';
//         await connectDb.query(SqlQuery, [status, id], (err, result) => {
//             if (err) {
//                 res.json(err)
//             }
//             else {
//                 res.json(result)
//             }
//         })


//     } catch (error) {
//      console.log(error)
//     }
// }



module.exports = {viewproduct, addproduct, updateproduct, updatediscount, updatequantity}