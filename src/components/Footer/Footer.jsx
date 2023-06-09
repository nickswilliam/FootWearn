import {
  FooterBottomContainer,
  FooterContainer,
  FooterTextCopy,
  FooterLinks,
  FooterTopContainer,
  FootterBottomLogo,
  LeftFooterContainer,
  MidFooterContainer,
  MidLeftFooterContainer,
  ParagraphText,
  PaymentImg,
  PaymentText,
  RightFiscalImg,
  SecureImg,
  SecureText,
  FooterLink,
} from "./FooterStyles";
import PaymentsWayImg from "../../assets/imgs/footer/pay-ways.png";
import SecurePayImg from "../../assets/imgs/footer/secure-pay.png";
import FiscalImg from "../../assets/imgs/footer/data-fiscal.jpg";
import FooterLogo from "../../assets/imgs/footer/footw-logo.png";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterTopContainer>
        <LeftFooterContainer>
          <PaymentText>Medios de pago:</PaymentText>

          <PaymentImg src={PaymentsWayImg} />
        </LeftFooterContainer>

        <MidLeftFooterContainer>
          <MidFooterContainer>
            <SecureText>Compra segura</SecureText>

            <SecureImg src={SecurePayImg} />
          </MidFooterContainer>

          <ParagraphText>
            Sitio seguro con criptografia (SSL)· Homologado por la USERTrust
            Network. Blindado contra robo de información y clonación de tarjetas
          </ParagraphText>
        </MidLeftFooterContainer>

        <RightFiscalImg src={FiscalImg} />
      </FooterTopContainer>

      <FooterBottomContainer>
        <FootterBottomLogo src={FooterLogo} />
        <FooterTextCopy>
          © Copyright Footwearn! 2023 - All rights reserved
        </FooterTextCopy>
      </FooterBottomContainer>

      <FooterLinks>
        <FooterLink>Trabaja con nosotros</FooterLink>

        <FooterLink>Términos y condiciones</FooterLink>

        <FooterLink style={{ border: "none" }}>
          Botón de arrepentimiento
        </FooterLink>
      </FooterLinks>
    </FooterContainer>
  );
};
export default Footer;
