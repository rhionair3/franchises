var brambangEx = require('express');
var brambangApp = brambangEx();
var brambangParser = require('body-parser');
brambangApp.use(brambangParser.json());

require('./app/routers/router.js')(brambangApp);

const brambangDB = require('./app/configs/db.js');

const Aturan = brambangDB.aturan;

brambangDB.sequelize.sync({ force: true }).then(() => {
    console.log('sinkronisas data { force : true }');
    inisialisasi();
})

var Port = 8081;

var brambangSrv = brambangApp.listen(Port, function() {
    var brambangHost = brambangSrv.address().address
    var brambangPort = brambangSrv.address().port

    console.log('App Listening at http://%s:%s', brambangHost, brambangPort);
})

function inisialisasi() {
    Aturan.create({
        id: 1,
        name: "Super Admin"
    }, {
        id: 2,
        name: "Admin"
    }, {
        id: 3,
        name: "Acount Manager"
    },{
        id: 4,
        name: "Staff Gudang"
    }, {
        id: 5,
        name: "Staff Administrasi"
    })
}