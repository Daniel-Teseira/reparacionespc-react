import React, { useState } from "react";

function ContactForm() {
  // Estado para gestionar los valores de los campos
  const [formValues, setFormValues] = useState({
    nombre: "",
    email: "",
    telefono: "",
    mensaje: "",
  });

  // Manejo de cambios en los campos de entrada
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  // Manejo del envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formValues);
    // Aquí puedes agregar la lógica para enviar los datos, como usar fetch o axios.
  };

  return (
    <form onSubmit={handleSubmit} action="https://www.coninfopc.com.ar/">
      <div className="formulario-nombre d-flex col-12 flex-column">
        {/* <label className="">
            Nombre
          </label>  */}
        <input
          type="text"
          className="input border-0 border-bottom"
          value={formValues.nombre}
          name="nombre"
          onChange={handleChange}
          required
          placeholder="Nombre"
        />
      </div>

      <div className="d-flex flex-row col-12">
        <div className="formulario-email col-6">
          {/* <label className="et_pb_contact_form_label">
              Email
            </label> */}
          <input
            type="email"
            className="input border-0 border-bottom"
            value={formValues.email}
            name="email"
            onChange={handleChange}
            required
            placeholder="Email"
          />
        </div>

        <div className="formulario-telefono col-6">
          {/* <label className="et_pb_contact_form_label">
              Teléfono
            </label> */}
          <input
            type="text"
            className="input border-0 border-bottom"
            value={formValues.telefono}
            name="telefono"
            onChange={handleChange}
            required
            placeholder="Teléfono"
            pattern="[0-9\s-]*"
            title="Sólo se permiten números."
          />
        </div>
      </div>

      <div className="formulario-mensaje d-flex col-12 flex-column">
        {/* <label className="et_pb_contact_form_label">
            Mensaje
          </label>  */}
        <textarea
          name="mensaje"
          className="input border-0 border-bottom"
          value={formValues.mensaje}
          onChange={handleChange}
          required
          placeholder="Mensaje"
        />
      </div>

      <div className="et_contact_bottom_container d-flex justify-content-center">
        <button
          type="submit"
          name="buton-enviar"
          className="btn btn-outline-dark"
        >
          Enviá Tu Consulta
        </button>
      </div>
    </form>
  );
}

export default ContactForm;
