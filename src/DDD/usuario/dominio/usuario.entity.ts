import { ExcersiseValue } from "../../excersise/dominio/excersi.value";

export interface UsuarioEntity{
    id:String;
    name:String;
    count?:Number;
    log:ExcersiseValue[];
}