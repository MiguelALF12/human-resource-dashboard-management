const path = require("path");
const express = require("express");
const router = express.Router();
const fileUpload = require('express-fileupload');
const applicantController = require("../controllers/aplicant");


const directoryPath = path.dirname(__dirname);
router.use(fileUpload({
    useTempFiles: true,
    tempFileDir: directoryPath + '/tmp/', preserveExtension: true
}));
router.get("/auth/loggin", applicantController.loggin);
router.post("/auth/register", applicantController.createAndSaveApplicant);
router.get("/", applicantController.aplicantHome);

module.exports = router;