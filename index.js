const express = require('express')
const bcrypt = require('bcrypt')
const app = express()

const cors = require('cors')

const swaggerui = require('swagger-ui-express')
const swaggerjsdoc = require('swagger-jsdoc')

const option = {
    definition : {
        openapi : "3.0.0",
        info : {
            title : " API DOCUMENTATION",
            version : "1.0.0"
        },
        servers: [
            {
                url : 'http://localhost:4004'
            }
        ]
    },
    apis : ['./routes/adminRoutes.js']

}


app.use(express.json())

const dotenv = require('dotenv')
dotenv.config()

app.use(cors(
    {
        origin: ["http://localhost:3000"],
        methods: ["POST", "GET", "PUT","DELETE"],
        credentials: true
    }
));

const { adminRoutes } = require('./routes/adminRoutes')
app.use('/', adminRoutes)
app.use('/testing', swaggerui.serve, swaggerui.setup(swaggerjsdoc(option)));

const adminroll_route = require('./routes/adminroll_route')
app.use('/', adminroll_route)

const admincategory_route  = require('./routes/admincategory_routes')
app.use('/', admincategory_route )

const adminsubcategory_route  = require('./routes/adminsubcategory_routes')
app.use('/', adminsubcategory_route )

const adminoffer_route  = require('./routes/offer_route')
app.use('/', adminoffer_route )


const adminrollassign  = require('./routes/adminroleassign_routes')
app.use('/', adminrollassign )

const retailer_route  = require('./routes/retailer_routes')
app.use('/', retailer_route )


app.listen(4004, () => {
    console.log(`server is started on port http://localhost:${process.env.PORT}`)
})