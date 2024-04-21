import mongoose from "mongoose";

const scheduleSchema = new mongoose.Schema({
    doctor_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Doctor",
        required: true
    },
    day_of_week: {
        type: String,
        enum: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        required: true
    },
    start_time: {
        type: String,
        required: true
    },
    end_time: {
        type: String,
        required: true
    },
    available_slots: {
        type: Number,
        required: true
    }
});

const schedule = mongoose.model("Schedule", scheduleSchema);

export default schedule;
