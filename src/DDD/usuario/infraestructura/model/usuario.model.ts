import usuarioSchema from '../schema/usuario.schema';
import {UsuarioValue} from '../../dominio/usuario.value';
import bdmongo from '../../../../lib/bdconnet.mongo';
import { CallbackError } from 'mongoose';

export class UsuarioModel{
    
  async createUsuario(UserAdap: UsuarioValue){
    await bdmongo();
    let objuser = new usuarioSchema({ username : UserAdap.name });
    let result = await new Promise((resol,reject)=>{
        objuser.save(function (err: CallbackError ,data) {
          if (err) reject(err);
          let Usdata = new UsuarioValue().fromJson(data.toJSON()).toJson();
          resol(Usdata);
        });
    });
    return result;
  }

  async getUserById (UserAdap: UsuarioValue){
    await bdmongo();
    let dataPrint = await new Promise((resol,rejec) => {
      usuarioSchema.findById(UserAdap.id ,(err: CallbackError,data: any) => {
        if (err) rejec(err);
        let Usdata = new UsuarioValue().fromJson(data.toJSON()).toJson();
        resol(Usdata);
      });
    });
    return dataPrint;
  }

  async getUsers () {
    await bdmongo();
    let result = await new Promise((resol,reject) => {
      usuarioSchema.find((err: CallbackError ,data) => {
        if (err) reject(err);
        resol(data.map((item) => {
          let Usdata = new UsuarioValue().fromJson(item.toJSON()).toJson();
          return Usdata ;
        }));
      });
    });
    
    return result;
  }

}