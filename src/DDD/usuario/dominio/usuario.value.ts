import compruJson from '../../../validatorJson';
//import {ExcersiseAdapter} from './excersi.adapter';
import {UsuarioEntity} from "./usuario.entity";
import { ExcersiseValue } from "../../excersise/dominio/excersi.value";

export class UsuarioValue implements  UsuarioEntity{
  
  id:String;
  name:String;
  count?:Number;
  log:ExcersiseValue[] = [new ExcersiseValue()];
  
  constructor(id:String = "", name:String = "", log:ExcersiseValue[] = []){
    this.id = id;
    this.name = name;
    this.count = log.length;
    this.log = log;
  }

  fromJson(json:any):UsuarioValue {
    let idus:String = compruJson('_id',json,"").toString();
    let nameus:String = compruJson('username',json,'');
    let logus:[] = compruJson('log',json, []).map((item:any) => new ExcersiseValue().fromJson(item));
    return new UsuarioValue(idus , nameus, logus);
  }

  toJson(){
    return {
      _id: this.id,
      username: this.name,
      count: this.count,
      log: this.log
    };
  }
}