import { redirect } from "react-router-dom";
import { agregarCliente } from "./clientes";

type SalidaAction = {
  error: string[];
  salida: string;
}

export async function action({request}: {request:any}){

    
    const formData = await request.formData();
    const datos = Object.fromEntries(formData);

    const email = formData.get('email');

    const errores = [];


    const regex = new RegExp("([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|\"([]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|[[\t -Z^-~]*])");
    

    if(Object.values(datos).includes('')){
      errores.push('Todos los campos son obligatorios');
    } 
    if(!regex.test(email)){
      errores.push("Email invalido");
    }
    

     const objeto: SalidaAction = {
       error: errores,
       salida: 'Hola'
     }

    if(!objeto.error.length){
      await agregarCliente(datos)
    }
    
   
    if(objeto.error.length){
      return objeto
     } else{
      return redirect('/')
     }
  }
  