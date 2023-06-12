
// type Props = {}

import { redirect } from "react-router-dom";
import { eliminarCliente } from "./clientes";

export async function action({params}: {params:any}) {

  await eliminarCliente(params.clienteId);
  return redirect('/');
}
