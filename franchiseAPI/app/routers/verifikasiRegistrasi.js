const brambangDB = require('../configs/db.js');
const brambangKONF = require('../configs/config.js');
const ATURANs = brambangKONF.ATURANs;
const Pengguna = brambangDB.user;
const Aturan = brambangDB.aturan;

cekDuplikatNamaEmail = (req, res, next) => {
    Pengguna.findOne({
        where : {
            namapengguna : req.body.namapengguna
        }
    }).then( pengguna => {
        if (pengguna) {
            res.status(400).send("Nama Pengguna Sudah Digunakan");
            return;
        }
        Pengguna.findOne({
            where : {
                email : req.body.email
            }
        }).then(pengguna => {
            if (pengguna) {
                res.status(400).send("Email Sudah Digunakan");
                return;
            }
            next();
        })
    })
}

cekMemilikiAturan = (req, res, next) => {
    console.log(req.body);
    for (let i = 0; i < req.body.aturan.length; i++) {
        if (!ATURANs.includes(req.body.aturan[i])) {
            res.status(400).send("Failid -> Aturan Tidak Ditemukan = " + req.body.aturan[i]);
			return;
        }  
    }
    next();
}

const verifikasiRegistrasi = {};
verifikasiRegistrasi.cekDuplikatNamaEmail = cekDuplikatNamaEmail;
verifikasiRegistrasi.cekMemilikiAturan = cekMemilikiAturan ;

module.exports = verifikasiRegistrasi;