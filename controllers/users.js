
const { request, response } = require('express')


const getUser = (req = request, res = response) => {
    res.status(200).json({
        ok: true,
        msm: 'Message from Controller'
    })
}

const postUser = (req, res = response) => {
    const body = req.body

    res.status(200).json({
        ok: true,
        body
    })
}

const putUser = (req = request, res = response) => {
    const { id } = req.params
    const { q, name } = req.query

    console.log(name)

    res.status(200).json({
        ok: true,
        id
    })

}

const deleteUser = (req, res = response) => {

}


module.exports = {
    getUser,
    postUser,
    putUser,
    deleteUser
}