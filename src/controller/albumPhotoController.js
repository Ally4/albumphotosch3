const axios = require("axios");  // library to consume the URL

const getAlbum = (req, res) => {
  let albumId = req.params.id;

  let url = `https://jsonplaceholder.typicode.com/albums/${albumId}/photos`;

  axios.get(url).then((response) => {
      const photos = response.data.map((i) => ({
        id: i.id,
        title: i.title,
        thumbnailUrl: i.thumbnailUrl,
      }));
      res.status(200).json(photos);
    }).catch((error) => {
      res.status(500).json(error);
    });
};

module.exports = {
  getAlbum,
};