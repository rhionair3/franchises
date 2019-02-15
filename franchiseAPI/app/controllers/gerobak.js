const brambangDB = require('../configs/db');

const Gerobak = brambangDB.gerobak;
const GerobakFranchise = brambangDB.gerobakFranchise;

exports.createGerobakByFranchise = (req, res) => {
    GerobakFranchise.create({
        code_no : req.body.code_no,
        franchise_id : req.body.franchise_id,
        gerobak_id : req.body.gerobak_id,
        createdAt : new Date(),
        createdBy : req.body.createdBy,
        updatedAt : "",
        updatedBy : ""
    }).then(gerobakfanchise => {
        res.status(200).json({
            'deskripsi' : 'Tambah Gerobak',
            'gerobakfanchise' : gerobakfanchise
        })
    }).catch(error => {
        res.status(500).json({
            "deskripsi": "Gagal Menambah Gerobak",
            "franchise": "Gagal Menambah Gerobak"
        });
    })
}

exports.listGerobakByFranchise = (req, res) => {
    GerobakFranchise.findAll({
        include : [{
            model : Gerobak,
            through : {
                attributes : ['gerobak_id', 'id']
            }
        }]
    }).then(gerobakfanchise => {
        res.status(200).json({
            'deskripsi' : 'List Gerobak',
            'gerobakfanchise' : gerobakfanchise
        })
    }).catch(error => {
        res.status(500).json({
            "deskripsi": "Tidak Dapat Menampilkan Data List Gerobak",
            "franchise": "Gagal Menampilkan Data List Gerobak"
        });
    })
}

exports.detailGerobakByFranchise = (req, res) => {
    GerobakFranchise.findOne({
        where : {
          id : req.id
        },
        include : [{
            model : Gerobak,
            through : {
                attributes : ['gerobak_id', 'id']
            }
        }]
    }).then(gerobakfanchise => {
        res.status(200).json({
            'deskripsi' : 'Detail Gerobak Franchise',
            'gerobakfanchise' : gerobakfanchise
        })
    }).catch(error => {
        res.status(500).json({
            "deskripsi": "Tidak Dapat Menampilkan Detail Gerobak",
            "franchise": "Gagal Menampilkan Detail Gerobak"
        });
    })
}

exports.editGerobakByFranchise = (req, res) => {
    GerobakFranchise.update({
      code_no : req.body.code_no,
      franchise_id : req.body.franchise_id,
      gerobak_id : req.body.gerobak_id,
      status : req.body.status
      updatedAt : new Date(),
      updatedBy : ""
    },{
        where : {
          id : req.body.id
        }
    }).then(gerobak => {
        res.status(200).json({
            'deskripsi' : 'Sukses Memperbaharui Gerobak Franchise',
            'gerobakfanchise' : gerobakfanchise
        })
    }).catch(error => {
        res.status(500).json({
            "deskripsi": "Tidak Dapat Memperbaharui Detail Gerobak",
            "franchise": "Gagal Memperbaharui Detail Gerobak"
        });
    })
}

exports.setStatusGerobakFranchise = (req, res) => {
    GerobakFranchise.update({
      status : req.status
    },{
        where : {
          id : req.id
        }
    }).then(gerobakfanchise => {
        res.status(200).json({
            'deskripsi' : 'Sukses Ubah Status Gerobak Franchise',
            'gerobakfanchise' : gerobakfanchise
        })
    }).catch(error => {
        res.status(500).json({
            "deskripsi": "Tidak Dapat Memperbaharui Status Detail Gerobak",
            "franchise": "Gagal Memperbaharui Status Detail Gerobak"
        });
    })
}

exports.createGerobak = (req, res) => {
    GerobakFranchise.create({
        code : req.body.code
        name : req.body.name
        status : req.body.status
        createdAt : new Date()
        createdBy : ""
        updatedAt : ""
        updatedBy : ""
    }).then(gerobak => {
        res.status(200).json({
            'deskripsi' : 'Tambah Gerobak',
            'gerobak' : gerobak
        })
    }).catch(error => {
        res.status(500).json({
            "deskripsi": "Gagal Menambah Gerobak",
            "gerobak": "Gagal Menambah Gerobak"
        });
    })
}

exports.listGerobak = (req, res) => {
    GerobakFranchise.findAll().then(gerobak => {
        res.status(200).json({
            'deskripsi' : 'List Gerobak',
            'gerobak' : gerobak
        })
    }).catch(error => {
        res.status(500).json({
            "deskripsi": "Tidak Dapat Menampilkan Data List Gerobak",
            "gerobak": "Gagal Menampilkan Data List Gerobak"
        });
    })
}

exports.detailGerobak = (req, res) => {
    GerobakFranchise.findOne({
        where : {
          id : req.id
        }
    }).then(gerobak => {
        res.status(200).json({
            'deskripsi' : 'Detail Gerobak Franchise',
            'gerobak' : gerobak
        })
    }).catch(error => {
        res.status(500).json({
            "deskripsi": "Tidak Dapat Menampilkan Detail Gerobak",
            "gerobak": "Gagal Menampilkan Detail Gerobak"
        });
    })
}

exports.editGerobak = (req, res) => {
    GerobakFranchise.update({
        code : req.body.code,
        name : req.body.name,
        status : req.body.status,
        updatedAt : new Date(),
        updatedBy : ""
    },{
        where : {
          id : req.body.id
        }
    }).then(gerobak => {
        res.status(200).json({
            'deskripsi' : 'Sukses Memperbaharui Gerobak',
            'gerobakfanchise' : gerobakfanchise
        })
    }).catch(error => {
        res.status(500).json({
            "deskripsi": "Tidak Dapat Memperbaharui Detail Gerobak",
            "franchise": "Gagal Memperbaharui Detail Gerobak"
        });
    })
}
