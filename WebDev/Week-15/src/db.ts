import mongoose, { model, Schema } from "mongoose";

mongoose.connect("mongodb+srv://arjunnair101105:Arjun101105@second-brain-app.sjcyi.mongodb.net/brainly")

const UserSchema = new Schema({
    username: {type:String, unique:true},
    password: String
})

const ContentSchema = new Schema({
    title: String,
    link: String,
    type:String,
    tags:[{type:mongoose.Types.ObjectId, ref:"Tags"}],
    userId:{type:mongoose.Types.ObjectId, ref:"Users",required:true}
})

const LinkSchema = new Schema({
    hash: String,
    userId: {type:mongoose.Types.ObjectId, ref:"Users",required:true, unique:true}
})

export const LinkModel = model("Links", LinkSchema)
export const ContentModel = model("Content", ContentSchema)
export const UserModel = model("Users", UserSchema)