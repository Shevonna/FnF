const express = require('express')
const router = express.Router()
const db = require('../models')

router.get('/', (req, res) => {
    db.find({}, (err, photos) => {
        res.json(photos)
    })
})
router.use('/:id', (req, res, next) => {
    console.log(req.params.id)
    db.findById(req.params.id, (err, photo) => {
        if(err)
            res.status(500).send(err)
        else 
            req.photo = photo 
            next()
    })
})
router
    .get('/:id', (req, res) => {
        return res.json( req.photo )
    })
    .put('/:id', (req, res) =>{
        Object.keys(req.body).map(key=>{
            req.photo[key] = req.body[key]
        })
        req.photo.save()
        res.json(req.photo)
    })
module.exports = router;