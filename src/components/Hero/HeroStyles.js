import { styled } from "styled-components";

export const HeroContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 1300px;
  transition: all ease 0.2s;

  @media (max-width: 1100px) {
    max-width: 956px;
    min-width: 768px;
  }

  @media (max-width: 768px) {
    max-width: 600px;
    min-width: 480px;
  }

  @media (max-width: 480px) {
    max-width: 400px;
    min-width: 300px;
  }

  @media (max-width: 320px) {
    max-width: 320px;
  }
`;

export const HeroMidInfo = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 10px;
  width: 100%;
`;
export const HeroInfoContainer = styled.div`
  display: flex;
  align-self: center;
  align-items: center;
  justify-content: center;
  gap: 15px;
  padding: 10px 20px;
  margin-top: 40px;
  width: 300px;
  color: var(--brown-dark);
`;

export const HeroInfoTexts = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: space-between;
  border-left: 1px solid var(--brown-dark);
  padding: 10px 10px;
`;

export const HeroInfoTitle = styled.h3`
  text-align: left;
  font-size: 14px;
  font-weight: 600;
`;

export const HeroInfoSubTitle = styled.p`
  text-align: left;
  font-weight: 400;
  font-size: 14px;
`;

export const HeroBottomInfo = styled.div`
  margin-top: 80px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  gap: 30px;

`
export const HeroBottomText = styled.h2`
  color: var(--dark-violet);
  font-size: 24px;
  padding: 40px 20px;
`
