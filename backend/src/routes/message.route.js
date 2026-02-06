import express from "express";

const router = express.Router();

router.get("/send", (req, res) => {
    res.send("Send Message EndPoint")
})

router.get("/get", (req, res) => {
    res.send("Get Message EndPoint")
})


export default router;