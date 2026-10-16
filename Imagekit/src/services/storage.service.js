const { ImageKit } = require("@imagekit/nodejs");

const imagekit = new ImageKit({
  privateKey: "private_vei3cVyoZyHHyxumeW33kz/AqAo=",
});

async function uploadFile(buffer, fileName) {
  const result = await imagekit.files.upload({
    file: buffer.toString("base64"),
    fileName: fileName,
  });
  return result;
}

module.exports = uploadFile;
