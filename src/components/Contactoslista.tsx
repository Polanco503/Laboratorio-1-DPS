import React, { useState } from "react";
import Contactos from "../components/Contactos";

const Contactolista: React.FC = () => {
    // Estado con la lista de contactos
    const [contacts, setContacts] = useState([
      { id: 1, nombre: "Juan", segundoNom: "Carlos", apellido: "Pérez", segundoApell: "Gómez", telefono: "12345678" , altelefono: "87654321", direccion: "Calle 123", empresa: "Empresa X", empresaNum: "22334455" },
      { id: 2, nombre: "María", segundoNom: "Elena", apellido: "Gómez", segundoApell: "López", telefono: "98765432" , altelefono: "11223344", direccion: "Avenida 456", empresa: "Empresa Y", empresaNum: "66778899" }
    ]);
  
    // Función para agregar un nuevo contacto
    const agregarContacto = () => {
      const nuevoContacto = {
        id: Date.now(),
        nombre: "",
        segundoNom: "",
        apellido: "",
        segundoApell: "",
        telefono: "",
        altelefono: "", 
        direccion: "",
        empresa: "",
        empresaNum: ""
      };
      setContacts([...contacts, nuevoContacto]);
    };
  
    // Función para eliminar un contacto
    const suprimirContacto = (id: number) => {
      setContacts(contacts.filter(contact => contact.id !== id));
    };
  
    // Función para editar un contacto
    const editarContacto = (
      id: number, nombre: string, segundoNom: string, apellido: string, segundoApell: string, telefono: string, altelefono: string, direccion: string, empresa: string, empresaNum: string ) => {
      setContacts(contacts.map(contacto =>
        contacto.id === id
          ? { ...contacto, nombre, segundoNom, apellido, segundoApell, telefono, altelefono, direccion, empresa, empresaNum }
          : contacto
      ));
    };
  
    return (
      <div>
        <h2>Lista de Contactos</h2>
        <button onClick={agregarContacto}>Agregar Contacto</button>
        {contacts.map(contact => (
          <Contactos key={contact.id} {...contact} suprimir={suprimirContacto} editar={editarContacto} />
        ))}
      </div>
    );
  };
  
  export default Contactolista;