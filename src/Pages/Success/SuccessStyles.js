import { styled } from "styled-components";
import BackgroundBG from "../../assets/imgs/success/bg-img.jpg";
import { FaCheckCircle } from "react-icons/fa";

export const SuccessContainer = styled.div`
  margin-top: 80px;
  width: 100%;
  background-image: url("${BackgroundBG}");
  background-size: cover;
  background-repeat: no-repeat;
  padding: 60px 80px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  gap: 40px;

  h1 {
    font-family: "Under-Rated";
    color: var(--orange);
    text-align: center;
    font-size: 40px;
    text-shadow: 1px 1px 1px var(--soft-black);

    @media (max-width: 1024px) {
      font-size: 36px;
    }
    @media (max-width: 768px) {
      font-size: 30px;
    }
    @media (max-width: 480px) {
      font-size: 26px;
    }
    @media (max-width: 400px) {
      font-size: 22px;
    }
  }

  @media (max-width: 1024px){
    padding: 40px 60px;
  }
  @media (max-width: 768px){
    padding: 40px;
    justify-content: center;
    gap: 70px;
  }

  @media (max-width: 480px){
    padding: 30px;
    gap: 50px;
    justify-content: center;
  }

  @media (max-width: 400px){
    padding: 20px;
  }
`;
export const SuccesDivider = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;

  h2 {
    color: var(--soft-black);
    font-size: 30px;
    text-shadow: -2px 0 1px var(--white);
    text-align: center;

    @media (max-width: 768px) {
      font-size: 24px;
    }
    @media (max-width: 480px) {
      font-size: 20px;
    }
  }

  @media (max-width: 550px){
    flex-wrap: wrap;
  }
`;

export const SuccessIcon = styled(FaCheckCircle)`
  font-size: 60px;
  color: var(--green-light);
  filter: drop-shadow(-3px 3px 2px var(--shadows));

  @media (max-width: 768px){
    font-size: 54px;
  }

  @media (max-width: 480px){
    font-size: 50px;
  }
`;

export const SuccesOrder = styled.div`
  background-color: var(--white-menus);
  box-shadow: -4px 4px 6px var(--shadows);
  min-width: 300px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  padding: 20px;

  h3 {
    font-size: 24px;
    color: var(--orange);

    @media (max-width: 768px){
      font-size: 22px;
    }
    @media (max-width: 480px){
      font-size: 20px;
    }
    @media (max-width: 400px){
      font-size: 18px;
    }
  }

  span {
    color: var(--dark-violet);
    font-size: 24px;

    @media (max-width: 768px){
      font-size: 22px;
    }
    @media (max-width: 480px){
      font-size: 20px;
    }
  }

  @media (max-width: 768px){
    padding: 10px 15px;
  }
  @media (max-width: 480px){
    padding: 10px;
    min-width: fit-content;
  }
`;
export const SuccessBtns = styled.div`
  width: 40%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  padding: 20px;

  button:nth-child(2) {
    background-color: var(--blue-light);
    box-shadow: 0px 8px 1px #34a8ef;

    &:hover {
      background-color: var(--blue);
      transition: all ease 0.2s;
      color: var(--grey-light);
    }
  }

  button {
    outline: none;
    border: none;
    background-color: var(--green-light);
    box-shadow: 0px 8px 1px #2edc71;
    color: var(--white);
    padding: 20px 20px;
    border-radius: 5px;
    font-weight: 600;
    font-size: 20px;
    cursor: pointer;
    filter: drop-shadow(-4px 4px 6px var(--shadows));

    transition: all ease-in 0.2s;

    &:hover {
      background-color: #2edc71;
      transition: all ease 0.2s;
      color: var(--grey-light);
    }

    @media (max-width: 768px){
      padding: 10px 15px;
      font-size: 18px;
    }
    @media (max-width: 480px){
      padding: 10px;
      font-size: 16px;
    }
    @media (max-width: 400px){
      padding: 5px;
    }
  }

  @media (max-width: 768px){
    width: 60%;
  }
  @media (max-width: 480px){
    width: 80%
  }
`;
