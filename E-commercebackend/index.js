const express = require("express")
const { AllRoutes } = require("./routes/index")
const { Variables } = require("./common/variables");

const app = express()

console.log(express.json())

app.use(express.json())

app.use("/api", AllRoutes)

app.listen(Variables.PORT, () => {
    console.log(`Server is Running :- ${Variables.PORT}`)
})