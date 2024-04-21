import mongoose from "mongoose";

const doctorSchema = new mongoose.Schema({
    FullName: {
        type: String,
        required: true
    },
    specialization: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    max_patients_per_day: {
        type: String,
        required: true,
    }
});

const doctor = mongoose.model("Doctor", doctorSchema);

export default doctor;
