
const express = require('express')
const cors = require('cors')
require('dotenv').config()



class Server {
    constructor() {
        this.app = express()
        this.port = process.env.PORT
        this.userPath = '/api/users'
        // Middlewares
        this.middlewares()
        // Application Routes
        this.routes()
    }


    middlewares() {
        this.app.use(express.static('public'))
        this.app.use(cors())
        this.app.use(express.json())
    }

    routes() {
        this.app.use(this.userPath, require('../routes/users'))
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('Server running on port', this.port)
        })
    }

}



module.exports = Server;