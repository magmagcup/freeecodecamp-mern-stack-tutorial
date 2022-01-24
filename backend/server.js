import express from "express"
import cors from "cors"
import restuarants from "./api/restaurants.route.js"

const app = express()

app.use(cors())
app.use(express.json())

//Indicate root
app.use("/api/v1/restaurants", restuarants)
app.use("*", (req, res) => res.status(404).json({ error: "Not found" }))

export default app