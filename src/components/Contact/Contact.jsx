import {
  ContactContainer,
  ContactInput,
  ContactLabel,
  ContactLeftDiv,
  ContactRightDiv,
  ContactTitle,
  ContainInput,
  ContainerInputs,
  SubmitBtn,
  SubmitContainer
} from "./ContactStyles";

import { FaCheckCircle } from "react-icons/fa";
import { contactForm } from "../../data/contactNewsLetterForm";
import { useState } from "react";

const Contact = () => {
  const [toggleSubmit, setToggleSubmit] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setToggleSubmit(!toggleSubmit);
  };

  return (
    <ContactContainer>
      <ContactLeftDiv>
        <ContactTitle>CONTACTANOS</ContactTitle>
        <p>¿Dónde nos encontras?</p>
        <span>Av. Rivadavia 18454, Morón, Buenos Aires.</span>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3282.214341356577!2d-58.62613722344179!3d-34.64928945990783!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcc75fd25404f5%3A0x5f9a1909e063c684!2sAv.%20Rivadavia%2018454%2C%20Mor%C3%B3n%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1685685382958!5m2!1ses-419!2sar"
          loading="lazy"
        ></iframe>
      </ContactLeftDiv>

      <ContactRightDiv>
        <h2>Suscribite a nuestro Newsletter</h2>
        <form onSubmit={handleSubmit}>
          {!toggleSubmit ? (
            <ContainerInputs>
              {contactForm.map((input) => (
                <ContainInput key={input.id}>
                  <ContactLabel htmlFor={input.name}>
                    {input.label}
                  </ContactLabel>
                  <ContactInput
                    type={input.type}
                    placeholder={input.placeholder}
                    id={input.name}
                    required={true}
                  />
                </ContainInput>
              ))}
              <SubmitBtn type="submit" value="Suscribirse" />
            </ContainerInputs>
          ) : (
            <SubmitContainer>
              <button
                title="Volver a suscribirme"
                onClick={() => setToggleSubmit(!toggleSubmit)}
              >
                <FaCheckCircle/>
              </button>
              <h3>
                Gracias por tu suscripción!
              </h3>
            </SubmitContainer>
          )}
        </form>
      </ContactRightDiv>
    </ContactContainer>
  );
};
export default Contact;
