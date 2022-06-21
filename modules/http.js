const http = require("http");
const { rawListeners } = require("process");

const port = 8080;

const server = http.createServer((req, res ) => {
      if (req.url === '/home') {
           res.writeHead(200,  { "Content-type":  "text/html" });         
          res.end("<h1>home page</h1>") ;    
      }       
      if (req .url === '/users'){
          const users = [
         {
                name : " Jonh Doe  ",
                email: 'jonh@doe.com',
          },
          {
                    name:  'jane doe',
                    email: ' jane@doe.com',
          },
    ]; 
     res.writeHead(200, {'Content-type': "application/json"});
     res.end(JSON.stringify(users))
      }

});
server.listen(port, ( ) => console.log (`Rodando na porta ${port}!`))