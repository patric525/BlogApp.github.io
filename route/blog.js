const express = require('express')
const router = express.Router()
const fetchuser = require('../middleware/fetchuser')
const blog = require('../models/blogschhema')

//add blog
router.post('/addblog', fetchuser, async (req, res) => {
    try {
        console.log(req.files);
        const filename = Date.now() + '_' + req.files.img.name
        const file = req.files.img
        uploadpath = 'C:/Users/ANUJ/blogapp/client/public/uploads/' + filename
        const path = `/uploads/${filename}`
        file.mv(uploadpath)
        const { title, description, username } = req.body
        const del = 'Delete'
        const create = 'Update'
        const newblog = new blog({ user: req.user._id, title: title, description: description, imagepath: path, del: del, create: create, username: username })
        newblog.save()
    } catch (error) {
        console.log('internal server error');
    }
})
//myblog
router.get('/myblog', fetchuser, async (req, res) => {
    try {
        const getblog = await blog.find({ user: req.user._id })
        res.json(getblog)
    } catch (error) {
        console.log('internal server error');
    }
})
//allblog
router.get('/allblog', async (req, res) => {
    try {
        const getblog = await blog.find()
        res.json(getblog)
    } catch (error) {
        console.log('internal server error');
    }
})
//deleteblog
router.delete('/delete/:id', async (req, res) => {
    try {
        const _id = req.params.id
        const deleteblog = await blog.findByIdAndDelete({ _id: _id })
        if (deleteblog) {
            return res.json({ message: 'blog deleted' })
        }
    } catch (error) {
        console.log('internal server error');
    }
})
//updateblog
router.put('/update/:id', async (req, res) => {
    try {
        const filename = Date.now()+'_'+req.files.img.name
        const file = req.files.img
        uploadpath =  'C:/Users/ANUJ/blogapp/client/public/uploads/' + filename
        file.mv(uploadpath)
        const _id = req.params.id
        const updateblog = await blog.findByIdAndUpdate({ _id: _id }, {
            title:req.body.title,
            description:req.body.description,
            imagepath:`/uploads/${Date.now()+'_'+req.files.img.name}`
        })
        if (updateblog) {
            return res.json({ message: 'blog updated' })
        }
    } catch (error) {
        console.log('internal server error');
    }
})
module.exports = router