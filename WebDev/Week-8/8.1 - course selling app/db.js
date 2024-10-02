const mongoose = require("mongoose")
const admin = require("./routes/admin")
const { number, object } = require("zod")
const Schema = mongoose.Schema

const ObjectId = mongoose.ObjectId

const userSchema = new Schema({
    // userId: ObjectId,
    email: String,
    password: String,
    firstName: String,
    lastName: String
})

const adminSchema = new Schema({
    // adminId: ObjectId,
    email: String,
    password: String,
    firstName: String,
    lastName: String
})

const courseSchema = new Schema({
    // courseId: ObjectId,
    title: String,
    description: String,
    price: Number,
    imageUrl: String,
    creatorId: ObjectId
})

const purhcaseSchema = new Schema({
    // purhcaseId: ObjectId,
    courseId: ObjectId,
    userId: ObjectId
})

const userModel = mongoose.model("user", userSchema)
const adminModel = mongoose.model("admin", adminSchema)
const courseModel = mongoose.model("course", courseSchema)
const purchaseModel = mongoose.model("purchase", purhcaseSchema)

module.exports = {
    userModel,
    adminModel,
    courseModel,
    purchaseModel
}