import React, { useState, useEffect } from "react";
import Button from "../components/Button";
import Formulario from "../components/Formulario";
import Layout from "../components/Layout";
import TableClient from "../components/TableClient";
import Cliente from "../core/Cliente";
import ClienteRepo from "../core/ClienteRepo";
import ColecaoCliente from "../backend/db/ColecaoCliente";

export default function Home() {

  const repo: ClienteRepo = new ColecaoCliente()

  const [cliente, setcliente] = useState<Cliente>(Cliente.empty()) //Pega o get empty da TableClient
  const [visivel, setVisivel] = useState<"tabela" | "form">("tabela");
  const [clientes, setClientes] = useState<Cliente[]> ([])

  useEffect(GetAll, [])
  
  function GetAll() {
    repo.getAll().then(clientes => {
      setClientes(clientes)
      setVisivel('tabela')
    })

  }

  function SelectedAction(cliente: Cliente) {
    console.log(cliente.nome);
    //Vou chamar o SetCliente onde ele pega a props empty da tabela cliente e seta pra vazio o form
    setcliente(cliente)
    setVisivel('form')
  }

  function DeletedClient(cliente: Cliente) {
    console.log(cliente.nome);
  }

  async function SaveClient() {
    await repo.save(cliente)
    console.log(cliente)
    GetAll()
  }

  function NewClient() {
    setcliente(Cliente.empty())
    setVisivel('form')
  }
  

  return (
    <div className={`flex justify-center items-center h-screen text-white`}>
      <Layout title="Bem vindo ao cadastro">
        {visivel === 'tabela' ? (
        <>
          <TableClient
            clientes={clientes}
            SelectedClient={SelectedAction}
            DeletedClient={DeletedClient}
          ></TableClient>

          <div className={`flex justify-end mt-3`}>
          {/* Seta o botão para alternar para o form */}
          <Button onClick={NewClient}>
            Novo Usuário
          </Button>
        </div>
          </>
        ) : (
          <Formulario 
            cliente={cliente}
            changeClient={SaveClient}
            cancel={()=>{setVisivel('tabela')}} 
          /> 
        )}
        
      </Layout>
    </div>
  );
}
