import { styled } from "styled-components";
import WaveImg from '../../assets/imgs/hero/bg/wave.svg'

export const MainContainer = styled.main`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  width: 100%;
  margin-top: 80px;
`;

export const MainTitle = styled.h1`
  margin: 100px 0 80px 0;
  background-color: var(--dark-violet);
  z-index: 2;
  color: var(--white);
  font-size: 48px;
  font-family: "Under-Rated";
  width: 100%;
  padding: 10px;
  text-align: center;
  letter-spacing: 2px;

  @media (max-width: 1024px){
    font-size: 44px;
  }

  @media (max-width: 768px){
    font-size: 38px;
  }

  @media (max-width: 480px){
    font-size: 30px;
  }

  @media (max-width: 400px){
    font-size: 26px;
  }
`;

export const AllStoreWrapper = styled.div`
  background: linear-gradient(to bottom, var(--white), var(--grey-light));
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HeadProductsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 20px;
  max-width: 1300px;
  justify-content: center;
  align-items: center;
`;

export const SecondTitle = styled.h2`
  color: var(--dark-violet);
  font-size: 44px;
  font-weight: 600;
  max-width: 1300px;
  text-shadow: 2px 2px 6px var(--shadows), -2px 2px 6px var(--shadows);
  text-align: center;

  @media (max-width: 1024px){
    font-size: 40px;
  }

  @media (max-width: 768px){
    font-size: 34px;
  }

  @media (max-width: 480px){
    font-size: 28px;
  }
`;

export const TitleCategories = styled.h3`
  text-align: center;
  background-color: ${({ diff }) =>
    diff ? "var(--blue-light)" : "var(--red)"};
  padding: 10px 20px;
  width: 100%;
  color: var(--white);
  letter-spacing: 5px;
`;
export const ProductsWrapper = styled.section`
  max-width: 1300px;
  width: 100%;
  margin-top: 80px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 20px;
  min-height: 500px;
  padding-bottom: 80px;
`;

export const ProductsTitle = styled.h2`
  font-size: 35px;
  color: var(--black);
  padding: 10px;
  border-bottom: 1px solid var(--grey-dark);

  @media (max-width: 768px){
    font-size: 30px;
  }

  @media (max-width: 480px){
    font-size: 26px;
    text-align: center;
  }
`;

export const AboutWrapper = styled.section`
  background: linear-gradient(
    to bottom,
    var(--grey-light),
    var(--light-orange)
  );
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 60px 40px;
`;

export const ContactWrapper = styled.section`
  margin-top: -2px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url('${WaveImg}');
  background-repeat: no-repeat;
  background-size: contain;
  width: 100%;
  height: auto;
`;
