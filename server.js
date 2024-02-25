import {} from "dotenv/config";

import express from "express";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";
import path from "path";
import fs from 'fs';

const app = express();

const _filename = fileURLToPath(import.meta.url);
const _dirname = path.dirname(_filename);
app.use(express.static(path.join(_dirname + "../static")));
app.use(express.static("static"));
app.use(express.static("static/css"));
app.use(express.static("static/images"));

app.set("view engine", "ejs");

app.get("/", function (req, res) {
    res.render("index");
});

app.get("/courses", async (req, res) => {
    res.render("courses");
});

app.get("/home", (req, res) => {
    res.render("courses");
});

app.get("/about", (req, res) => {
    res.render("about");
});

app.get("/team", (req, res) => {
    res.render("team");
});

app.get("/contact", (req, res) => {
    res.render("contact");
});

app.get("/register", (req, res) => {
    res.render("register");
});

app.listen(3000);