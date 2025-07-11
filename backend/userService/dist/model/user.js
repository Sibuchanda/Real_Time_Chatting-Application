import mongoose, { Schema } from 'mongoose';
const schema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
}, {
    timestamps: true,
});
const User = mongoose.model("User", schema);
export default User;
