var databaseCore = require('../core');


function findAll(req, res) {
    databaseCore.getWallets().then((data) => {
        res.send(data);
    }, (error) => {
        console.error('error: ', error);
    });
}

function findById(req, res) {    
    if(req.params.id) {
        var id = Number(req.params.id);
        databaseCore.getWalletsFilter({ id: id }).then((data) => {
            res.send(data);
        }, (error) => {
            console.error('error: ', error);
        });
    }
}

function findAnyName(req, res) {    
    if(req.params.name) {
        databaseCore.getWalletsFilter({ name: req.params.name }).then((data) => {
            res.send(data);
        }, (error) => {
            console.error('error: ', error);
        });
    }
}

function add(req, res) {
    if(req.body) {
        // req.body.balance = Number(req.params.balance);
        // req.body.idcurrency = Number(req.params.idcurrency);
        // req.body.iduser = Number(req.params.iduser);
        databaseCore.addWallets(req.body).then((data) => {
            res.send(data);
        }, (error) => {
            console.error('error: ', error);
        });
    }
}

function update(req, res) {
    if(req.params.id && req.body) {
        req.body.id = Number(req.params.id);
        databaseCore.updateWallets(req.body).then((data) => {
            res.send(data);
        }, (error) => {
            console.error('error: ', error);
        });
    }
}

function deleteById(req, res) {
    if(req.params.id) {
        var id = Number(req.params.id);
        databaseCore.deleteWallets(id).then((data) => {
            res.send(data);
        }, (error) => {
            console.error('error: ', error);
        });
    }
}

function deleteBatch(req, res) {
    if(req.params.array) {
        var arr = JSON.parse(req.params.array);
        databaseCore.deleteBatchWallets(arr).then((data) => {
            res.send(data);
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
    deleteById: deleteById,
    deleteBatch: deleteBatch
}