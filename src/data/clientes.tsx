type Cliente = {
  id: number,
  nombre: string,
  telefono: number,
  email: string,
  empresa: string,
  notas: string
}

export async function obtenerClientes(){

    const respuesta = await fetch(import.meta.env.VITE_API_URL)
    const resultado = await respuesta.json()

   return resultado
}

export async function obtenerCliente(id: string){

  const respuesta = await fetch(`${import.meta.env.VITE_API_URL}/${id}`)
  const resultado = await respuesta.json()

 return resultado
}

export async function agregarCliente(datos: any){

  try{
    const respuesta = await fetch(import.meta.env.VITE_API_URL, {
      method: 'POST',
      body: JSON.stringify(datos),
      headers: {
        'Content-type' : 'application/json'
      }
    })
    await respuesta.json()
  } catch (error){
    console.log(error)
  }
}

export async function aztualizarCliente(id: string, datos: Cliente){

  try{
    const respuesta = await fetch(`${import.meta.env.VITE_API_URL}/${id}`, {
      method: 'PUT',
      body: JSON.stringify(datos),
      headers: {
        'Content-type' : 'application/json'
      }
    })
    await respuesta.json()
  } catch (error){
    console.log(error)
  }
}

export async function eliminarCliente(id:any){

  try{
    const respuesta = await fetch(`${import.meta.env.VITE_API_URL}/${id}`, {
      method: 'DELETE',
     
    })
    await respuesta.json()
  } catch (error){
    console.log(error)
  }


}




