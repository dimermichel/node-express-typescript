import express from 'express';
import {helloWorld} from './routes'
const app = express();

app.get('/', helloWorld);
const port = process.env.PORT || 3000;
console.log(`Server running on port: ${port}`)
app.listen(port)