import { styled } from "styled-components";
import BackgroundBG from "../../assets/imgs/success/bg-img.png";
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
    font-size: 40px;
    text-shadow: 1px 1px 1px var(--soft-black);
  }
`;
export const SuccesDivider = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  h2 {
    color: var(--soft-black);
    font-size: 30px;
    text-shadow: -2px 0 1px var(--white);
  }
`;

export const SuccessIcon = styled(FaCheckCircle)`
  background-color: var(--white);
  border-radius: 50%;
  font-size: 60px;
  color: var(--green-light);
  filter: drop-shadow(-3px 3px 2px var(--shadows));
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
  }

  span {
    color: var(--dark-violet);
    font-size: 24px;
  }
`;
export const SuccessBtns = styled.div`
  width: 40%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  padding: 20px;

  button:nth-child(2){
    background-color: var(--blue-light);
    box-shadow: 0px 8px 1px #34A8EF;

    &:hover{
        background-color: var(--blue);
        transition: all ease .2s;
        color: var(--grey-light);
    }
  }

  button {
    outline: none;
    border: none;
    background-color: var(--green-light);
    box-shadow: 0px 8px 1px #2EDC71;
    color: var(--white);
    padding: 20px 20px;
    border-radius: 5px;
    font-weight: 600;
    font-size: 20px;
    cursor: pointer;
    filter: drop-shadow(-4px 4px 6px var(--shadows));

    transition: all ease-in .2s;

    &:hover{
        background-color: #2EDC71;
        transition: all ease .2s;
        color: var(--grey-light);
    }
  }
`;
