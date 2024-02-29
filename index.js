// default module export
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const router = require("./routes/edutrenRoutes");

// module inisiation
const app = express();
app.use(cors());
app.use(express.json()); // Use express.json() middleware
app.use("/api", router);
// database connection
mongoose.connect("mongodb://localhost:27017/baplischool");
mongoose.connection.on("connected", () => console.log("Koneksi berhasil!"));
mongoose.connection.once("error", () => console.log("Koneksi Error!"));
// javascript variable
const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Running on localhost://${PORT}`);
});
