import { benefits } from "../../data/aboutBenefits";
import {
  AboutContainer,
  AboutTitle,
  BenefitsContainer,
  BenefitContainer,
} from "./AboutStyles";

const About = () => {
  return (
    <AboutContainer>
      <AboutTitle>ACERCA DE NOSOTROS</AboutTitle>

      <p>
        Somos un E-Commerce ubicado en el corazón de{" "}
        <span>Zona Oeste (Morón)</span> que conecta a la red de producción
        directa de fábrica de las principales marcas de Zapatillas más buscadas
        en Argentina. Contamos con centros de distribución a lo largo del país
        con una trayectoria de <span>más de 5 años</span>, y miles de clientes
        que nos acompañan y eligen desde nuestros comienzos.{" "}
      </p>

      <AboutTitle>BENEFICIOS DE ELEGIRNOS</AboutTitle>

      <BenefitsContainer>
        {benefits.map((benefit) => (
          <BenefitContainer key={benefit.id}>
            <benefit.img
              size="60px"
              color="var(--orange)"
              pointerEvents="none"
            />
            <p>{benefit.text}</p>
          </BenefitContainer>
        ))}
      </BenefitsContainer>
    </AboutContainer>
  );
};
export default About;
