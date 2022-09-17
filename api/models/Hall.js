import mongoose from "mongoose";
const HallSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    hall: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    photos: {
        type: [String],
    },
    desc: {
        type: String,
        required: true,
    },
    rooms: {
        type: [String],
    },
    capacity: {
        type: Number,
        required: true,
    },
});

export default mongoose.model("Hall", HallSchema);
