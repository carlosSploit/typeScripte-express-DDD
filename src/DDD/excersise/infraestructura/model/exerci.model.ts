import excersiSchema from '../Schema/excersi.schema';
import bdmongo from '../../../../lib/bdconnet.mongo';
import { UsuarioModel } from '../../../usuario/infraestructura/model/usuario.model';
import { ExcersiRepository } from '../../dominio/excersi.repository';
import { ExcersiseValue } from '../../dominio/excersi.value';
import { UsuarioValue } from '../../../usuario/dominio/usuario.value';

export default class ExcersiModel implements ExcersiRepository{
    
  async createExcersi(UserAdapt: UsuarioValue){
    let data = await new UsuarioModel().getUserById(UserAdapt);
    let objdata:UsuarioValue = new UsuarioValue().fromJson(data);
    console.log(objdata.toJson());
    await bdmongo();
    let ExcersiSchema:ExcersiseValue = UserAdapt.log[0];
    console.log(ExcersiSchema.toJson());
    let objExercis = new excersiSchema({
      username : objdata.name ,
      description: ExcersiSchema.description,
      duration: ExcersiSchema.duration,
      date: ExcersiSchema.date
    });

    let result = await new Promise((resol,reject) => {
      objExercis.save(function (err,excers) {
        if (err) reject(err);
        let aaux = excers;
        resol(aaux);
      });
    }); 
    return result; 
  }

  async getExercisByName(UserAdapter: UsuarioValue , {limit}:{limit:undefined}): Promise<any[]> {
    await bdmongo();
    let data:any[] = await new Promise((resol,reject)=>{
      excersiSchema
        .find({username: UserAdapter.name})
        .limit((limit == undefined)? 0: limit)
        .select(['-_id','description','duration','date'])
        .exec(function (err,exerc) {
          if (err) reject(err);
          resol(exerc);
        });
    });
    return data;
  }

  async getUserByIdWhitlog (UserAdapter: UsuarioValue){
    let data = await new UsuarioModel().getUserById(UserAdapter);
    let auxUserAdapter = new UsuarioValue().fromJson(data);
    await bdmongo();
    let listExcersis:any[] = await this.getExercisByName(auxUserAdapter,{limit: undefined});
    auxUserAdapter.count = listExcersis.length;
    auxUserAdapter.log = listExcersis;
    return auxUserAdapter.toJson();
  }
  
}