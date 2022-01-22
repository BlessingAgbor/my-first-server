const http = require("http")
// const port = 2042;

// const app = http.createServer((req, res) => {
//     res.end("server");
// });
// app.listen(port, () => {
//     console.log("listening on port " + port);
// });

const nwport = 2020;
http.createServer((req, res) => {
    res.write("My new server")
    res.end (); 
}).listen(nwport, () => {
    console.log("listening on port" + nwport)
})


const port = 5050
const text = (req, res) => {
    res.write("This is my New server");
    res.end();
}
const server1 = http.createServer(text)

server1.listen(port)

const 
