import {
  FaCircleNotch,
} from "react-icons/fa";
import { styled } from "styled-components";
import ImgBG from "../../assets/imgs/checkout/bg-img.jpg";

export const CheckoutContainBG = styled.div`
  margin-top: 80px;
  width: 100%;
  min-height: 700px;
  display: flex;
  justify-content: center;
  background-image: url('${ImgBG}');
  background-repeat: no-repeat;
  background-size: cover;
  z-index: 1;
`;

export const CheckoutContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: auto;
  gap: 50px;
  max-width: 1300px;
  align-items: flex-start;
  padding: 40px;
  z-index: 2;
`;

export const ContainerVertical = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  height: auto;
  padding: 20px 30px;
  gap: 30px;

  h1 {
    color: var(--orange);
    font-size: 28px;
    text-shadow: -1px 1px 1px var(--soft-black);
  }
`;
export const RightTitleText = styled.h2`
  color: var(--black);
  font-size: 24px;
  text-shadow: -1px 1px 1px var(--grey-light);
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
    display: flex;
    justify-content: space-between;
    width: 100%;
    flex-wrap: wrap;
  }

  form button {
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

    form button:hover {
      background-color: var(--orange2);
      color: var(--grey-light);
    }

    form button:disabled {
      background-color: var(--light-orange);
      color: var(--grey-dark);
      cursor: not-allowed;
    }
  }
`;

export const InputContainer = styled.div`
  padding: 15px;
  display: flex;
  width: 50%;
  flex-direction: column;
  justify-content: space-around;
  gap: 15px;

  label {
    color: var(--orange2);
    font-size: 22px;
    font-weight: 600;
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
`;

export const InputSubmit = styled.div`
  width: 100%;
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
  padding:10px;
  height: 500px;
  overflow-y: scroll;
  gap: 30px;
  border-bottom: 1px dashed var(--dark-violet);

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
  }

  span {
    color: var(--dark-violet);
    font-size: 20px;
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
  }

  span {
    color: var(--dark-violet);
    font-weight: 600;
    font-size: 20px;
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
`;
