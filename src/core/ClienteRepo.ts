import Cliente from "./Cliente";

export default interface ClienteRepo{
  //Essa interface vai ter 3 metodos
  save(cliente:Cliente): Promise<Cliente> //Vai salvar em Cliente.ts
  delete(cliente:Cliente): Promise<void> 
  getAll(): Promise<Cliente[]> //Pega todos os clientes que forem salvos em um array
}