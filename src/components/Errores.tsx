
type Props = {
    children: string | JSX.Element | JSX.Element[];
}

const Errores:React.FC<Props> = props => {
  return (
    <div className="text-center my-4 bg-red-400 text-white font-bold p-3 uppercase">
        {props.children}
    </div>
  )
}

export default Errores