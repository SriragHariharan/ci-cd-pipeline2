const app = require('./app');
const cors = require('cors');

app.use(cors());

app.listen(4000, ()=> console.log("server listening on 4000"))