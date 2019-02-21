const brambangDB = require('../configs/db');

const Provincy = brambangDB.provincy;
const Regency = brambangDB.regency;
const District = brambangDB.district;
const Postal = brambangDB.postal;

exports.provincy = (req, res) => {
    Provincy.findAll({
        where: {
            orders : [1,2,3,4]
        }
    }).then(provincy => {
        res.status(200).json({
            'deskripsi' : 'List Provincy',
            'provincy' : provincy
        })
    }).catch(err => {
        console.log(err)
        res.status(500).json({
            "deskripsi": "Tidak Dapat Menampilkan List Provincy",
            "provincy": "Gagal Load Data Provincy"
        });
    })
}
exports.regency = (req, res) => {
    Regency.findAll({
        where : {
            province_id : req.body.province_id
        }
    }).then(regency => {
        res.status(200).json({
            'deskripsi' : 'List Regency',
            'regency' : regency
        })
    }).catch(err => {
        res.status(500).json({
            "deskripsi": "Tidak Dapat Menampilkan List Regency",
            "regency": "Gagal Load Data Regency"
        });
    })
}
exports.district = (req, res) => {
    District.findAll({
        where : {
            regency_id : req.body.regency_id
        }
    }).then(district => {
        res.status(200).json({
            'deskripsi' : 'List District',
            'district' : district
        })
    }).catch(err => {
        res.status(500).json({
            "deskripsi": "Tidak Dapat Menampilkan List district",
            "district": "Gagal Load Data district"
        });
    })
}

exports.postal = (req, res) => {
    Postal.findAll({
        where : {
            district_id : req.body.district_id
        }
    }).then(postal => {
        res.status(200).json({
            'deskripsi' : 'List Postal',
            'postal' : postal
        })
    }).catch(err => {
        res.status(500).json({
            "deskripsi": "Tidak Dapat Menampilkan List postal",
            "postal": "Gagal Load Data postal"
        });
    })
}
