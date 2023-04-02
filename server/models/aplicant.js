const mongoose = require("mongoose");

const applicantSchema = new mongoose.Schema({
    // Credentials and personal Info
    identification: String,
    name: String,
    lastName: String,
    userName: String,
    email: String,
    password: String,
    phoneNumber: String,
    telephone: String,
    // Location
    location: {
        country: String,
        state: String,
        city: String
    },
    // Academic
    academic: {
        escolarity: String,
        title: String,
        certifications: String,
        englishSecondLang: {
            handle: Boolean,
            fluentness: { speaking: String, writingListening: String }
        }
    },
    // Aplication
    workingExperience: String,
    ableToTransfer: Boolean,
    ableToWorkExtraHours: Boolean,
    // files
    files: [{ name: String, data: Buffer }]
});

module.exports = mongoose.model("Aplicant", applicantSchema); 