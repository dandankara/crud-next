interface BotaoProps {
  children: any //Se quiser passar qualquer coisa pra cá, pode
}

import React from 'react'

export default function Button(props: BotaoProps) {
  return (
    <button className={`
      bg-gray-200 rounded-full p-1.5 mr-4
      flex text-blue-800 font-medium
      hover:bg-blue-400
    `}>
      {props.children}
    </button>
  )
}
