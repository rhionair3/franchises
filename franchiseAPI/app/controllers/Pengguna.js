const brambangDB = require('../configs/db');

const Aturan = brambangDB.aturan;
const Pengguna = brambangDB.pengguna;

var brambangCRYPT = require('bcryptjs');

exports.profilPengguna = (req, res) => {
    Pengguna.findOne({
        where : { id : req.id},
        attributes: ['employee_code', 'fullname', 'email'],
        include : [{
            model : Aturan,
            attributes: ['id', 'role_name'],
            through: {
                attributes : ['id_employee','role_id']
            }
        }]
    }).then(pengguna => {
        res.status(200).json({
            'deskripsi' : 'Profil Pengguna',
            'pengguna' : pengguna
        })
    }).catch(err => {
        res.status(500).json({
            "description": "Tidak Dapat Mengakses Halaman Profil",
            "error": err
        });
    })
}

exports.tambahPengguna = (req, res) => {
    console.log('Proses Tambah Pengguna Internal : ' + req.body.fullname);

    Pengguna.create({
        employee_code: req.body.email,
        fullname: req.body.fullname,
        password: brambangCRYPT.hashSync(req.body.password, 8),
        employee_role_id: req.body.employee_role_id,
        isActive: req.body.isActive,
        createdAt: req.body.createdAt,
        updatedAt: "",
        is_reset_password: req.body.is_reset_password
    }).then(pengguna => {
        res.send('Tambah Pengguna Sukses !');
    }).catch(err => {
        res.status(500).send("Gagal Menambah! Error Saat Menambah Data " + err);
    })
}
exports.editPengguna = (req, res) => {
    console.log('Proses Edit Pengguna Internal : ' + req.body.fullname);

    Pengguna.update({
        employee_code: req.body.email,
        fullname: req.body.fullname,
        password: brambangCRYPT.hashSync(req.body.password, 8),
        employee_role_id: req.body.employee_role_id,
        isActive: req.body.isActive,
        createdAt: req.body.createdAt,
        updatedAt: new Date(),
        is_reset_password: req.body.is_reset_password
    }, {
        where: {
            id: req.body.id
        }
    }).then(pengguna => {
        res.send('Edit Pengguna Sukses !');
    }).catch(err => {
        res.status(500).send("Gagal Edit! Error Saat Edit Data " + err);
    })
}

exports.listPengguna = (req, res) => {
    Pengguna.findAll({
        attributes: ['id','employee_code', 'fullname', 'email'],
        include : [{
            model : Aturan,
            attributes: ['id', 'role_name'],
            through: {
                attributes : ['id_employee','role_id']
            }
        }]
    }).then(penggunas => {
        res.status(200).json({
            "deskripsi": "List Pengguna",
            "pengguna": penggunas
        });
    }).catch(err => {
        res.status(500).json({
            "description": "Tidak Dapat Menampilkan List Pengguna",
            "error": err
        });
    })
}

exports.hapusPengguna = (req, res) => {
    Pengguna.update({
        isActive: req.body.isActive,
        updatedAt: new Date()
    }, {
        where: {
            id: req.body.id
        }
    }).then(pengguna => {
        res.send('Delete Pengguna Sukses !');
    }).catch(err => {
        res.status(500).send("Gagal Delete! Error Saat Delete Data " + err);
    })
}