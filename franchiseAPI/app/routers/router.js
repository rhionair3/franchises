const verifikasiReg = require("./verifikasiRegistrasi");
const brambangJWT = require("./verifyToken");

module.exports = function(brambang) {
    const brambangOtentikasi = require("../controllers/Otentikasi");
    const brambangPengguna = require("../controllers/Pengguna");
    const brambangFranchise = require("../controllers/franchise");
    const brambangGerobak = require("../controllers/gerobak");
    const brambangKoki = require("../controllers/koki");
    const brambangCivilization = require("../controllers/civilization");

// Rest Api Otentikasi Pengguna
    brambang.post("/api/reg-pengguna", [verifikasiReg.cekDuplikatNamaEmail], brambangOtentikasi.registrasi);
    brambang.post("/api/login-pengguna", brambangOtentikasi.masuk);
    brambang.post("/api/provincy", brambangCivilization.provincy);
    brambang.post("/api/regency", brambangCivilization.regency);
    brambang.post("/api/district", brambangCivilization.district);
    brambang.post("/api/postal", brambangCivilization.postal);
//... End Rest Api Otentikasi Pengguna

// Rest Api Master Gerobak
    brambang.get("/api/master/gerobak", [brambangJWT.verifikasiToken], brambangGerobak.listGerobak);
    brambang.post("/api/master/detail-gerobak", [brambangJWT.verifikasiToken], brambangGerobak.detailGerobak);
    brambang.post("/api/master/tambah-gerobak", [brambangJWT.verifikasiToken], brambangGerobak.createGerobak);
    brambang.post("/api/master/edit-gerobak", [brambangJWT.verifikasiToken], brambangGerobak.editGerobak);
//... End Rest Master Gerobak

// Rest Api Master Pengguna
    brambang.get("/api/master/pengguna", [brambangJWT.verifikasiToken], brambangPengguna.listPengguna);
    brambang.get("/api/master/detail-pengguna", [brambangJWT.verifikasiToken], brambangPengguna.profilPengguna);
    brambang.post("/api/master/tambah-penguna", [brambangJWT.verifikasiToken], brambangPengguna.tambahPengguna);
    brambang.post("/api/master/edit-pengguna", [brambangJWT.verifikasiToken], brambangPengguna.editPengguna);
    brambang.post("/api/master/hapus-pengguna", [brambangJWT.verifikasiToken], brambangPengguna.hapusPengguna);
//... End Rest Master Pengguna

// Rest Api Gerobak
    brambang.get("/api/gerobak", [brambangJWT.verifikasiToken], brambangGerobak.listGerobakByFranchise);
    brambang.get("/api/detail-gerobak", [brambangJWT.verifikasiToken], brambangGerobak.detailGerobakByFranchise);
    brambang.post("/api/tambah-gerobak", [brambangJWT.verifikasiToken], brambangGerobak.createGerobakByFranchise);
    brambang.post("/api/edit-gerobak", [brambangJWT.verifikasiToken], brambangGerobak.editGerobakByFranchise);
    brambang.post("/api/status-gerobak", [brambangJWT.verifikasiToken], brambangGerobak.setStatusGerobakFranchise);
//... End Rest Gerobak

// Rest Api Koki
    brambang.get("/api/koki", [brambangJWT.verifikasiToken], brambangKoki.listKoki);
    brambang.get("/api/detail-koki", [brambangJWT.verifikasiToken], brambangKoki.detailKoki);
    brambang.post("/api/tambah-koki", [brambangJWT.verifikasiToken], brambangKoki.registrasiKoki);
    brambang.post("/api/edit-koki", [brambangJWT.verifikasiToken], brambangKoki.editKoki);
    brambang.post("/api/hapus-koki", [brambangJWT.verifikasiToken], brambangKoki.deleteKoki);
//... End Rest Koki

// Rest Api Franchise
    brambang.get("/api/franchise", [brambangJWT.verifikasiToken], brambangFranchise.listFranchise);
    brambang.post("/api/detail-franchise", [brambangJWT.verifikasiToken], brambangFranchise.detailFranchise);
    brambang.post("/api/tambah-franchise", [brambangJWT.verifikasiToken], brambangFranchise.createFranchise);
    brambang.post("/api/edit-franchise", [brambangJWT.verifikasiToken], brambangFranchise.editFranchise);
    brambang.post("/api/delete-franchise", [brambangJWT.verifikasiToken], brambangFranchise.deleteFranchise);
    brambang.post("/api/detail-detailfranchise", [brambangJWT.verifikasiToken], brambangFranchise.detailFranchiseDetail);
    brambang.post("/api/koki-franchise", [brambangJWT.verifikasiToken], brambangFranchise.listKokiFranchise);
    brambang.post("/api/tambah-detailfranchise", [brambangJWT.verifikasiToken], brambangFranchise.createFranchiseDetail);
    brambang.post("/api/setDefault-detailfranchise", [brambangJWT.verifikasiToken], brambangFranchise.setDefaultDetails);
    brambang.post("/api/setDelete-detailfranchise", [brambangJWT.verifikasiToken], brambangFranchise.setDeleteDetails);
//... End Rest Franchise
}
