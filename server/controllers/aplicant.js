const Applicant = require("../models/aplicant");
const path = require("path");


exports.aplicantHome = (req, res) => {
    res.json("Hello Aplicant")
};

exports.enteringAuth = (req, res) => {
    res.json({ process: "Entrando al proceso de autenticación" });
};

exports.loggin = (req, res) => {
    // TODO: After we load some data into DB, make ops to verify user existance
    res.json({ identity: req.body.identity, password: req.body.password });
};

exports.createAndSaveApplicant = (req, res) => {
    if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).send('No files were uploaded.');
    }

    // console.log(req.files)
    // const directoryPath = path.dirname(__dirname);
    // for (let sampleFile of req.files.files) {
    //     console.log(sampleFile)
    //     sampleFile.mv(directoryPath + "/files" + sampleFile.name, (err) => {
    //         if (err) console.log(err);
    //         console.log("File has been uploaded succesfully")
    //     })
    // }


    const newApplicant = new Applicant({
        // Credentials and personal Info
        identification: req.body.identification,
        name: req.body.name,
        lastName: req.body.lastName,
        userName: req.body.userName,
        email: req.body.email,
        password: req.body.password,
        phoneNumber: req.body.phoneNumber,
        telephone: req.body.telephone,
        // Academic
        location: req.body.location,
        academic: req.body.academic,
        // Aplication
        workingExperience: req.body.workingExperience,
        ableToTransfer: req.body.ableToTransfer,
        ableToWorkExtraHours: req.body.ableToWorkExtraHours,
        // files
        files: req.files.files
    });

    console.log(newApplicant)

    newApplicant.save().then((data) => {
        res.status(201).json("User received and created successfully wit id of: ", data._id);
    }).catch((err) => {
        res.status(504).json({ error: err });
    });;
};