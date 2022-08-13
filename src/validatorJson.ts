export default (value:any, json:any ,initValue:any ) =>{
  if(typeof json == typeof undefined || typeof value == typeof undefined) return initValue ;
  return json.hasOwnProperty(value) ? json[value] : initValue ;
}