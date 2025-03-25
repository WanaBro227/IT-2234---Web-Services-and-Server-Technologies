# Node.js Server Project

This repository contains a simple Node.js project demonstrating server setup, module imports, and handling HTTP requests.

## Files Overview

### 1. `Server.js`
- Sets up a basic Node.js server using the `http` module.
- Listens for incoming requests and responds with appropriate messages.
- Example of handling different request routes.

#### Example Code:
```js
const http = require('http');
const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello, World!');
});
server.listen(3000, () => console.log('Server running on port 3000'));
```

### 2. `ImportModule.js`
- Demonstrates how to import and use custom modules in Node.js.
- Uses `require` or `import` to bring in external files or npm packages.

#### Example Code:
```js
const myModule = require('./myModule');
console.log(myModule.greet('User'));
```

### 3. `package.json`
- Contains project metadata and dependencies.
- Defines scripts, dependencies, and package versions.
- Helps manage package installation and project setup.

### 4. `package-lock.json`
- Locks package versions for consistency across installations.
- Ensures the project dependencies remain unchanged unless manually updated.

### 5. `node_modules/`
- Directory containing installed dependencies.
- Automatically created when running `npm install`.
- Should be excluded from Git repositories using `.gitignore`.

## How to Run

### Install Dependencies
Make sure you have Node.js installed. Then, run:
```sh
npm install
```

### Start the Server
To run the Node.js server, use:
```sh
node Server.js
```

### Expected Output
- The server should start and listen on a specified port (default: 3000).
- Open a web browser or use Postman to access `http://localhost:3000`.
- The response should display:
```
Hello, World!
```

### Testing the Import Module
If `ImportModule.js` imports a function from another file, run:
```sh
node ImportModule.js
```
- It should log output based on the imported module's function.

## Additional Features
- Modify `Server.js` to handle different routes such as `/home` and `/about`.
- Use `fs` module to read and serve HTML files.
- Implement an API using `express.js` for advanced request handling.
