const verifikasiReg = require("./verifikasiRegistrasi");
const brambangJWT = require("./verifyToken");

module.exports = function(brambang) {
    const brambangOtentikasi = require("../controllers/Otentikasi");
    const brambangPengguna = require("../controllers/Pengguna");
    const brambangFranchise = require("../controllers/franchise");
    const brambangGerobak = require("../controllers/gerobak");
    const brambangKoki = require("..controllers/koki");

// Rest Api Otentikasi Pengguna
    brambang.post("/api/reg-pengguna", [verifikasiReg.cekDuplikatNamaEmail], brambangOtentikasi.registrasi);
    brambang.post("/api/login-pengguna", brambangOtentikasi.masuk);
//... End Rest Api Otentikasi Pengguna

// Rest Api Master Gerobak
    brambang.get("/api/master/gerobak", [brambangJWT.verifikasiToken], brambangGerobak.listGerobak);
    brambang.get("/api/master/detail-gerobak", [brambangJWT.verifikasiToken], brambangGerobak.detailGerobak);
    brambang.get("/api/master/tambah-gerobak", [brambangJWT.verifikasiToken], brambangGerobak.createGerobak);
    brambang.get("/api/master/edit-gerobak", [brambangJWT.verifikasiToken], brambangGerobak.editGerobak);
//... End Rest Master Gerobak

// Rest Api Master Pengguna
    brambang.get("/api/master/pengguna", [brambangJWT.verifikasiToken], brambangPengguna.listPengguna);
    brambang.get("/api/master/detail-pengguna", [brambangJWT.verifikasiToken], brambangPengguna.profilPengguna);
    brambang.get("/api/master/tambah-penguna", [brambangJWT.verifikasiToken], brambangPengguna.tambahPengguna);
    brambang.get("/api/master/edit-pengguna", [brambangJWT.verifikasiToken], brambangPengguna.editPengguna);
    brambang.get("/api/master/hapus-pengguna", [brambangJWT.verifikasiToken], brambangPengguna.hapusPengguna);
//... End Rest Master Pengguna

// Rest Api Gerobak
    brambang.get("/api/gerobak", [brambangJWT.verifikasiToken], brambangGerobak.listGerobakByFranchise);
    brambang.get("/api/detail-gerobak", [brambangJWT.verifikasiToken], brambangGerobak.detailGerobakByFranchise);
    brambang.get("/api/tambah-gerobak", [brambangJWT.verifikasiToken], brambangGerobak.createGerobakByFranchise);
    brambang.get("/api/edit-gerobak", [brambangJWT.verifikasiToken], brambangGerobak.editGerobakByFranchise);
    brambang.get("/api/status-gerobak", [brambangJWT.verifikasiToken], brambangGerobak.setStatusGerobakFranchise);
//... End Rest Gerobak

// Rest Api Koki
    brambang.get("/api/koki", [brambangJWT.verifikasiToken], brambangKoki.listKoki);
    brambang.get("/api/detail-koki", [brambangJWT.verifikasiToken], brambangKoki.detailKoki);
    brambang.get("/api/tambah-koki", [brambangJWT.verifikasiToken], brambangKoki.registrasiKoki);
    brambang.get("/api/edit-koki", [brambangJWT.verifikasiToken], brambangKoki.editKoki);
    brambang.get("/api/hapus-koki", [brambangJWT.verifikasiToken], brambangKoki.deleteKoki);
//... End Rest Koki

// Rest Api Franchise
    brambang.get("/api/franchise", [brambangJWT.verifikasiToken], brambangFranchise.listFranchise);
    brambang.get("/api/detail-franchise", [brambangJWT.verifikasiToken], brambangFranchise.detailFranchise);
    brambang.get("/api/tambah-franchise", [brambangJWT.verifikasiToken], brambangFranchise.createFranchise);
    brambang.get("/api/edit-franchise", [brambangJWT.verifikasiToken], brambangFranchise.editFranchise);
    brambang.get("/api/delete-franchise", [brambangJWT.verifikasiToken], brambangFranchise.editFranchise);
    brambang.get("/api/detailfranchise", [brambangJWT.verifikasiToken], brambangFranchise.deleteFranchise);
    brambang.get("/api/detail-detailfranchise", [brambangJWT.verifikasiToken], brambangFranchise.detailFranchise);
    brambang.get("/api/tambah-detailfranchise", [brambangJWT.verifikasiToken], brambangFranchise.createFranchiseDetail);
    brambang.get("/api/setDefault-detailfranchise", [brambangJWT.verifikasiToken], brambangFranchise.setDefaultDetails);
    brambang.get("/api/setDelete-detailfranchise", [brambangJWT.verifikasiToken], brambangFranchise.setDeleteDetails);
//... End Rest Franchise
}
