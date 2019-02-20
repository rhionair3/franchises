const brambangDB = require('../configs/db');

const Franchise = brambangDB.franchise;
const FranchiseDetail = brambangDB.franchiseDetail;
const FranchiseKoki = brambangDB.koki;

exports.detailFranchise = (req, res) => {
    Franchise.findOne({
        where : { id : req.body.id}
    }).then(franchise => {
        res.status(200).json({
            'deskripsi' : 'Detail Franchise',
            'franchise' : franchise
        })
    }).catch(err => {
        res.status(500).json({
            "deskripsi": "Tidak Dapat Menampilkan Detail Franchise",
            "franchise": "Gagal Load Detail Franchise"
        });
    })
}

exports.detailFranchiseDetail = (req, res) => {
    FranchiseDetail.findAll({
        where : { user_id : req.body.franchise_id},
    }).then(franchise => {
        res.status(200).json({
            'deskripsi' : 'Detail Franchise',
            'franchiseDetails' : franchise
        })
    }).catch(err => {
        res.status(500).json({
            "deskripsi": "Tidak Dapat Menampilkan Detail Franchise",
            "franchise": "Gagal Load Detail Franchise"
        });
    })
}

exports.listFranchise = (req, res) => {
    Franchise.findAll().then(franchises => {
        res.status(200).json({
            'deskripsi' : 'List Franchise',
            'franchises' : franchises
        })
    }).catch(err => {
        res.status(500).json({
            "deskripsi": "Tidak Dapat Menampilkan List Pengguna",
            "franchises": "Gagal Load Data Franchise"
        });
    })
}

exports.listKokiFranchise = (req, res) => {
    FranchiseKoki.findAll({
        where: {
            franchise_id : req.body.franchise_id
        }
    }).then(koki => {
        res.status(200).json({
            'deskripsi' : 'List Franchise',
            'kokis' : koki
        })
    }).catch(err => {
        res.status(500).json({
            "deskripsi": "Tidak Dapat Menampilkan List Koki",
            "kokis": "Gagal Load Data Koki"
        });
    })
}

exports.createFranchise = (req, res) => {
    Franchise.create({
        username:req.body.username,
        email: req.body.email,
        emailToken: req.body.emailToken,
        emailTokenExpired: req.body.emailTokenExpired,
        password: req.body.password,
        resetPasswordToken: req.body.resetPasswordToken,
        resetPasswordExpired: req.body.resetPasswordExpired,
        fullname: req.body.fullname,
        identity_no: req.body.identity_no,
        city: req.body.city,
        mobile: req.body.mobile,
        mobileToken: req.body.mobileToken,
        status_mobile: req.body.status_mobile,
        bank_name: req.body.bank_name,
        bank_acount_no: req.body.bank_acount_no,
        bank_acount_name: req.body.bank_acount_name,
        createdAt: new Date(),
        status: req.body.status,
        provider: req.body.provider,
        sales_id: req.body.sales_id,
        role_id: req.body.role_id,
        device_id: req.body.device_id

    }).then(franchise => {
        FranchiseDetail.create({
            user_id : franchise.id,
            province_id : req.body.province_id,
            regency_id : req.body.regency_id,
            district_id : req.body.district_id,
            postal_id : req.body.postal_id,
            name : req.body.name,
            owner : req.body.owner,
            address : req.body.address,
            contact_no : req.body.contact_no,
            isDefault : req.body.isDefault,
            isDeleted : req.body.isDeleted,
            createdAt : req.body.createdAt,
            createdBy : req.body.createdBy,
            updatedAt : new Date(),
            updatedBy : req.body.updatedBy
        }).then(fdetail => {
            res.status(200).json({
                "deskripsi": "Data Franchise Dan Detail Franchise Ditambahkan",
                "franchise": franchise,
                "franchisedetail": fdetail
            });
        }).catch(err => {
            res.status(500).json({
                "description": "Tidak Dapat Menyimpan Data Detail Franchise",
                "error": err
            });
        })
    }).catch(err => {
        res.status(500).json({
            "description": "Tidak Dapat Menambah Data Franchise",
            "error": err
        });
    })
}

