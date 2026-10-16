const ImageKit = require("@imagekit/nodejs");

const imagekit = new ImageKit({
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
});

async function uploadFile({ buffer, fileName, folder = "" }) {
  const file = await imagekit.files.upload({
    file: buffer.toString("base64"),
    fileName: fileName,
    folder: folder,
  });

  return file;
}

module.exports = {
  uploadFile,
};
