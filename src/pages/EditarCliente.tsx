
// type Props = {}
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

import { Form, useActionData, useLoaderData, useNavigate } from "react-router-dom"
import Errores from "../components/Errores";
import Formulario from "../components/Formulario"


const EditarCliente:React.FC = () => {

const navigate = useNavigate();
const cliente = useLoaderData() as Cliente;
const errores = useActionData() as SalidaAction;




  return (
    <>
      <h1 className="font-black text-4xl text-blue-900">Editar Cliente</h1>
      <p className="mt-3">A continuacion podrás modificar los datos de un cliente</p>

      <div className="flex justify-end">
        <button
          className="bg-blue-800 text-white px-3 py-1 font-bold uppercase"
          onClick={() => navigate(-1)}
        >
          Volver
        </button>
      </div>
      <div className='bg-white shadow rounded-md md:w-3/4 mx-auto px-5 py-10 mt-20'>
        {/* {errores.error ? errores.error.map((error, i) => <Errores key={i} children={error}/>):''} */}
         {errores ? errores.error.length ?
                    errores.error.map((error, i) => (<Errores key={i} children={<p>{error}</p>}/>)) :
                    ''
                 :
                 ''
          }  
        <Form
          method='post'
          noValidate
        >
          <Formulario cliente={cliente}/>
          <input
            type="submit"
            className='mt-5 w-full bg-blue-800 p-3 uppercase font-bold text-white text-lg cursor-pointer'
            value="Registrar Cliente"
          />
        </Form>
      </div>
    </>
  )
}

export default EditarCliente