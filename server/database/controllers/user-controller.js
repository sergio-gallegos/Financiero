var databaseCore = require('../core');

function findAll(req, res) {
    databaseCore.findAllUsers().then((data) => {
        res.send(data.data);
    }, (error) => {
            console.error('error: ', error);
        });
}

function findById(req, res) {    
    if(req.params.id) {
        databaseCore.findByIdUsers(req.params.id).then((data) => {
            res.send(data.data);
        }, (error) => {
            console.error('error: ', error);
        });
    }
}

function findAnyName(req, res) {    
    if(req.params.name) {
        databaseCore.findAnyNameUsers(req.params.name).then((data) => {
            res.send(data.data);
        }, (error) => {
            console.error('error: ', error);
        });
    }
}

function add(req, res) {
    if(req.body) {
        databaseCore.addUser(req.body).then((data) => {
            res.send(data.data);
        }, (error) => {
            console.error('error: ', error);
        });
    }
}

function update(req, res) {
    if(req.params.id && req.body) {
        databaseCore.updateUser(req.params.id, req.body).then((data) => {
            res.send(data.data);
        }, (error) => {
            console.error('error: ', error);
        });
    }
}

function deleteById(req, res) {
    if(req.params.id) {
        databaseCore.deleteUser(req.params.id).then((data) => {
            res.send(data.data);
        }, (error) => {
            console.error('error: ', error);
        });
    }
}

module.exports = {
    findAll: findAll,
    findById: findById,
    findAnyName: findAnyName,
    add: add,
    update: update,
    deleteById: deleteById
}