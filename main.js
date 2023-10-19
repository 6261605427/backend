// const express = require('express');
// const bodyParser = require('body-parser');
// const nodemailer = require('nodemailer');
// const mysql = require('mysql')

// /// database connectivity
// const connectDb = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "",
//     database: "infoware"
// })

// connectDb.connect((err) => {
//     if (err) {
//         console.log(err.sqlMessage)
//     }
//     console.log("Database connected")
// })


// const app = express();
// app.use(bodyParser.urlencoded({ extended: false }));

// // Create a transporter
// const transporter = nodemailer.createTransport({
//   service: 'your_email_service', // e.g., 'Gmail' for Gmail
//   auth: {
//     user: 'your_email@example.com',
//     pass: 'your_email_password',
//   },
// });

// app.post('/register', (req, res) => {
//   // Extract user registration data from the form submission
//   const { email, username, password } = req.body;

//   // Save the user's registration data to a database (not shown here)

//   // Send a confirmation email


//   app.post('/register',  (req, res) => {
//     try {
//         const data = req.body;
       
//         const sqlQuery = 'INSERT INTO head SET ?'
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
// })

//   const emailMessage = {
//     from: 'your_email@example.com',
//     to: email,
//     subject: 'Registration Confirmation',
//     text: `Welcome, ${username}! Thank you for registering.`,
//   };

//   transporter.sendMail(emailMessage, (error, info) => {
//     if (error) {
//       console.error('Error sending confirmation email:', error);
//       res.status(500).json({ error: 'Registration failed' });
//     } else {
//       console.log('Confirmation email sent:', info.response);
//       res.json({ message: 'Registration successful' });
//     }
//   });
// });

// const PORT = 4000
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });








