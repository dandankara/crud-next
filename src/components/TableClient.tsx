interface TableProps {
  clientes: Cliente[];
  SelectedClient?: (cliente: Cliente) => void;
  DeletedClient?: (cliente: Cliente) => void;
}

import React from "react";
import Cliente from "../core/Cliente";
import { EditIcon, TrashIcon } from "./Icons";

export default function TableClient(props: TableProps) {

  const ShowActions = props.SelectedClient || props.DeletedClient

  function RenderHeader() {
    return (
      <tr>
        <th className="text-letf p-3">Código</th>
        <th className="text-letf p-3">Nome</th>
        <th className="text-letf p-3">Idade</th>
        {ShowActions ? (<th className="p-3">Ações</th>) : false}
        
      </tr>
    );
  }

  function RenderData() {
    return props.clientes?.map((cliente, i) => {
      return (
        <tr
          key={cliente.id}
          className={`text-white ${
            i % 2 === 0 ? "bg-gray-500" : "bg-gray-600"
          }`}
        >
          <td className="text-letf p-3"> {cliente.id} </td>
          <td className="text-letf p-3"> {cliente.nome} </td>
          <td className="text-letf p-3"> {cliente.idade} </td>
          { ShowActions? (RenderActions(cliente)): false }
        </tr>
      );
    }); 
  }

  function RenderActions(cliente: Cliente) {
    return (
      <td className="flex justify-center">

        {/* Vai renderizar somente quando o cliente for selecionado */}
        {props.SelectedClient ? (
          // Caso for diferente de nulo o onclick vai funcionar, uma condição, na minha cabeça faz sentido
          <button onClick={() => props.SelectedClient?.(cliente)}  className="
        flex justify-center items-center
        text-green-400  rounded-full p-2 m-2
        hover:text-green-700">
            {EditIcon}
          </button>
        ) : (
          false
        )}

        {/* Vai renderizar somente quando o cliente for deletado */}
        {props.DeletedClient ? (
          <button onClick={() => props.DeletedClient?.(cliente)} className="
        flex justify-center items-center
        text-red-400  rounded-full p-2 m-2
        hover:text-red-700
        "
          >
            {TrashIcon}
          </button>
        ) : (
          false
        )}
      </td>
    );
  }

  return (
    <table className="w-full rounded-xl overflow-hidden">
      <thead
        className={`text-gray-200 bg-gradient-to-b from-gray-400 to-gray-700`}
      >
        {RenderHeader()}
      </thead>

      <tbody>{RenderData()}</tbody>
    </table>
  );
}
