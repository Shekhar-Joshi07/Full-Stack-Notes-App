const express = require("express")
const {connection} = require("./db")
const {userRouter} = require("./routes/User.routes")
const {notesRouter} = require("./routes/Notes.routes")
const {authenticate} = require("./middlewares/authenticate.middleware")
const cors = require("cors")
require("dotenv").config();
const app = express()

app.use(express.json())
app.use(cors())

app.get("/",(req,res)=>{
    res.send("Home Page")
})


app.use("/users",userRouter)
app.use(authenticate)
app.use("/notes",notesRouter)

app.listen(8080,async()=>{
    try {
        await connection
        console.log("Connected to DB");
    } catch (error) {
        console.log(error.message)

    }
    console.log(`Server is running at pot ${process.env.PORT}`);
})