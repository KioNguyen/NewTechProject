var express = require('express');
var router = express.Router();
var mUser = require('../model/user');



router.post('/create', (req, res, next) => {
    var newUser = new mUser({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        userName: req.body.userName,
        password: req.body.password
    });
    newUser.save((err, user) => {
            if (err)
                res.status(500).json({ errmsg: err });
            res.status(200).json({ msg: user });
        })
        // res.status(200).json({ msg: 'Post request is working' });
});
router.get('/read', (req, res, next) => {
    mUser.find({}, (err, user) => {
            if (err)
                res.status(500).json({ errmsg: err });
            res.status(200).json({ msg: user });
        })
        // res.status(200).json({ msg: 'Get request is working' });
});
router.put('/update/:id', (req, res, next) => {
    mUser.findById({ _id: req.params.id }, (err, user) => {
        if (err)
            res.status(500).json({ errmsg: err });
        else {
            user.firstName = req.body.firstName;
            user.lastName = req.body.lastName;
            user.userName = req.body.userName;
            user.password = req.body.password;
            user.save((err, user) => {
                if (err) {
                    res.status(500).json({ errmsg: err });
                }
                res.status(200).json({ msg: user });
            });
        }
    });
    // res.status(200).json({ msg: 'Put request is working' });
});
router.delete('/delete/:id', (req, res, next) => {
    mUser.findByIdAndRemove({ _id: req.params.id }, (err, user) => {
        if (err) {
            res.status(500).json({ err });
        }
        res.status(200).json({ user });
    });
    // res.status(200).json({ msg: 'Delete request is working' });
});

module.exports = router;