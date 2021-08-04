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
  }

  function DeletedClient(cliente: Cliente) {
    console.log(cliente.nome);
  }

  return (
    <div className={`flex justify-center items-center h-screen text-white`}>
      <Layout title="Bem vindo ao cadastro">
        <TableClient
          clientes={clientes}
          SelectedClient={SelectedAction}
          DeletedClient={DeletedClient}
        ></TableClient>

        <Formulario cliente={clientes[1]}>  </Formulario>

        <div className={`flex justify-end`}>
          <Button>Novo Usuário</Button>
        </div>
      </Layout>
    </div>
  );
}
