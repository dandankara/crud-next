import Cliente from "../../core/Cliente";
import ClienteRepo from "../../core/ClienteRepo";

import firebase from "../config";

export default class ColecaoCliente implements ClienteRepo{


  //meio que vai converter a class Cliente em Json pra ser lido pelo Firestore
 conversor = {
   toFirestore(cliente:Cliente) {
     return {
       nome: cliente.nome,
       idade: cliente.idade,
     }
   },
   //Vai me retornar os envios
   fromFirestore(snapshot: firebase.firestore.DocumentSnapshot, options: firebase.firestore.SnapshotOptions) : Cliente {
     const dados = snapshot.data(options)
     return new Cliente(dados.nome, dados.idade, snapshot.id)
   }
 }

  async save(cliente:Cliente) : Promise<Cliente> {
    if(cliente?.id) {
      await this.collection().doc(cliente.id).set(cliente)
      return cliente
    } else {
      const docRef = await this.collection().add(cliente)
      const doc = await docRef.get()
      return doc.data();
    }
  }
  async delete(cliente:Cliente) : Promise<void> {
    return this.collection().doc(cliente.id).delete()
  }
  async getAll(): Promise<Cliente[]> {
    const query = await this.collection().get()
    return query.docs.map(doc => doc.data())
  }

  private collection() {
    return firebase
      .firestore().collection('clientes')
      .withConverter(this.conversor)

  }
}