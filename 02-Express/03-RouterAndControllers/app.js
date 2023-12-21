import express from 'express';
import uma from './router-.js'
const app = express();

app.use('/router-test/',uma)
const port = 3000
app.listen(port);