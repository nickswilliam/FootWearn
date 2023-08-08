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

const Footer = () => {
  return (
    <FooterContainer>
      <FooterTopContainer>
        <LeftFooterContainer>
          <PaymentText>Medios de pago:</PaymentText>

          <PaymentImg src='https://res.cloudinary.com/dymyb2f2i/image/upload/v1691441241/footer/pay-ways_unpfw2.png' />
        </LeftFooterContainer>

        <MidLeftFooterContainer>
          <MidFooterContainer>
            <SecureText>Compra segura</SecureText>

            <SecureImg src='https://res.cloudinary.com/dymyb2f2i/image/upload/v1691441241/footer/secure-pay_ujjxkx.png' />
          </MidFooterContainer>

          <ParagraphText>
            Sitio seguro con criptografia (SSL)· Homologado por la USERTrust
            Network. Blindado contra robo de información y clonación de tarjetas
          </ParagraphText>
        </MidLeftFooterContainer>

        <RightFiscalImg src='https://res.cloudinary.com/dymyb2f2i/image/upload/v1691441241/footer/data-fiscal_aoyef8.jpg' />
      </FooterTopContainer>

      <FooterBottomContainer>
        <FootterBottomLogo src='https://res.cloudinary.com/dymyb2f2i/image/upload/v1691441240/footer/footw-logo_qo0x8w.png' />
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
