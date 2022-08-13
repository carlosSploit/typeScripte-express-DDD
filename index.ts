import express, {Request, Response, Express} from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import dontenv from 'dotenv';
// ---------- routers
import apiUse from './src/DDD/usuario/usuario.app';
import apiExc from './src/DDD/excersise/excersise.app';

dontenv.config();
const app:Express = express();

app.use(cors())
app.use(express.static('src/public'))
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (_req:Request, res:Response) => {
  res.sendFile(__dirname + '/src/views/index.html');
});

app.use('/api',apiUse);
app.use('/api',apiExc);

app.listen(process.env.PORT || 3000, () => {
  console.log('Your app is listening on port ' + process.env.PORT)
})
