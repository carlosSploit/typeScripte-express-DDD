import { UsuarioValue } from "../../usuario/dominio/usuario.value";

export interface ExcersiRepository{
    
    createExcersi(UserAdapt: UsuarioValue):Promise<any>;
    getExercisByName(UserAdapter: UsuarioValue , {limit}:{limit:undefined}): Promise<any>;
    getUserByIdWhitlog (UserAdapter: UsuarioValue):Promise<any>;

}