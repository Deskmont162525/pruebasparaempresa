export interface UserInterfaceI {
  //campos requeridos de la lista a mostrar
  
  name: string;
  lastname: string;
  document: string;
  email: string;
  pass: string;
  pcia: string;
}



export interface UserInterface {
  id?: string;
  name?: string;
  pass?: string;
}