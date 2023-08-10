import React, { useRef } from 'react';
import Navbar from '../Components/Navbar';
import emailjs from "@emailjs/browser";
import '../Styles/Contact.css';
import { useForm } from 'react-hook-form';


const Contact = () => {

  const _SERVICE_ID = 'Nexxus_service_0kmrc0j';
  const _TEMPLATE_ID = 'template_f37zpx7';
  const _PUBLIC_KEY = 'gDf542L5baVvbXMj7';

  const {reset, handleSubmit} = useForm();
  const form = useRef();

  const sendEmail = (data,e) => {
    e.preventDefault();
    

    emailjs.sendForm(`${_SERVICE_ID}`, `${_TEMPLATE_ID}`, form.current, `${_PUBLIC_KEY}`)
      .then((result) => {
        console.log(result.text);
        reset(); // Limpia los campos después de enviar el email
      }, (error) => {
          console.log(error.text);
      });
  };



  return (
    <div>
      <Navbar />
      <div className="soporte">
        <p>¿En qué podemos ayudarte?</p>
        <p>Contáctanos</p>

        <div className="formulario">
          <form ref={form} onSubmit={handleSubmit(sendEmail)}>


            <label>Nombre</label>
            <input type="text" name="nombre_usuario"/>

            <label>Correo</label>
            <input type="email" name="correo_usuario"/>

            <label>Número de Teléfono</label>
            <input type="number" name="numero_t"/>

            <label>Empresa</label>
            <input type="text" name="empresa"/>
            <label>Mensaje</label>
            <textarea  name="mensaje"/>
            <button type="submit" value="Send"> Enviar</button> 
{/*              <input type="submit" value="Send"/>  */}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;


