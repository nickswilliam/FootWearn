import { styled } from "styled-components";
import BackgroundBG from "../../assets/imgs/login/bg-img.jpg";

export const LoginWrapper = styled.div`
  margin-top: 80px;
  background-image: url("${BackgroundBG}");
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  padding: 40px 60px 80px 60px;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;

  @media (max-width: 768px) {
    padding: 40px 20px 60px 20px;
  }

  @media (max-width: 480px) {
    padding: 40px 10px 60px 10px;
  }
`;

export const LoginTitle = styled.h1`
  font-size: 48px;
  color: var(--dark-violet);
  text-shadow: -1px 0 1px var(--white);
  text-align: center;
  font-family: "Under-Rated";

  @media (max-width: 1024px) {
    font-size: 42px;
  }
  @media (max-width: 768px) {
    font-size: 38px;
  }
  @media (max-width: 480px) {
    font-size: 34px;
  }
  @media (max-width: 400px) {
    font-size: 30px;
  }
`;

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  padding: 20px 30px;
  align-items: center;
  gap: 20px;
  background-color: var(--white-menus);
  box-shadow: -6px 6px 6px var(--shadows), 6px 6px 6px var(--shadows);
  max-width: 500px;
  width: 100%;

  p {
    font-size: 16px;
    color: var(--dark-violet);
    text-align: center;
  }

  p a {
    margin-left: 8px;
    color: var(--dark-violet);
    font-weight: 600;
  }

  @media (max-width: 768px) {
    padding: 20px;
  }
  @media (max-width: 480px) {
    padding: 15px;
  }

  button {
    text-align: center;
    margin-top: 40px;
    width: 100%;
    border-radius: 5px;
    padding: 10px 20px;
    font-weight: 600;
    font-size: 22px;
    border: 1px solid var(--dark-violet);
    background-color: var(--dark-violet);
    color: var(--white);
    cursor: pointer;

    transition: all ease 0.2s;
    
    &:disabled{
        background-color: #112fb0;
    }

    &:hover {
      background-color: #112fb0;
      color: var(--grey-light);
      transition: all ease-in 0.2s;
    }

    @media (max-width: 768px) {
      font-size: 20px;
    }
    @media (max-width: 480px) {
      font-size: 18px;
    }
  }
`;

export const LoginContainInput = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  align-items: center;

  p {
    color: var(--red);
  }
`;

export const LoginLabel = styled.label`
  color: var(--dark-violet);
  font-size: 20px;
  font-weight: 600;

  @media (max-width: 768px) {
    font-size: 18px;
  }
  @media (max-width: 480px) {
    font-size: 16px;
  }
`;
export const LoginInput = styled.input`
  text-align: center;
  background-color: transparent;
  padding: 10px;
  font-size: 20px;
  width: 100%;
  border: none;
  outline: none;
  border-bottom: 2px solid #112fb050;
  position: relative;
  transition: all ease 0.15s;

  &:focus {
    border-color: var(--dark-violet);
    transition: all ease 0.15s;
  }

  &::placeholder {
    transform: scale(1);
    transition: all ease 0.15s;
    position: absolute;
    text-align: left;
  }

  &:focus::placeholder {
    top: -5px;
    left: -30px;
    transform: scale(0.6);
    transition: ease-in 0.15s;
    color: var(--dark-violet);
  }
`;
export const LoginBtn = styled.input`
  text-align: center;
  margin-top: 40px;
  width: 100%;
  border-radius: 5px;
  padding: 10px 20px;
  font-weight: 600;
  font-size: 22px;
  border: 1px solid var(--dark-violet);
  background-color: var(--dark-violet);
  color: var(--white);
  cursor: pointer;

  transition: all ease 0.2s;

  &:hover {
    background-color: #112fb0;
    color: var(--grey-light);
    transition: all ease-in 0.2s;
  }

  @media (max-width: 768px) {
    font-size: 20px;
  }
  @media (max-width: 480px) {
    font-size: 18px;
  }
`;
