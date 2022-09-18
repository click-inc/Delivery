const express = require('express')
const userRouter = require('./routers/delivery')
var cors = require('cors')

require('./db/mongoose')

const port = process.env.PORT

const app = express()

app.use(cors())
app.use(express.json())
app.use(userRouter)

app.listen(port, () => {
    console.log('server listening on port ' + port)
})