import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
    res.send("Hello World from routes");
});

router.get("/about", (req, res) => {
    res.send("Hello World from about");
});

router.get("/contact", (req, res) => {
    res.send("Hello World from contact");
});

router.get("/profile", (req, res) => {
    res.send("Hello World from profile");
});

export default router;