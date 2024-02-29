const mongoose = require("mongoose");

const DataEpisode = new mongoose.Schema({
  link_episode: {
    type: String,
    required: true,
  },
  judul_episode: {
    type: String,
    required: true,
  },
  deskripsi_episode: {
    type: String,
    required: true,
  },
});

const EdutrenBagian = new mongoose.Schema({
  nomor_bagian: {
    type: String,
    required: true,
  },
  judul_bagian: {
    type: String,
    required: true,
  },
  deskripsi_bagian: {
    type: String,
    required: true,
  },
  image_bagian: String,
  data_tutorial: [DataEpisode],
});

const Edutren = new mongoose.Schema({
  judul_role: {
    type: String,
    required: true,
  },
  image_role: String,
  data_bagian: [EdutrenBagian],
});

module.exports = mongoose.model("Edutren", Edutren);
