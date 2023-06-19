import { FaCircleNotch } from "react-icons/fa";
import { styled } from "styled-components";
import ImgBG from "../../assets/imgs/checkout/bg-img.jpg";

export const CheckoutContainBG = styled.div`
  margin-top: 80px;
  width: 100%;
  min-height: 700px;
  display: flex;
  justify-content: center;
  background-image: url("${ImgBG}");
  background-repeat: no-repeat;
  background-size: cover;
  z-index: 1;
`;

export const CheckoutContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: auto;
  gap: 20px;
  max-width: 1300px;
  align-items: flex-start;
  padding: 20px;
  z-index: 2;

  @media (max-width: 967px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const ContainerVertical = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 100%;
  height: auto;
  padding: 20px;
  gap: 30px;

  h1 {
    color: var(--orange);
    font-size: 28px;
    text-shadow: -1px 1px 1px var(--soft-black);

    @media (max-width: 1024px) {
      text-align: center;
    }

    @media (max-width: 967px) {
      width: 100%;
      max-width: 900px;
    }
    @media (max-width: 768px){
      font-size: 26px;
    }
    @media (max-width: 480px){
      font-size: 24px;
    }
    @media (max-width: 400px){
      font-size: 22px;
    }
  }
`;
export const RightTitleText = styled.h2`
  color: var(--black);
  font-size: 24px;
  text-shadow: -1px 1px 1px var(--grey-light);
  @media (max-width: 1024px) {
    text-align: center;
  }

  @media (max-width: 768px){
    font-size: 22px;
  }
  @media (max-width: 480px){
      font-size: 20px;
    }
    @media (max-width: 400px){
      font-size: 18px;
    }
`;

export const LeftContainer = styled.div`
  border: 1px solid var(--grey-dark);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 100%;
  background-color: var(--white-menus);
  padding: 10px;
  box-shadow: -5px 10px 6px var(--shadows), 5px 10px 6px var(--shadows);

  form {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    width: 100%;
    flex-wrap: wrap;

    @media (max-width: 1024px) {
      flex-direction: column;
    }

    @media (max-width: 967px) {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: repeat(2, 1fr);
    }

    @media (max-width: 550px) {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
    }
  }
`;

export const InputContainer = styled.div`
  padding: 15px;
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: space-around;
  gap: 15px;

  label {
    color: var(--orange2);
    font-size: 22px;
    font-weight: 600;

    @media (max-width: 1024px) {
      text-align: center;
      width: 100%;
    }

    @media (max-width: 768px){
      font-size: 20px;
    }
    @media (max-width: 480px){
      font-size: 18;
    }
  }

  input {
    border: none;
    outline: none;
    border-bottom: 2px solid var(--light-orange);
    width: 100%;
    background-color: transparent;
    padding: 10px;
    font-size: 20px;
    transition: all ease 0.15s;
    position: relative;
    text-overflow: ellipsis;

    @media (max-width: 768px){
      font-size: 18px;
    }
  
  }

  input:focus {
    border-color: var(--orange2);
    transition: all ease 0.15s;
  }

  input::placeholder {
    transform: scale(1);
    transition: all ease 0.15s;
    position: absolute;
    text-align: left;
  }

  input:focus::placeholder {
    top: -5px;
    left: -30px;
    transform: scale(0.6);
    transition: ease-in 0.15s;
    color: var(--blue);
  }

  p {
    margin-top: -5px;
    text-align: right;
    color: var(--red);
    font-size: 14px;
  }

  @media (max-width: 1024px) {
    width: 100%;
  }
`;

export const InputSubmit = styled.div`
  width: 100%;
  grid-column-start: 1;
  grid-column-end: span 2;
  button {
    border: 1px solid var(--light-orange);
    background-color: var(--orange);
    color: var(--white);
    font-weight: 600;
    width: 100%;
    padding: 10px 20px;
    font-size: 22px;
    border-radius: 5px;
    margin-top: 30px;
    cursor: pointer;
    transition: all ease 0.15s;

    @media (max-width: 768px){
      font-size: 20px;
    }
    @media (max-width: 480px){
      font-size: 18px;
    }
    @media (max-width: 400px){
      font-size: 16px;
    }
  }

  button:hover {
    background-color: var(--orange2);
    color: var(--grey-light);
  }

  button:disabled {
    background-color: var(--light-orange);
    color: var(--grey-light);
    cursor: not-allowed;
  }

  @media (max-width: 967px) {
    grid-column-start: 1;
    grid-column-end: span 2;
  }
`;
export const RightContainer = styled(LeftContainer)`
  gap: 30px;
  padding-top: 20px;
`;

export const ItemsCartContainer = styled.div`
  border-top: 1px solid var(--black);
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 10px;
  height: 500px;
  overflow-y: scroll;
  gap: 30px;
  border-bottom: 1px dashed var(--dark-violet);

  @media (max-width: 768px){
    height: 400px;
  }

  &::-webkit-scrollbar {
    display: none;
  }

  h4 {
    text-align: center;
    margin-top: 100px;
  }
`;

export const BottomPriceDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 10px 20px;
`;

export const SubtotalDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  p {
    font-weight: 600;
    color: var(--dark-violet);
    font-size: 20px;

    @media (max-width: 768px){
      font-size: 18px;
    }
    @media (max-width: 480px){
      font-size: 16px;
    }
  }

  span {
    color: var(--dark-violet);
    font-size: 20px;
 
    @media (max-width: 768px){
      font-size: 18px;
    }
    @media (max-width: 480px){
      font-size: 16px;
    }
  }

  @media (max-width: 400px){
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }

`;

export const TotalPriceDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  border-top: 2px solid var(--dark-violet);
  padding-top: 10px;

  h4 {
    color: var(--dark-violet);
    font-size: 20px;

    @media (max-width: 768px){
      font-size: 18px;
    }
    @media (max-width: 480px){
      font-size: 16px;
    }
  }

  span {
    color: var(--dark-violet);
    font-weight: 600;
    font-size: 20px;

    @media (max-width: 768px){
      font-size: 18px;
    }
    @media (max-width: 480px){
      font-size: 16px;
    }
  }
`;

export const LoadIcon = styled(FaCircleNotch)`
  color: var(--white);
  font-size: 24px;
  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }


  animation: rotate infinite 0.8s ease-in forwards;

  @media (max-width: 768px){
    font-size: 22px;
  }

  @media (max-width: 480px){
    font-size: 20px;
  }

  @media (max-width: 400px){
    font-size: 18px;
  }
`;
