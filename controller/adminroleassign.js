const connectDb = require('../model/db')


const checkrole = async (req, res) => {
    const uid = req.body.uid
    try {
        const sqlQuery = `SELECT rolename  FROM tbl_admin_roles where roleid IN(select roleid from tbl_adminrole_assign where uid = ${uid})`;
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

const grantrole =  (req, res) => {
    try {
        const data = {
            uid:req.body.id,
            roleid:req.body.roleid,
        }
       
        const sqlQuery = 'INSERT INTO tbl_admin_role_assign SET ?'
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

const changerole = (req, res) => {
    try {
        let data = req.body;
        let id = req.params.id
        let SqlQuery = "UPDATE tbl_admin_role_assign SET ? WHERE roleid =?"
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

const revokerole = (req, res) => {
    const id = req.params.id;
    // console.log(id)
    const sql = `Delete FROM tbl_admin_role_assign WHERE uid = ${uid} and roleid = ${roleid}`;
    connectDb.query(sql, id, (err, result) => {

        console.log(err)
        if (err) return res.json({ Error: "delete employee error in sql" });
        return res.json({ Status: "Success" })
    })
}

module.exports = {checkrole, grantrole, changerole, revokerole}