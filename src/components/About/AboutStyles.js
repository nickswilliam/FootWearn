import { styled } from "styled-components";

export const AboutContainer = styled.div`
  max-width: 1300px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px 20px;
  gap: 60px;

  p {
    color: var(--black);
    font-size: 26px;
    width: 80%;
    text-align: center;
    letter-spacing: 2px;
    
    @media (max-width: 1024px){
    font-size: 24px;
  }

  @media (max-width: 768px){
    width: 100%;
  }
  }

  p span {
    font-weight: 600;
    @media (max-width: 1024px){
    font-size: 24px;
  }
  }
`;
export const AboutTitle = styled.h2`
  margin-top: 30px;
  text-align: center;
  align-self: center;
  font-size: 38px;
  padding: 15px 20px;
  color: var(--orange);
  text-shadow: 2px 2px 1px var(--soft-black), -2px 2px 1px var(--light-yellow);
  font-family: "Under-Rated";

  @media (max-width: 1024px){
    font-size: 36px;
  }

  @media (max-width: 768px){
    font-size: 34px;
  }

  @media (max-width: 480px){
    font-size: 30px;
  }
`;

export const BenefitsContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 30px;
  height: auto;
  margin-top: 20px;

  @media (max-width: 768px){
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    align-items: center;
    justify-items: center;
    gap: 20px;
  }

  @media (max-width: 415px){
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
  }
`;

export const BenefitContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 200px;
  height: 200px;
  border: 1px solid var(--white-menus);
  background-color: var(--white);
  box-shadow: -10px 10px 6px var(--shadows);
  padding: 30px 10px;
  backdrop-filter: blur(5px);
  transform: scale(1);
  transition: all 0.3s ease;

  p {
    font-size: 18px;
    font-weight: 600;
    color: var(--orange);
    pointer-events: none;
  }

  &:hover {
    transform: scale(1.04);
    filter: drop-shadow(4px 4px 10px var(--blue));
  }

  @media (max-width: 1030px){
    width: 180px;
    height: 180px;
  }
`;
