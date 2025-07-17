import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: String,
    email: {type: String, unique: true},
    image: String,
    createdAt: {type: Date, default: Date.now}
})

export default mongoose.models.Users || mongoose.model('User', userSchema);