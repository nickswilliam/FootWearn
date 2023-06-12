import { Link } from "react-router-dom";
import { styled } from "styled-components";

export const FooterContainer = styled.footer`
  width: 100%;
  background-color: var(--light-black);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px 20px;
  gap: 20px;
  z-index: 1;
`;

export const FooterTopContainer = styled.div`
  display: flex;
  justify-content: space-around;
  border-top: 1px solid var(--grey-dark);
  padding: 10px 0;
  gap: 30px;
  width: 100%;
  height: auto;

  @media (max-width: 967px){
    flex-wrap: wrap;
  }
`;

export const LeftFooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 10px;
`;

export const PaymentText = styled.h4`
  color: var(--white);
  text-shadow: 1px 1px 4px var(--shadows);
`;

export const PaymentImg = styled.img`
  background-color: var(--white-menus);
  width: 250px;
  height: auto;
  padding: 4px;
  border: none;
  border-radius: 5px;
`;
export const MidLeftFooterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 30px;
  
  @media (max-width: 480px){
    flex-direction: column;
  }
`;

export const MidFooterContainer = styled(LeftFooterContainer)`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: none;
`;
export const SecureText = styled(PaymentText)``;
export const SecureImg = styled(PaymentImg)`
  background-color: transparent;
  width: 200px;
`;
export const ParagraphText = styled.p`
  font-size: 18px;
  width: 40%;
  color: var(--grey-dark);

  @media (max-width: 967px){
    width: 50%;
  }

  @media (max-width: 480px){
    width: 100%;
    text-align: center;
  }
`;

export const RightFiscalImg = styled.img`
  width: 120px;
  height: auto;
  align-self: center;
  justify-self: center;

  @media (max-width: 768px){
    width: 80px;
  }
`;

export const FooterBottomContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
  padding: 10px 40px;
  width: 100%;

  @media (max-width: 768px){
    padding: 10px 20px;
  }

  @media (max-width: 480px){
    padding: 10px;
  }

  @media (max-width: 400px){
    flex-direction: column;
  }
`;
export const FootterBottomLogo = styled.img`
  width: 100px;
  height: auto;

  @media (max-width: 768px){
    width: 80px;
  }

  @media (max-width: 480px){
    width: 60px;
  }
`;

export const FooterTextCopy = styled.h5`
  font-size: 22px;
  background-color: var(--white);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;

  @media (max-width: 768px){
    text-align: center;
    width: 70%;
  }

  @media (max-width: 480px){
    font-size: 20px;
  }

  @media (max-width: 400px){
    width: 100%;
  }
`;

export const FooterLinks = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;

  @media (max-width: 480px){
    flex-direction: column;
    gap: 15px;
  }
`;

export const FooterLink = styled(Link)`
  border-right: 1px solid var(--grey-dark);
  color: var(--blue-light);
  padding: 0 10px;

  @media (max-width: 700px){
    text-align: center;
  }

  @media (max-width: 480px){
    border: none;
  }
`;
