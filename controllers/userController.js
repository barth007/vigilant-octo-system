"use strict"
let Models = require('../models');

const getUsers = (res) =>{
    Models.User.find({})
    .then(data => res.send({result: 200, data: data}))
    .catch(err => res.send({result: 500, message: err.message}));
}

const createUser = (data, res) => {
    console.log(data);
    new Models.User(data).save()
    .then(data => res.send({result: 201, data: data}))
    .catch(err => res.send({result: 500, message: err.message}));
}
const updateUser = (req, res) => {
    console.log(req.body)
    Models.User.findByIdAndUpdate(req.params.id, req.body, {new: true})
    .then(data => res.send({result: 200, data: data}))
    .catch(err => res.send({result: 500, message: err.message}));
}

const deleteUser = (req, res) => {
    Models.User.findByIdAndDelete(req.params.id)
    .then(data => res.send({result: 200, data: data}))
    .catch(err => res.send({result: 500, message: err.message}));
}
module.exports = {
    getUsers,
    createUser,
    updateUser,
    deleteUser
};  