import { UsuarioValue } from "../../usuario/dominio/usuario.value";
import { ExcersiRepository } from "../dominio/excersi.repository";
import { ExcersiseValue } from "../dominio/excersi.value";

export class ExcersiUseCase{
    Excersmodel: ExcersiRepository;

    constructor(interfacemodel: ExcersiRepository){
        this.Excersmodel = interfacemodel;
    }

    async createExcersice({id,descripccion,duracion,date}:{id:String,descripccion:String,duracion:Number,date:VarDate}){
        // validaciones
        if (new Date(date).toDateString() === "Invalid Date"){
          if (typeof date != typeof undefined) return console.log({error: "Error de fecha"});
        }
        // modificaciones
        let dataDate = date ? 'Mon Jan 01 1990' : new Date((Date.now())).toDateString();
        let duration = duracion;
        // consulta
        let aserAdapter = new UsuarioValue(id,"",[new ExcersiseValue(descripccion, duration , dataDate)]);
        let result = await this.Excersmodel.createExcersi(aserAdapter);
        return result;
      }
    
      async getUserByIdWhitlog ({id}:{id:String}){
        let datause = new UsuarioValue(id);
        let data = await this.Excersmodel.getUserByIdWhitlog(datause);
        return data;
      }
}