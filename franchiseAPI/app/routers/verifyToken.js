const brambangJWT = require('jsonwebtoken');
const brambangKONF = require('../configs/config.js');
const brambangDB = require('../configs/db.js');

const Aturan = brambangDB.aturan;
const Pengguna = brambangDB.users;

verifikasiToken = (req, res, next) => {
    console.log(req.headers['brambang-access-token']);
    let token = req.header['brambang-access-token'];

    if(!token) {
        return res.status(403).send({
            otentikasi: false, pesan: "Tidak Ditemukan Token..."
        });
    }

    brambangJWT.verify(token, brambangKONF.secret, (err, decoded) => {
        if(err){
            return res.status(500).send({
                otentikasi: false,
                pesan: "Gagal Dalam Otentikasi Token : " + err
            });
        }
        req.id = decoded.id;
        next();
    })
}

lvlSUPERADMIN = (req, res, next) => {
    Pengguna.findById(req.id)
    .then(pengguna => {
        URLSearchParams.getRoles().then(aturan => {
            for (let i = 0; i < pengguna.length; i++){
                if ([1, 2, 3, 4, 5].includes(aturan[i].id)) {
                    next();
                    return;
                }
            }
        })
    })
}
lvlADMIN = (req, res, next) => {
    Pengguna.findById(req.id)
    .then(pengguna => {
        URLSearchParams.getRoles().then(aturan => {
            for (let i = 0; i < pengguna.length; i++) {
                if ([2, 3, 4, 5].includes(aturan[i].id)) {
                    next();
                    return;
                }
            }
        })
    })
}

lvlACMGR = (req, res, next) => {
    Pengguna.findById(req.id)
    .then(pengguna => {
        URLSearchParams.getRoles().then(aturan => {
            for (let i = 0; i < pengguna.length; i++) {
                if ([3, 4, 5].includes(aturan[i].id)) {
                    next();
                    return;
                }
            }
        })
    })
}

lvlSTGDG = (req, res, next) => {
    Pengguna.findById(req.id)
    .then(pengguna => {
        URLSearchParams.getRoles().then(aturan => {
            for (let i = 0; i < pengguna.length; i++) {
                if (aturan[i].id === 4) {
                    next();
                    return;
                }
            }
        })
    })
}

lvlSTADM = (req, res, next) => {
    Pengguna.findById(req.id)
    .then(pengguna => {
        URLSearchParams.getRoles().then(aturan => {
            for (let i = 0; i < pengguna.length; i++) {
                if (aturan[i].id === 5) {
                    next();
                    return;
                }
            }
        })
    })
}


const authJWT = {};
authJWT.verifikasiToken = verifikasiToken;
authJWT.lvlSUPERADMIN = lvlSUPERADMIN;
authJWT.lvlACMGR = lvlACMGR;
authJWT.lvlSTGDG = lvlSTGDG;
authJWT.lvlSTADM = lvlSTADM;

module.exports = authJWT;

