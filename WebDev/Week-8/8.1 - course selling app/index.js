const express = require("express")
const mongoose = require("mongoose")
const {userRouter} = require("./routes/users")
const {courseRouter} = require("./routes/courses")
const {adminRouter} = require("./routes/admin")
const app = express()

app.use("/user", userRouter)
app.use("/courses", courseRouter)
app.use("/admin", adminRouter)
app.use(express.json())


// only starts if database is UP
async function main() {
    await mongoose.connect("mongodb+srv://arjunnair101105:Arjun101105@cluster0.sjcyi.mongodb.net/Course-selling-App")
    app.listen(3000)
    console.log(`listening on port 3000 ...`);
}

main()