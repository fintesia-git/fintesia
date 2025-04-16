import React from 'react';
import './styles.css';
import { useForm, ValidationError } from '@formspree/react';

function ContactForm() {
  const [state, handleSubmit] = useForm("mjkyldvw");
  if (state.succeeded) {
    return <p>¡Recibido!</p>;
  }
  return (
    <div className="contact-form">
      <h2>Contacto</h2> {/* Asegúrate de tener este título en tu componente App.js */}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">
            Nombre
          </label>
          <input
            id="name"
            type="text"
            name="name"
          />
          <ValidationError
            prefix="Name"
            field="name"
            errors={state.errors}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">
            Mail
          </label>
          <input
            id="email"
            type="email"
            name="email"
            required
          />
          <ValidationError
            prefix="Email"
            field="email"
            errors={state.errors}
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">
            Mensaje
          </label>
          <textarea
            id="message"
            name="message"
            required
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
        </div>
        <button type="submit" disabled={state.submitting}>
          Enviar
        </button>
      </form>
    </div>
  );
}

export default ContactForm;