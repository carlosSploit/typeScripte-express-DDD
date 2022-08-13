import _express,{Request, Response, Router} from 'express';
import {ExcersiUseCase} from '../../DDD/excersise/aplicacion/exercis.usecase';
import ExcersiModel from './infraestructura/model/exerci.model';
const router = Router();
const excerModel: ExcersiModel = new ExcersiModel();

router.get('/users/:_id/logs', async (req: Request, res: Response) => {
  let id = req.params._id;
  let result = await new ExcersiUseCase(excerModel).getUserByIdWhitlog({id});
  res.json(result);
});

router.post('/users/:_id/exercises', async (req: Request, res: Response) => {
  let id = req.params._id;
  let descripccion = req.body.description;
  let duracion = parseInt(req.body.duration);
  let date = req.body.date;
  let result = await new ExcersiUseCase(excerModel).createExcersice({id, descripccion, duracion, date});
  res.json(result);
});

export default router;