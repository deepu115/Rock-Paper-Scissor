import express from 'express';
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));


import index from './routes/index.js';
import play from './routes/play.js';
import result from './routes/result.js';


app.use('/', index);
app.use('/', play);
app.use('/', result);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});
