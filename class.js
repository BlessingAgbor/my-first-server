const http = require('http');
const port = 2000;
const fs = require('fs');
const obj= [
    {name: "luciana"},
    {class: "secondary"},
    {food: "rice, beans, yam"}
    
];

http.createServer( (req, res) => {
// res.setHeader("content-type", "text/plain")
// res.setHeader("content-type", "Application/JSON")
// res.setHeader("content-type", "text/html")
// res.end("<h1>One stroke more</h1>\n<h1>the is great</h1>")
fs.readFile("./index.html", (error, data) =>{
if(error){
    console.log("can't read file" + error)
}else {
    res.setHeader("content-type", "text/html")
    res.end(data)
}
})
}).listen(port, ()=> {
    console.log("listening on port" + port)
})

// const app =() => {

// }