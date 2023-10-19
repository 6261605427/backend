
// cron use kro to type module hta do

let nodemailer = require('nodemailer')
let cron=require('node-cron')

cron.schedule('*/5 * * * * *',()=>{
   
//authantication          

let transport = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'anupam25rai11@gmail.com',
        pass: 'qgqsbevquywdhfgl'
    }
})

let option = {
    from: "anupam25rai11@gmail.com",
    to: 'raianupam793@gmail.com',
    subject: 'about health',
    text: 'hlo'
}

// sending mail
transport.sendMail(option, (err, info) => {
    if (err)
        console.log(err)
    else
        console.log("Email sent succesfully")

})
})