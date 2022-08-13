import _express,{Request, Response, Router} from 'express';
import {UsuarioUseCase} from './aplicacion/usuario.usecase';
import { UsuarioModel } from './infraestructura/model/usuario.model';
//import {Exercis} from '../negocio/Exercis.negocio';
const router = Router();
const modeluser:UsuarioModel = new UsuarioModel();

router.post('/users', async (req:Request, res:Response) => {
  let username = req.body.username;
  let result = await new UsuarioUseCase(modeluser).createUsuario({username});
  res.json(result);
});

router.get('/users', async (_req: Request, res: Response) => {
  let result = await new UsuarioUseCase(modeluser).getUsers();
  res.json(result);
});

export default router;