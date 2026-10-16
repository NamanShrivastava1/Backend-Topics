const { Router } = require("express");
const songController = require("../controllers/song.controller");
const uplaod = require("../middlewares/upload.middleware");

const router = Router();

router.post("/", uplaod.single("song"), songController.uploadSong);

module.exports = router;
