const { JABATAN } = require("../../../models");

async function catchStatus(req, res) {
  let {
    jabatan_id,
    isRead,
    latestStatus,
    persetujuan,
    isSigned,
    isDownloadUnsigned,
  } = req.body;

  if (!isRead) isRead = false;
  if (!latestStatus || latestStatus == "") latestStatus = "";
  if (!persetujuan || persetujuan == "") persetujuan = "";
  if (!isSigned) isSigned = false;
  if (!isDownloadUnsigned) isDownloadUnsigned = false;

  const jabatan = await JABATAN.findOne({
    where: { id: jabatan_id },
  });
  const jabatan_atas = await JABATAN.findOne({
    //TU
    where: { id: jabatan.jabatan_atas_id },
  });
  const isiStatus = [
    "",
    `Di Daftar Tunggu ${jabatan.name}`,
    `Diproses ${jabatan.name}`,
    `Di Daftar Tunggu ${
      jabatan_atas && jabatan_atas.name ? jabatan_atas.name : ""
    }`,
    `Diproses ${jabatan_atas && jabatan_atas.name ? jabatan_atas.name : ""}`,
    `Ditolak ${jabatan.name}`,
    `Ditolak ${jabatan_atas && jabatan_atas.name ? jabatan_atas.name : ""}`,
    `Diproses ke BSRE ${jabatan.name}`,
    "Surat Telah Ditandatangani",
  ];

  if (
    latestStatus.toLowerCase().includes(`${jabatan.name.toLowerCase()}`) ||
    !latestStatus
  ) {
    if (!latestStatus) {
      res = isiStatus[3];
    } else if (isRead && !isSigned && !isDownloadUnsigned && !persetujuan) {
      res = isiStatus[2];
    } else if (persetujuan) {
      if (persetujuan.toLowerCase().includes(`disetujui`)) {
        res = isiStatus[3];
      } else if (persetujuan.toLowerCase().includes(`ditolak`)) {
        res = isiStatus[5];
      }
    } else if (isDownloadUnsigned) {
      res = isiStatus[7];
    } else if (isSigned) {
      res = isiStatus[8];
    } else {
      res = latestStatus;
    }
  } else {
    res = latestStatus;
  }
  return res;
}

module.exports = catchStatus;
