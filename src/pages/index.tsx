import React, { useState } from "react";
import Button from "../components/Button";
import Formulario from "../components/Formulario";
import Layout from "../components/Layout";
import TableClient from "../components/TableClient";
import Cliente from "../core/Cliente";

export default function Home() {
  const clientes = [
    new Cliente("Ana Luiza", 23, "1"),
    new Cliente("Alexandre", 23, "2"),
    new Cliente("Maria Clara", 50, "3"),
  ];

  function SelectedAction(cliente: Cliente) {
    console.log(cliente.nome);
    //Vou chamar o SetCliente onde ele pega a props empty da tabela cliente e seta pra vazio o form
    setcliente(cliente)
    setVisivel('form')
  }

  function DeletedClient(cliente: Cliente) {
    console.log(cliente.nome);
  }

  function SaveClient() {
    console.log(cliente)
    setVisivel('tabela')
  }

  function NewClient() {
    setcliente(Cliente.empty())
    setVisivel('form')
  }
  
  const [cliente, setcliente] = useState<Cliente>(Cliente.empty()) //Pega o get empty da TableClient
  const [visivel, setVisivel] = useState<"tabela" | "form">("tabela");

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
