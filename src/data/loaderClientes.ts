import { obtenerClientes } from "./clientes";

export function loader() {

    const clientesApi = obtenerClientes()

    return clientesApi
  }
  