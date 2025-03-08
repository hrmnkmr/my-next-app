const jsonServer = require('json-server'); // ローカルインストールされたjson-serverを読み込む
const cors = require('cors');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

// CORSを許可
server.use(cors());
server.use(middlewares);
server.use(router);

server.listen(3005, () => {
  console.log('JSON Server is running on http://localhost:3005');
});
