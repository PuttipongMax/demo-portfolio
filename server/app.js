import express from "express";
import cors from "cors";
import images from "./api/images.js";

const app = express();
const port = process.env.PORT || 5000;
// middleware
app.use(cors());

app.get("/", (req, res) => {
    res.send("Server is running!");
});

app.get("/images", (req, res) => {
    res.json({ data: images })
});  



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});
