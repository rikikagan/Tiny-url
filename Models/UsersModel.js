import mongoose from "mongoose";
import LinksModel from "./LinksModel.js";

const UserSchema = mongoose.Schema({
  name: String,
  email: String,
  password: String,
  links: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'LinksModel'
  }]
});
const UsersModel = mongoose.model('users', UserSchema);

export default UsersModel;

  