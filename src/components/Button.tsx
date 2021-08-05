interface BotaoProps {
  children: any //Se quiser passar qualquer coisa pra cá, pode
  className?: any
  onClick?:() => void
}

import React from 'react'

export default function Button(props: BotaoProps) {
  return (
    <button onClick={props.onClick} className={`
    bg-gray-200 rounded-full p-1.5 mr-4
    flex text-blue-800 font-medium
    hover:bg-blue-400
    `}
    >
      {props.children}
    </button>
  )
}
