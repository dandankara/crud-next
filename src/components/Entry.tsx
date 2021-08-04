interface EntryProps {
  tipo?: "text" | "number";
  text: string;
  valor: any
  somenteRead?: boolean
  ValueChanged?:(valor:any) => void
}

import React from "react";

export default function Entry(props: EntryProps) {
  return (
    <div className={`flex flex-col`}>
      <label className={`flex justify-start font-semibold text-lg mb-1`}>
        {props.text}
      </label>
      {/* Caso não for intformado o padrão vai ser text */}
      <input
       type={props.tipo ?? 'text'}
       value={props.valor}
       readOnly={props.somenteRead}
       onChange={ev => props.ValueChanged?.(ev.target.value)}
       className={` mb-4 p-1 rounded-md focus-within:outline-none`}
      />
    </div>
  );
}
