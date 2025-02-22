import React from "react";

interface ContactosObj {
    id: number;      //Identificador unico
    nombre: string;  //Primer nombre
    segundoNom: string; //Segundo nombre
    apellido: string;  //Primer apellido
    segundoApell: string; //Segundo apellido
    telefono: string; //telefono principal
    altelefono: string; //telefono alternativo al principal
    direccion: string; //Direccion de residencia
    empresa: string; //Nombre y direccion de la empresa del usuario
    empresaNum: string; //Numero de la empresa
    suprimir: (id: number) => void; //Funcion que se encragara de eliminar el Id del contacto, eliminandolo definitivamente
    editar: ( id: number, nombre: string, segundoNom: string, apellido: string, segundoApell: string, telefono: string, Altelefono: string, direccion: string, empresa: string, empresaNum: string ) => void; //Funcion para editar contactos
}

const Contactos: React.FC<ContactosObj> = ({id, nombre, segundoNom, apellido, segundoApell, telefono, altelefono, direccion, empresa, empresaNum, suprimir, editar}) => {
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        editar(
          id,
          e.target.name === "nombre" ? e.target.value : nombre,
          e.target.name === "segundoNom" ? e.target.value : segundoNom,
          e.target.name === "apellido" ? e.target.value : apellido,
          e.target.name === "segundoApell" ? e.target.value : segundoApell,
          e.target.name === "telefono" ? e.target.value : telefono,
          e.target.name === "altelefono" ? e.target.value : altelefono,
          e.target.name === "direccion" ? e.target.value : direccion,
          e.target.name === "empresa" ? e.target.value : empresa,
          e.target.name === "empresaNum" ? e.target.value : empresaNum
        );
      };
    
    return(
        <div className="tarjeta">
      <input type="text" name="nombre" value={nombre} onChange={handleChange} onFocus={(e) => e.target.value = ""} placeholder="Nombre" />
      <input type="text" name="segundoNom" value={segundoNom} onChange={handleChange} onFocus={(e) => e.target.value = ""} placeholder="Segundo nombre" />
      <input type="text" name="apellido" value={apellido} onChange={handleChange} onFocus={(e) => e.target.value = ""} placeholder="Aapellido" />
      <input type="text" name="segundoApell" value={segundoApell} onChange={handleChange} onFocus={(e) => e.target.value = ""} placeholder="Segundo apellido" />
      <input type="text" name="telefono" value={telefono} onChange={handleChange} onFocus={(e) => e.target.value = ""} placeholder="Teléfono" />
      <input type="text" name="altelefono" value={altelefono} onChange={handleChange} onFocus={(e) => e.target.value = ""} placeholder="Teléfono alternativo" />
      <input type="text" name="direccion" value={direccion} onChange={handleChange} onFocus={(e) => e.target.value = ""} placeholder="Dirección" />
      <input type="text" name="empresa" value={empresa} onChange={handleChange} onFocus={(e) => e.target.value = ""} placeholder="Empresa" />
      <input type="text" name="empresaNum" value={empresaNum} onChange={handleChange} onFocus={(e) => e.target.value = ""} placeholder="Nnúmero de empresa" />

          <button onClick={() => suprimir(id)}>Eliminar</button>
        </div>
    );
};

export default Contactos;