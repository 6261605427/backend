const connectDb = require('../model/db')


const viewShop = async (req, res) => {
    try {
        const sqlQuery = `SELECT * FROM tbl_retailer_register`
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

const  newshopRegister =  (req, res) => {
    try {
        const data = req.body;
       
        const sqlQuery = 'INSERT INTO tbl_retailer_register SET ?';
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


const updateShop = (req, res) => {
    try {
        let regno = req.params.regno
        const data = req.body
        // let id = req.params.id
        let SqlQuery = "UPDATE tbl_retailer_register SET ? WHERE regno =?"
        connectDb.query(SqlQuery, [data, regno], (err, result) => {
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

const updateStatus = async(req, res) => {
    try {
        const status = req.body.status
        let regno = req.params.regno

       
        let SqlQuery = 'UPDATE  tbl_retailer_register SET status=? WHERE regno=?';
        await connectDb.query(SqlQuery, [status, regno], (err, result) => {
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

const updatepassword = async(req, res) => {
    try {
        let data = req.body.password;
        // let id = req.body.uid;
        let SqlQuery = "UPDATE tbl_retailer_register SET password = ? WHERE regno =?"
        await connectDb.query(SqlQuery, [data], (err, result) => {
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

const updatedocuments = async(req, res) => {
    try {
        let data = req.body.regno;
        // let id = req.query.uid;
        let SqlQuery = 'UPDATE  tbl_adminuser SET status=? WHERE uid=?';
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



module.exports = {viewShop, newshopRegister, updateShop, updateStatus, updatepassword, updatedocuments}