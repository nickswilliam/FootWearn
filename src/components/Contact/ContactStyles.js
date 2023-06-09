import { styled } from "styled-components";

export const ContactContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  max-width: 1300px;
  width: 100%;
  height: auto;
  margin-top: 80px;
  padding-bottom: 80px;
`;
export const ContactLeftDiv = styled.div`
  margin-top: 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 30px;
  padding: 20px 30px;

  iframe {
    width: 300px;
    height: 300px;
    border: none;
    border-radius: 5px;
    box-shadow: -4px 4px 6px var(--shadows);
  }

  p {
    color: var(--black);
    font-size: 20px;
  }

  span {
    font-weight: 600;
    color: var(--blue-light);
  }
`;

export const ContactTitle = styled.h2`
  font-size: 40px;
  color: var(--orange);
  text-shadow: -1px 1px 1px var(--soft-black);
  margin-top: 40px;
`;

export const ContactRightDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 50px;
  align-self: center;

  h2 {
    color: var(--orange);
    font-size: 30px;
  }
`;

export const ContainerInputs = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  width: 100%;
`;

export const ContainInput = styled.div`
  display: flex;
  align-items: center;
  padding: 15px 20px;
  gap: 10px;
  background-color: var(--white-menus);
  box-shadow: -4px 4px 4px var(--shadows);
  width: 100%;
  transition: all ease 0.15s;

  &:hover {
    box-shadow: 0 0 10px var(--blue-light);
    transform: scale(1.01);
    transition: all ease-in 0.15s;
  }
`;
export const ContactLabel = styled.label`
  font-size: 22px;
  color: var(--black);
  font-weight: 600;
`;

export const ContactInput = styled.input`
  border: none;
  font-size: 22px;
  padding: 10px;
  border-bottom: 1px solid var(--black);
  outline: none;
  background-color: transparent;
  transform: scale(1);
  transition: all ease 0.2s;
  position: relative;

  &::placeholder {
    transform: scale(1);
    text-align: center;
    transition: all ease 0.2s;
  }

  &:focus::placeholder {
    position: absolute;
    transform: scale(0.6);
    top: -5px;
    left: -30px;
    color: var(--blue-light);
    transition: all ease 0.2s;
  }

  &:hover {
    border-color: var(--grey-dark);
    transition: all ease 0.2s;
  }
`;

export const SubmitBtn = styled.input`
  border-radius: 5px;
  color: var(--white);
  margin-top: 40px;
  width: 100%;
  padding: 10px 20px;
  font-size: 22px;
  font-weight: 600;
  outline: none;
  border: 1px solid var(--orange2);
  background-color: var(--orange);
  cursor: pointer;
  transition: all ease 0.2s;

  &:hover {
    opacity: 0.9;
    color: var(--grey-light);
    background-color: var(--orange2);
    transition: all ease 0.2s;
  }
`;
