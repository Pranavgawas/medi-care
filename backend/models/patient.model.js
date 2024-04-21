import mongoose from "mongoose";

const patientSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    medical_history: {
        type: String
    }
});

const patient = mongoose.model("Patient", patientSchema);

export default patient;
