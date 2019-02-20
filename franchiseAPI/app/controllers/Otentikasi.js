const brambangKONF = require('../configs/config');
const brambangDB = require('../configs/db');

const Pengguna = brambangDB.pengguna;

var brambangJWT = require('jsonwebtoken');
var brambangCRYPT = require('bcryptjs');


exports.registrasi = (req, res) => {
    console.log(req);
    console.log('Proses Registrasi Pengguna Internal : ' + req.body.fullname);

    Pengguna.create({
        employee_code       : req.body.email,
        fullname            : req.body.fullname,
        password            : brambangCRYPT.hashSync(req.body.password, 8),
        employee_role_id    : req.body.employee_role_id,
        isActive            : req.body.isActive,
        createdAt           : new Date(),
        updatedAt           : "",
        is_reset_password   : req.body.is_reset_password
    }).then(pengguna => {
        res.send('Registrasi Pengguna Sukses !');
    }).catch(err => {
        res.status(500).send("Gagal Registrasi! Error Saat Rgistrasi " + err);
    })
}

exports.masuk = (req, res) => {
    console.log('Proses Login / Masuk Aplikasi');
    console.log(res);
    Pengguna.findOne({
        where: {
            employee_code: req.body.email
        }
    }).then(pengguna => {
        if(!pengguna) {
            return res.status(404).send('Data Pengguna Tidak Ditemukan.');
        }

        var validPassword = brambangCRYPT.compareSync(req.body.password, pengguna.password);
        if(!validPassword) {
            return res.status(401).send({
                auth: false,
                aksesToken: null,
                pesan: "Password Tidak Valid !"
            });
        }

        let dataprofil = {
            id : pengguna.id,
            nama : pengguna.fullname,
            email : pengguna.employee_code,
            akseslevel : pengguna.employee_role_id
        }

        var token = brambangJWT.sign({ id: pengguna.id }, brambangKONF.secret, {
		  expiresIn: 86400 // expires in 24 hours
		});
		
		res.status(200).send({ auth: true, aksesToken: token, datapengguna: dataprofil });
    }).catch(err => {
        res.status(500).send('Error -> ' + err);
    });
}