import mongoose, { model, Schema } from "mongoose";

mongoose.connect("mongodb+srv://arjunnair101105:Arjun101105@second-brain-app.sjcyi.mongodb.net/brainly")

const UserSchema = new Schema({
    username: {type:String, unique:true},
    password: String
})

const ContentSchema = new Schema({
    title: String,
    link: String,
    tags:[{type:mongoose.Types.ObjectId, ref:"Tags"}],
    userId:{type:mongoose.Types.ObjectId, ref:"Users",required:true}
})

export const ContentModel = model("Content", ContentSchema)
export const UserModel = model("Users", UserSchema)