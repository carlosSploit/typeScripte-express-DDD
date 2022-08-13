import { UsuarioRepositorio } from "../dominio/usuario.repositorio";
import { UsuarioValue } from "../dominio/usuario.value";

export class UsuarioUseCase{
  modelUsuario: UsuarioRepositorio;

  constructor(interfamodel: UsuarioRepositorio){
    this.modelUsuario = interfamodel;
  }

  async createUsuario({username}:{username:String}){
    let result = await this.modelUsuario.createUsuario(new UsuarioValue().fromJson({username}));
    return result;
  }

  async getUsers(){
    let result = await this.modelUsuario.getUsers();
    return result;
  }

}