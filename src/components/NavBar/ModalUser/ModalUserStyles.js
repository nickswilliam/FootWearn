import { styled } from "styled-components";

export const ModalUserContainer = styled.div`
  justify-self: flex-start;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 320px;
  padding: 15px 0px;
  background-color: var(--white-menus);
  border-radius: 5px;
  gap: 10px;
  position: absolute;
  top: 80px;
  left: -80px;
  z-index: 4;
  box-shadow: 8px 8px 8px var(--shadows), -8px 8px 8px var(--shadows);
  transform: translateX(-100px);
  transition: all ease-in 0.35s;

  &::before {
    content: "";
    position: absolute;
    top: -15px;
    left: 100px;
    width: 0;
    height: 0;
    border-right: 15px solid transparent;
    border-bottom: 15px solid var(--black);
    border-left: 15px solid transparent;
    z-index: -1;
  }

  @keyframes openedModal {
    0% {
      transform: translateY(-100px) scaleY(0);
    }
    100% {
      transform: translateY(0) scaleY(1);
    }
  }

  @keyframes closedModal {
    0% {
      transform: translateY(0) scaleY(1);
    }
    100% {
      transform: translateY(-100px) scaleY(0);
    }
  }

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @keyframes fadeOut {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }

  &.openedModal {
    animation: openedModal ease-in 0.2s forwards, fadeIn ease 0.15s forwards;
  }

  &.closedModal {
    animation: closedModal ease-out 0.2s forwards, fadeOut ease 0.15s forwards;
  }

  @media (max-width: 967px) {
    border-top: 1px solid var(--black);
    border-radius: 0 0 5px 5px;
    align-items: center;
    width: 100%;
    left: 0;
    right: 0;

    &::before {
      display: none;
    }
  }
`;

export const ModalUserTitle = styled.h2`
  border-bottom: 1px solid var(--grey-dark);
  padding: 5px;
  color: var(--orange);
  font-size: 22px;
  text-align: center;
`;

export const ModalDivAnchor = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  width: 100%;

  a {
    color: var(--soft-black);
    font-size: 18px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    padding: 15px 10px;
    width: 100%;

    &:hover {
      background-color: var(--grey-light);
    }
  }
`;

export const ModalAnchors = styled.p`
  color: var(--black);
  font-weight: 600;
  font-size: 18px;
  cursor: pointer;
  padding: 15px 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: 100%;

  &:hover {
    background-color: var(--grey-light);
  }
`;
