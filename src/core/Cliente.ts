export default class Cliente {
  #id: string //o hashtag significa que vai ser um private
  #nome: string
  #idade: number

  constructor(nome:string, idade: number, id: string = null){
    this.#id = id
    this.#idade = idade
    this.#nome = nome
  }

  static empty(){
    return new Cliente('' , 0)
  }

  get id(){
    return (
      this.#id
    )
  }

  
  get nome(){
    return (
      this.#nome
    )
  }

  
  get idade(){
    return (
      this.#idade
    )
  }
}