import React from 'react'
import Titulo from './Titulo'

interface LayoutProps {
  title: string,
  children?: any
}

export default function Layout(props: LayoutProps) {
  return (
    <div className={`
    flex flex-col justify-center
    w-2/3 bg-gray-400
    text-black rounded-md
    `}>
      <Titulo> {props.title} </Titulo>
      <div className="p-5"> {props.children} </div>
    </div>
  )
}
