import React, { useState } from "react";
import Contactos from "../components/Contactos";

const Contactolista: React.FC = () => {
    // Estado con la lista de contactos
    const [contacts, setContacts] = useState([
      { id: 1, nombre: "Juan", segundoNom: "Carlos", apellido: "Pérez", segundoApell: "Gómez", telefono: "12345678" , altelefono: "87654321", direccion: "Calle 123", empresa: "Empresa X", empresaNum: "22334455", favorito: false },
      { id: 2, nombre: "María", segundoNom: "Elena", apellido: "Gómez", segundoApell: "López", telefono: "98765432" , altelefono: "11223344", direccion: "Avenida 456", empresa: "Empresa Y", empresaNum: "66778899", favorito: true },
      { id: 3, nombre: "Pedro", segundoNom: "Antonio", apellido: "Ramírez", segundoApell: "Torres", telefono: "55512345", altelefono: "99988877", direccion: "Calle 789", empresa: "Empresa Z", empresaNum: "55667788", favorito: false },
      { id: 4, nombre: "Laura", segundoNom: "Beatriz", apellido: "Fernández", segundoApell: "Hernández", telefono: "66677788", altelefono: "33322211", direccion: "Boulevard Central", empresa: "Empresa A", empresaNum: "11223344", favorito: true },
      { id: 5, nombre: "Carlos", segundoNom: "Eduardo", apellido: "Mendoza", segundoApell: "Luna", telefono: "77799900", altelefono: "88877766", direccion: "Avenida del Sol", empresa: "Empresa B", empresaNum: "44556677", favorito: false }

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
        empresaNum: "",
        favorito: false //todos los contactos son no favoritos por defecto
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
  
    const estadoFav = (id: number) => {
      setContacts(contacts.map(contact =>
          contact.id === id ? { ...contact, favorito: !contact.favorito } : contact
      ));
  };

  // 📌 Ordenamos los favoritos primero
  const contactosOrdenados = [...contacts].sort((a, b) => Number(b.favorito) - Number(a.favorito));

    return (
      <div>
        <h2>Lista de Contactos</h2>
        <button onClick={agregarContacto}>Agregar Contacto</button>
        {contactosOrdenados.map(contact => (
          <Contactos key={contact.id} {...contact} suprimir={suprimirContacto} editar={editarContacto} estadoFav={estadoFav} />
        ))}
      </div>
    );
  };
  
  export default Contactolista;