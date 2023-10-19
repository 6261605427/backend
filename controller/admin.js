const connectDb = require('../model/db')
const bcrypt = require('bcrypt')
const nodemailer = require('nodemailer')

 



// get all employee
const userlist = async (req, res) => {
    try {
        const sqlQuery = `SELECT * FROM tbl_adminuser`
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

// const userregister =  (req, res) => {
//     try {


//         const sqlQuery = 'INSERT INTO tbl_adminuser SET ?'
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

const userregister = async (req, res) => {
    try {
        let sqlQuery = "insert into tbl_adminuser set?";
        let data = {
            uid: req.body.uid,
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            mobile: req.body.mobile,
            photo: req.file.location,               ///rather then photo: req.body.photo,
            aadhar: req.body.aadhar,
            dob: req.body.dob,
            qualification: req.body.qualification,
            doj: req.body.doj,
            state: req.body.state,
            city: req.body.city,
            address: req.body.address,
            pin: req.body.pin,
            status: req.body.status,
        }

        await connectDb.query(sqlQuery, data, function (error, result) {
            console.log(req.body.email)
            if (error) {
                console.log("error", error.sqlMessage)
            }
            else {
                res.json(result)

                let transport = nodemailer.createTransport({
                    service: 'gmail',
                    auth: {
                        user: 'anupam25rai11@gmail.com',
                        pass: 'qgqsbevquywdhfgl'
                    }
                })

                const option = {
                    from: 'anupam25rai11@gmail.com',
                    to: req.body.email,
                    subject: 'About Health',
                    text: 'Hello',
                }; 
                 
                transport.sendMail(option, (err, info) => {

                    if (err) {
                        console.log(err);
                    } else {
                        console.log('Email sent successfully');
                    }
                });
            };


            }
        )

    } catch (error) {
        console.log("error found...")
    }
}





const deleteUser = (req, res) => {
    const id = req.params.id;
    // console.log(id)
    const sql = "Delete FROM tbl_adminuser WHERE uid = ?";
    connectDb.query(sql, id, (err, result) => {

        console.log(err)
        if (err) return res.json({ Error: "delete employee error in sql" });
        return res.json({ Status: "Success" })
    })
}

const update_user = (req, res) => {
    try {
        let data = req.body;
        let id = req.params.id
        let SqlQuery = "UPDATE tbl_adminuser SET ? WHERE uid =?"
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
const status_admin_user = async(req, res) => {
    try {
        let status = req.query.status;
        let id = req.query.uid;
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




const create = (req, res) => {
    console.log(req.body)
    const sql = "INSERT INTO tbl_adminuser (`uid`,`name`,`email`,`password` ,`mobile`, `photo`, `aadhar`, `dob`, `qualification`, `doj`, `state`, `city`, `address`, `pin`, `status`) VALUES (?)";
    bcrypt.hash(req.body.password.toString(), 10, (err, hash) => {
        console.log(hash)
        if (err) return res.json({ Error: "Error in hashing password" });
        // console.log(password)
        const values = [
            req.body.uid,
            req.body.name,
            req.body.email,
            hash,
            req.body.mobile,
            req.file.location,
            req.body.aadhar,
            req.body.dob,
            req.body.qualification,
            req.body.doj,
            req.body.state,
            req.body.city,
            req.body.address,
            req.body.pin,
            req.body.status

        ]
        connectDb.query(sql, [values], (err, result) => {
            if (err) return res.json(err);
            return res.json({ Status: "Success" });
        })
    })
}





module.exports = { userlist, userregister, deleteUser, update_user, status_admin_user, create }