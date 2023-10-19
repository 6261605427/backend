const connectDb = require('../model/db')


const viewoffer = async (req, res) => {
    try {
        const sqlQuery = `SELECT * FROM tbl_admin_offer`
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

const createoffer =  (req, res) => {
    try {
        const data = req.body;
       
        const sqlQuery = 'INSERT INTO tbl_admin_offer SET ?'
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

const updateoffer = (req, res) => {
    try {
        let data = req.body;
        let id = req.params.id
        let SqlQuery = "UPDATE tbl_admin_roles SET ? WHERE offerid =?"
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

const findoffer = async (req, res) => {
    try {
        const sqlQuery = `SELECT * FROM tbl_admin_product_category where pCategoryname = ?`
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

const update_status = (req, res) => {
    try {
        let status = req.body
        let id = req.params.id
        let SqlQuery = 'UPDATE  tbl_admin_offer  SET status=? WHERE offerid=?'
        connectDb.query(SqlQuery, [status, id], (err, result) => {
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

module.exports = {viewoffer, createoffer, updateoffer, findoffer, update_status}