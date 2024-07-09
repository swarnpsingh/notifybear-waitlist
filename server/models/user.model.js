import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  googleId: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  // email: {
  //   type: String,
  //   required: true,
  //   unique: true,
  // },
  picture: {
    type: String,
  },
  channelData: {
    type: Object,
  },
});

const User = mongoose.model("User", UserSchema);

export default User;