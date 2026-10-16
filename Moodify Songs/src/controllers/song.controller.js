const songModel = require("../models/song.model");
const storageService = require("../services/storage.service");
const id3 = require("node-id3");

async function uploadSong(req, res) {
  const { mood } = req.body;

  const songBuffer = req.file.buffer;

  const tags = id3.read(songBuffer);

  const songFile = await storageService.uploadFile({
    buffer: songBuffer,
    fileName: tags.title + ".mp3",
    folder: "songs",
  });
  const posterFile = await storageService.uploadFile({
    buffer: tags.image.imageBuffer,
    fileName: tags.title + "poster.jpg",
    folder: "posters",
  });
  const song = await songModel.create({
    url: songFile.url,
    posterUrl: posterFile.url,
    title: tags.title,
    mood: mood,
  });

  res.status(201).json({
    message: "Song uploaded successfully",
    song,
  });
}

module.exports = {
  uploadSong,
};
