import express from 'express';
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));


import index from './routes/index.js';
import home from './routes/home.js';
import multiPlay from './routes/multiPlay.js';
import play from './routes/play.js';
import result from './routes/result.js';
import multiResult from './routes/multiResult.js';

app.use('/', home);
app.use('/', index);
app.use('/', play);
app.use('/', multiPlay);
app.use('/', result);
app.use('/', multiResult);



app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});
export default app;