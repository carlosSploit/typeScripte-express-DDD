import compruJson from '../../../validatorJson';
import { ExcersiseEntity } from "./excersi.entity";

export class ExcersiseValue implements ExcersiseEntity{

  description: String;
  duration: Number;
  date: String;
  
  constructor(description:String = "", duration:Number = 0, date:String = ""){
    this.description = description;
    this.duration = duration;
    this.date = date;
  }

  fromJson(json: Object):ExcersiseValue {
    let description:String = compruJson('description',json,'');
    let duration:Number = compruJson('duration',json,0);
    let date:String = compruJson('date',json,new Date(Date.now()).toDateString());
    return new ExcersiseValue(description,duration,date);
  }

  toJson():Object {
    return {
      description: this.description,
      duration: this.duration,
      date: this.date
    };
  }
  
}