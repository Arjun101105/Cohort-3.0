import mongoose, { model, Schema } from "mongoose";

mongoose.connect("mongodb+srv://arjunnair101105:Arjun101105@second-brain-app.sjcyi.mongodb.net/brainly")

const UserSchema = new Schema({
    username: {type:String, unique:true},
    password: String
})

export const UserModel = model("Users", UserSchema)