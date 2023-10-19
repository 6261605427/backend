const joi = require('joi')

const schema = joi.object({
    uid: joi.string().min(1).max(5).required(),
    name: joi.string().min(2).max(50).required(),
    email: joi.string().min(1).max(50).required(),
    password: joi.string().min(5).max(100).required() ,
    mobile: joi.string().min(1).max(12).required(),
    photo: joi.string().required(),
    aadhar: joi.string().min(1).max(12).required(),
    dob: joi.date().required(),
    qualification: joi.string().min(1).max(20).required(),
    doj: joi.date().required(),
    state: joi.string().min(3).max(30).required(),
    city: joi.string().min(2).max(30).required(),
    address: joi.string().min(5).max(150).required(),
    pin: joi.string().min(6).max(10).required(),
    status: joi.string().min(5).max(8).required(),
})

const Validation = (req,res,next)=>{
    const value = schema.validate(req.body)
    if(value.error){
        res.send({error: value.error.details[0]})
    }
    else{
        next()
    }
}

module.exports = Validation;