import express from 'express';
import fs from 'fs';
import path from 'path';
import React from "react";
import ReactDOMServer from "react-dom/server";
import App from './entry-server'

const app = express();

let template = fs.readFileSync("./dist/index.html", "utf-8");

// 静态资源映射到dist路径下
app.use("/dist", express.static(path.join(__dirname, "../dist")));
app.use("/public", express.static(path.join(__dirname, "../public")));

const render = (req, res) => {
    let html = ReactDOMServer.renderToString(<App />);
    let htmlStr = template.replace('<!--react-ssr-outlet-->', html);
    res.send(htmlStr);
}


app.get("*", render);

app.listen(3001, () => {
    console.log("Your app is running at port 3001");
});
