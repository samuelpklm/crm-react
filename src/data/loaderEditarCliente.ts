
type Cliente = {
  id: number,
  nombre: string,
  telefono: number,
  email: string,
  empresa: string,
  notas: string
}

type SalidaAction = {
  error: string[];
  salida: string;
}
import { redirect } from "react-router-dom";
// type Props = {}

import { aztualizarCliente, obtenerCliente } from "./clientes"

export async function loaderEditarCliente({params} : {params: any}) {
  
  const cliente = await obtenerCliente(params.clienteId);
  if(Object.values(cliente).length === 0){
    throw new Response('', {
      status: 404,
      statusText: 'El cliente no fue encontrado'    
    })
  }
    
    return cliente
}

export async function actionEditarCliente({request, params} : {request: any, params: any}) {
  
  const formData = await request.formData();
  const datos = Object.fromEntries(formData) as Cliente;

  const email = formData.get('email');

  const errores = [];


  const regex = new RegExp("([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|\"([]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|[[\t -Z^-~]*])");
  

  if(Object.values(datos).includes('')){
    errores.push('Todos los campos son obligatorios');
  } 
  if(!regex.test(email)){
    errores.push("Email invalido");
  }
  
  console.log(errores);
   const objeto: SalidaAction = {
     error: errores,
     salida: 'Hola'
   }

  await aztualizarCliente(params.clienteId, datos)
 

   if(objeto.error.length){
    return objeto
   } else{
    return redirect('/')
   }
    

}