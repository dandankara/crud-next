interface FormProps {
  cliente: Cliente
  changeClient?: (cliente: Cliente) => void
  cancel?: () => void
}

import React, {useState} from 'react'
import Cliente from '../core/Cliente'
import Button from './Button'
import Entry from './Entry'

export default function Formulario(props:FormProps) {
  //Pega a variável id do cliente na TableClient
  const id = props.cliente?.id
  const [Nome, setNome] = useState(props.cliente?.nome ?? '')
  const [Idade, setIdade] = useState(props.cliente?.idade ?? 0)
  
  return (
    <div>
      {id ? (
        <Entry text="Código" valor={id } somenteRead />
      ) : false}
      
      <Entry text="Nome" valor={Nome} ValueChanged={setNome} />
      <Entry text="Idade" valor={Idade} tipo="number" ValueChanged={setIdade}/>

      <div className={`flex`}>
        <Button onClick={() => props.changeClient?.(new Cliente(Nome, Idade, id))}> 
          {id ? 'Editar' : 'Salvar' }
        </Button>
        
        <Button onClick={props.cancel}> Cancelar </Button>
      </div>
    </div>
  )
}
