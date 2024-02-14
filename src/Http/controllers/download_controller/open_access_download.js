const express = require("express");
const router = express.Router();
const { REPO, DAFTAR_SURAT } = require("../../../models");
const { StatusCodes } = require("http-status-codes");
const path = require("path");
const fs = require("fs");

async function get_file_path(url_code) {
  console.log("url_code:", url_code);
  const repo = await REPO.findOne({ where: { unix_code: url_code } });
  console.log("repo:", repo);
  if (!repo) {
    return "File not found";
  }
  const path_file = await DAFTAR_SURAT.findOne({
    where: {
      id: repo.surat_id,
    },
  });
  return path_file.path;
}

router.get(`/:url_code`, async (req, res) => {
  try {
    let url_code = req.params.url_code;
    let filepath = await get_file_path(url_code);
    console.log("filepath:", filepath); //filepath: daftar_surat\c5fde2c4-1707932773126-uji%20TU%201-acc-acc.pdf
    filepath = path.resolve(__dirname, "../../../../", filepath);
    if (!fs.existsSync(filepath)) {
      return res
        .status(StatusCodes.NOT_FOUND)
        .json({ error: "File not found" });
    }
  } catch (error) {
    console.error("Error:", error);
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ error: "Internal Server Error" });
  }
  // res.json({ message: "Hello from open access download" });
});

module.exports = router;
