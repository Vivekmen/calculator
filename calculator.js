const http = require("http");
const url = require("url");


const server = http.createServer((req, res) => {

    const { pathname, query } = url.parse(req.url, true);
    const {first ,second,operator}=query
    const num1=Number(first);
    const num2=Number(second)
    let result
    if(isNaN(first)||isNaN(second)){
        res.writeHead(400, { "Content-Type": "application/json" });
        res.write(JSON.stringify({ msg: "Please Enter valid Number" }));
        res.end();
    }else if(pathname=="/cal" && req.method=="GET"&&query.operator=="sum"){
        result=num1+num2;
        res.writeHead(200, { "Content-Type": "application/json" });
        res.write(JSON.stringify(result))
        res.end();
    }
    else if(pathname=="/cal"&& req.method=="GET"&&query.operator=="sub"){
        result=num1-num2;
        res.writeHead(200, { "Content-Type": "application/json" });
        res.write(JSON.stringify(result))
        res.end();
    }
    else if(pathname=="/cal" && req.method=="GET"&&query.operator=="multiply"){
        
        result=num1*num2;
        res.writeHead(200, { "Content-Type": "application/json" });
        res.write(JSON.stringify(result))
        res.end();
    }
    else if(pathname=="/cal" && req.method=="GET"&&query.operator=="divide"){
        if(num2==0){
            res.writeHead(404, { "Content-Type": "application/json" });
            res.write(JSON.stringify({ msg: "Divison by zero is not allowed" }));
            res.end();
        }else{

            result=num1/num2;
            res.writeHead(200, { "Content-Type": "application/json" });
            res.write(JSON.stringify(result))
            res.end();
        }
    }else{
        res.writeHead(404, { "Content-Type": "application/json" });
        res.write(JSON.stringify({ msg: "Not Found!" }));
        res.end();
    }
});

server.listen(5000, () => {
    console.log("server is running on port 5000");
  });
  