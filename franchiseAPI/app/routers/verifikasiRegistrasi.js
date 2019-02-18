const brambangDB = require('../configs/db.js');
const brambangKONF = require('../configs/config.js');
const ATURANs = brambangKONF.ATURANS;
const Pengguna = brambangDB.pengguna;
const Aturan = brambangDB.aturan;

cekDuplikatNamaEmail = (req, res, next) => {
    Pengguna.findOne({
        where : {
            employee_code : req.body.email
        }
    }).then( pengguna => {
        if (pengguna) {
            res.status(400).send("Email Pengguna Sudah Digunakan");
            return;
        }
        next();
        // Pengguna.findOne({
        //     where : {
        //         employee_code : req.body.email
        //     }
        // }).then(pengguna => {
        //     if (pengguna) {
        //         res.status(400).send("Email Sudah Digunakan");
        //         return;
        //     }
        //     next();
        // })
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