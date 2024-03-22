import React, { useState } from "react";

const Form = () => {
  const [contacto, setContacto] = useState({
    nombre: "",
    correo: "",
  });
  const [mostrar, setMostrar] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (contacto.nombre.length >= 5) {
      setMostrar(true);
      setError(false);
    } else {
      setError(true);
    }
  };

  return (
    <div>
      {mostrar ? null : (
        <form onSubmit={handleSubmit}>
          <label>Nombre:</label>
          <input
            type="text"
            onChange={(event) =>
              setContacto({ ...contacto, nombre: event.target.value })
            }
          />
          <label>Correo Electronico:</label>
          <input
            role="email"
            type="email"
            onChange={(event) =>
              setContacto({ ...contacto, correo: event.target.value })
      
            }
        
        />
          <button>Enviar</button>
        </form>
      )}

      {mostrar ? (
        <h2>
          Gracias {contacto.nombre}, te contactaremos cuando antes vía mail.
        </h2>
      ) : null}
      {error && <h3>Por favor verifique su información nuevamente.</h3>}
    </div>
  );
};

export default Form;