exports.editFranchise = (req, res) => {
    Franchise.update({
        username:req.body.username,
        email: req.body.email,
        emailToken: req.body.emailToken,
        emailTokenExpired: req.body.emailTokenExpired,
        password: req.body.password,
        resetPasswordToken: req.body.resetPasswordToken,
        resetPasswordExpired: req.body.resetPasswordExpired,
        fullname: req.body.fullname,
        identity_no: req.body.identity_no,
        city: req.body.city,
        mobile: req.body.mobile,
        mobileToken: req.body.mobileToken,
        status_mobile: req.body.status_mobile,
        bank_name: req.body.bank_name,
        bank_acount_no: req.body.bank_acount_no,
        bank_acount_name: req.body.bank_acount_name,
        createdAt: req.body.createdAt,
        updatedAt: new Date(),
        status: req.body.status,
        provider: req.body.provider,
        sales_id: req.body.sales_id,
        role_id: req.body.role_id,
        device_id: req.body.device_id

    }, {
        where: {
            id: req.body.id
        }
    }).then(franchise => {
        res.status(200).json({
            "deskripsi": "Memperbaharui Data Franchise",
            "franchise": franchise
        });
    }).catch(err => {
        res.status(500).json({
            "description": "Tidak Dapat Memperbaharui Data Franchise",
            "error": err
        });
    })
}

exports.createFranchiseDetail = (req, res) => {
    FranchiseDetail.update({
        user_id : req.body.user_id,
        province_id : req.body.province_id,
        regency_id : req.body.regency_id,
        district_id : req.body.district_id,
        postal_id : req.body.postal_id,
        name : req.body.name,
        owner : req.body.owner,
        address : req.body.address,
        contact_no : req.body.contact_no,
        isDefault : req.body.isDefault,
        isDeleted : req.body.isDeleted,
        createdAt : req.body.createdAt,
        createdBy : req.body.createdBy,
        updatedAt : new Date(),
        updatedBy : req.body.updatedBy
    }).then(fdetail => {
        res.status(200).json({
            "deskripsi": "Tambah Data Detail Franchise",
            "franchisedetail": fdetail
        });
    }).catch(err => {
        res.status(500).json({
            "description": "Tidak Dapat Tambah Data Detail Franchise",
            "error": err
        });
    })
}

exports.editFranchiseDetail = (req, res) => {
    FranchiseDetail.update({
        user_id : req.body.user_id,
        province_id : req.body.province_id,
        regency_id : req.body.regency_id,
        district_id : req.body.district_id,
        postal_id : req.body.postal_id,
        name : req.body.name,
        owner : req.body.owner,
        address : req.body.address,
        contact_no : req.body.contact_no,
        isDefault : req.body.isDefault,
        isDeleted : req.body.isDeleted,
        createdAt : req.body.createdAt,
        createdBy : req.body.createdBy,
        updatedAt : new Date(),
        updatedBy : req.body.updatedBy
    }, {
        where: {
            id: req.body.id
        }
    }).then(fdetail => {
        res.status(200).json({
            "deskripsi": "Pembaharuan Data Detail Franchise",
            "franchisedetail": fdetail
        });
    }).catch(err => {
        res.status(500).json({
            "description": "Tidak Dapat memperbaharui Data Detail Franchise",
            "error": err
        });
    })
}

exports.setDefaultDetails = (req, res) => {
    FranchiseDetail.update({
        isDefault : req.body.isDefault,
        updatedAt : new Date(),
        updatedBy : req.body.updatedBy
    }, {
        where: {
            id: req.body.id
        }
    }).then(fdetail => {
        res.status(200).json({
            "deskripsi": "Set Default Data Detail Franchise",
            "franchisedetail": fdetail
        });
    }).catch(err => {
        res.status(500).json({
            "description": "Set Default Data Detail Franchise gagal",
            "error": err
        });
    })
}

exports.setDeleteDetails = (req, res) => {
    FranchiseDetail.update({
        isDeleted : 1,
        updatedAt : new Date(),
        updatedBy : ""
    }, {
        where: {
            id: req.id
        }
    }).then(fdetail => {
        res.status(200).json({
            "deskripsi": "Menghapus Data Detail Franchise",
            "franchisedetail": fdetail
        });
    }).catch(err => {
        res.status(500).json({
            "description": "Tidak Dapat Menghapus Data Detail Franchise",
            "error": err
        });
    })
}

exports.deleteFranchise = () => {
  Franchise.update({
    status: 0,
    updatedAt : new Date(),
    updatedBy : ""
  }, {
      where: {
          id: req.id
      }
  }).then(fdetail => {
      res.status(200).json({
          "deskripsi": "Menghapus Data Franchise",
          "franchisedetail": fdetail
      });
  }).catch(err => {
      res.status(500).json({
          "description": "Tidak Dapat Menghapus Data Detail Franchise",
          "error": err
      });
  })
}
