const mongoose = require('mongoose');
const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3000

mongoose.connect('mongodb://127.0.0.1:27017/project_bd', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB Connected'))
.catch(err => console.log(`MongoDB Connection Error: ${err}`));

const server = http.createServer(function (request, response) {
  response.setHeader('Content-Type', 'text/html');

  const createPath = (page) => {return path.resolve(__dirname, 'views', `${page}.html`)};

  let basePath = '';

  switch (request.url){
    case '/':
      basePath = createPath('index');
      break;
    case '/dram':
      basePath = createPath('dram');
      break;
    case '/druzhba':
      basePath = createPath('druzhba');
      break;
    case '/fila':
      basePath = createPath('fila');
      break;
    default:
      basePath = createPath('index');
      break
  }

  
  fs.readFile(basePath, (err, data) => {
    if(err){
      console.log(err);
      response.statusCode = 500;
      response.end('Internal Server Error');
    }
    else{
      response.setHeader('Content-Type', 'text/html');
      response.statusCode = 200;
      response.write(data);
      response.end();
    }
  })
})

server.listen(PORT, '127.0.0.1', (error) => {error ? console.log(error) : console.log(`Server running at http://127.0.0.1:${PORT}/`);});