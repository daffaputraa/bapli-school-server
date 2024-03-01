const { json } = require("body-parser");
const CourseSchema = require("../model/edutren");
const path = require("path");

// edutren fungsi bagian
const tambahRole = async (req, res) => {
  const newData = new CourseSchema({
    judul_role: req.body.judul_role,
    image_role: req.file.filename,
  });
  try {
    const result = await newData.save();
    res.status(200).json(result);
  } catch (error) {
    res.json(error);
  }
};

const showAllRole = async (req, res) => {
  try {
    const result = await CourseSchema.find();
    res.status(200).json(result);
  } catch (error) {
    res.json(error);
  }
};

const getImage = async (req, res) => {
  try {
    const filename = req.params.filename;
    const imagePath = path.resolve(__dirname, "..", "uploads", filename);
    res.sendFile(imagePath);
  } catch (error) {
    console.log(error);
  }
};

const showRoleById = async (req, res) => {
  try {
    const result = await CourseSchema.findById(req.params.id);
    res.status(200).json(result);
  } catch (error) {
    res.json(error);
  }
};

const deleteRole = async (req, res) => {
  try {
    const result = await CourseSchema.findByIdAndDelete(req.params.id);
    res.status(200).json(CourseSchema);
  } catch (error) {
    res.json(error);
  }
};

const editRole = async (req, res) => {
  let newData = {
    judul_role: req.body.judul_role,
    image_role: req.file.filename,
  };
  try {
    let result = await CourseSchema.findByIdAndUpdate(req.params.id, newData, {
      new: true,
    });
    res.status(200).json(result);
  } catch (error) {
    res.json(error);
  }
};

const createBagian = async (req, res) => {
  const newData = {
    nomor_bagian: req.body.nomor_bagian,
    judul_bagian: req.body.judul_bagian,
    deskripsi_bagian: req.body.deskripsi_bagian,
    image_bagian: req.file.filename,
  };

  try {
    const dataRole = await CourseSchema.findById(req.params.id);
    dataRole.data_bagian.push(newData);
    const result = await dataRole.save();
    res.status(200).json(result);
  } catch (error) {
    res.json(error);
  }
};

const deleteBagian = async (req, res) => {
  try {
    const dataRole = await CourseSchema.findById(req.params.id);
    const indexBagian = dataRole.data_bagian.findIndex((ele, index) => {
      return ele._id == req.params.idBagian;
    });

    const deletedData = dataRole.data_bagian.splice(indexBagian, 1);
    const result = await dataRole.save();
    res.status(200).json(result);
  } catch (error) {
    res.json(error);
  }
};

const updateBagian = async (req, res) => {
  const newData = {
    nomor_bagian: req.body.nomor_bagian,
    judul_bagian: req.body.judul_bagian,
    deskripsi_bagian: req.body.deskripsi_bagian,
    image_bagian: req.file.filename,
  };

  const newDataBagian = req.body;
  try {
    const dataRole = await CourseSchema.findById(req.params.id);
    const indexBagian = dataRole.data_bagian.findIndex((ele, index) => {
      return ele._id == req.params.idBagian;
    });
    dataRole.data_bagian[indexBagian] = newData;
    const result = await dataRole.save();
    res.json(result);
  } catch (error) {
    res.json(error);
  }
};

const showBagianById = async (req, res) => {
  try {
    const dataRole = await CourseSchema.findById(req.params.id);
    const indexBagian = dataRole.data_bagian.findIndex((ele, index) => {
      return ele._id == req.params.idBagian;
    });

    const result = dataRole.data_bagian[indexBagian];

    res.status(200).json(result);
  } catch (error) {
    res.json(error);
  }
};

const showAllBagian = async (req, res) => {
  try {
    const dataRole = await CourseSchema.findById(req.params.id);
    const result = dataRole.data_bagian;

    res.status(200).json(result);
  } catch (error) {
    res.json(error);
  }
};

const createTutorial = async (req, res) => {
  const newData = req.body;

  try {
    const dataRole = await CourseSchema.findById(req.params.id);
    const indexBagian = dataRole.data_bagian.findIndex(
      (ele, index) => ele._id == req.params.idBagian
    );
    dataRole.data_bagian[indexBagian].data_tutorial.push(newData);
    const result = await dataRole.save();
    res.status(200).json(result);
  } catch (error) {
    res.json(error);
  }
};

const showTutorialById = async (req, res) => {
  try {
    const dataRole = await CourseSchema.findById(req.params.id);
    const indexBagian = dataRole.data_bagian.findIndex(
      (ele, index) => ele._id == req.params.idBagian
    );
    const indexTutorial = dataRole.data_bagian[
      indexBagian
    ].data_tutorial.findIndex((ele, index) => ele._id == req.params.idTutorial);

    const result =
      dataRole.data_bagian[indexBagian].data_tutorial[indexTutorial];
    res.status(200).json(result);
  } catch (error) {
    res.json(error);
  }
};

const deleteTutorial = async (req, res) => {
  try {
    const dataRole = await CourseSchema.findById(req.params.id);
    const indexBagian = dataRole.data_bagian.findIndex(
      (ele, index) => ele._id == req.params.idBagian
    );
    const indexTutorial = dataRole.data_bagian[
      indexBagian
    ].data_tutorial.findIndex((ele, index) => ele._id == req.params.idTutorial);

    dataRole.data_bagian[indexBagian].data_tutorial.splice(indexTutorial, 1);
    dataRole.save();
    res.status(200).json(dataRole);
  } catch (error) {
    res.json(error);
  }
};

const updateTutorial = async (req, res) => {
  const newData = req.body;

  try {
    const dataRole = await CourseSchema.findById(req.params.id);
    const indexBagian = dataRole.data_bagian.findIndex(
      (ele, index) => ele._id == req.params.idBagian
    );
    const indexTutorial = dataRole.data_bagian[
      indexBagian
    ].data_tutorial.findIndex((ele, index) => ele._id == req.params.idTutorial);

    dataRole.data_bagian[indexBagian].data_tutorial[indexTutorial] = newData;
    const result = await dataRole.save();
    res.status(200).json(result);
  } catch (error) {
    res.json(error);
  }
};

const showAllTutorial = async (req, res) => {
  try {
    const dataRole = await CourseSchema.findById(req.params.id);
    const indexBagian = dataRole.data_bagian.findIndex(
      (ele, index) => ele._id == req.params.idBagian
    );

    const result = dataRole.data_bagian[indexBagian].data_tutorial;
    res.status(200).json(result);
  } catch (error) {
    res.json(error);
  }
};

const getAll = async (req, res) => {
  try {
    res.send("haloo");
  } catch (error) {
    res.json(error);
  }
};

module.exports = {
  getAll: getAll,
  // role
  postData: tambahRole,
  showAllData: showAllRole,
  getImage: getImage,
  showRoleById: showRoleById,
  deleteRole: deleteRole,
  editRole: editRole,

  // bagian
  createBagian: createBagian,
  deleteBagian: deleteBagian,
  updateBagian: updateBagian,
  showBagianById: showBagianById,
  showAllBagian: showAllBagian,

  // tutorial
  createTutorial: createTutorial,
  showTutorialById: showTutorialById,
  deleteTutorial: deleteTutorial,
  updateTutorial: updateTutorial,
  showAllTutorial: showAllTutorial,
};
