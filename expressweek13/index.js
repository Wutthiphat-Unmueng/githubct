import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("<h1>Hello World!</h1>");
    //console.log(req);
});
app.get("/about", (req, res) => {
    res.send("<h1>My Name is Wutthiphat Unmueng</h1>");
    //console.log(req);
});
app.get("/contact", (req, res) => {
    res.send(`
        <img src="/1.jpg" alt="Image not found"/>
        <h1>Wutthiphat Unmueng</h1>
    `);
});

app.listen(port, () =>{
    console.log("Server running on port 3000.");
});