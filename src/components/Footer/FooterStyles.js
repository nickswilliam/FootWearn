import { Link } from "react-router-dom";
import { styled } from "styled-components";

export const FooterContainer = styled.footer`
  width: 100%;
  background-color: var(--light-black);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px 60px;
  gap: 20px;
  z-index: 1;
`;
export const FooterTopContainer = styled.div`
  display: flex;
  justify-content: space-around;
  border-top: 1px solid var(--grey-dark);
  padding: 10px 20px;
  gap: 30px;
  width: 100%;
  height: 40%;
`;

export const LeftFooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 10px 20px;
`;

export const PaymentText = styled.h4`
  color: var(--white);
  text-shadow: 1px 1px 4px var(--shadows);
`;

export const PaymentImg = styled.img`
  background-color: var(--white-menus);
  width: 70%;
  height: auto;
  padding: 1px;
  border: none;
  border-radius: 10px;
`;
export const MidLeftFooterContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 20px 40px;
`;

export const MidFooterContainer = styled(LeftFooterContainer)`
  border: none;
`;
export const SecureText = styled(PaymentText)``;
export const SecureImg = styled(PaymentImg)`
  background-color: transparent;
`;
export const ParagraphText = styled.p`
  font-size: 18px;
  width: 70%;
  color: var(--grey-dark);
`;

export const RightFiscalImg = styled.img`
  width: 120px;
  height: 120px;
  align-self: center;
  justify-self: center;
`;

export const FooterBottomContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
  padding: 10px 60px;
  width: 100%;
`;
export const FootterBottomLogo = styled.img`
  width: 100px;
  height: 100px;
`;

export const FooterTextCopy = styled.h5`
  font-size: 22px;
  background-color: var(--white);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
`;

export const FooterLinks = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const FooterLink = styled(Link)`
  border-right: 1px solid var(--grey-dark);
  color: var(--blue-light);
  padding: 0 10px;
`;
