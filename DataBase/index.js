const express = require('express')
const cors = require('cors')

const UserRouter = require('./src/router/user.router')
const PostRouter = require('./src/router/post.router')

const PORT = process.env.PORT || 8080

const app = express()

let corsOptions = {
    origin: "http://localhost:4200"
}

app.use(cors(corsOptions))

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/api', UserRouter)
app.use('/api', PostRouter)

app.listen(PORT, () => console.log(`Started on port ${PORT}`))