import { styled } from "styled-components";

export const ModalUserContainer = styled.div`
  justify-self: flex-start;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 300px;
  padding: 15px 20px;
  background-color: var(--white-menus);
  border-radius: 10px;
  gap: 30px;
  position: absolute;
  top: 100px;
  left: 0px;
  z-index: 4;
  box-shadow: 8px 8px 8px var(--shadows), -8px 8px 8px var(--shadows);
  transform: translateX(-100px);
  transition: all ease-in 0.35s;


  &::before {
    content: "";
    position: absolute;
    top: -15px;
    left: 150px;
    width: 0;
    height: 0;
    border-right: 15px solid transparent;
    border-bottom: 15px solid var(--black);
    border-left: 15px solid transparent;
    z-index: -1;
  }

  /* @keyframes opened {
        0%{
            transform: translateY(-100px) scaleY(0);
        }
        100%{
            transform: translateY(0) scaleY(1);
        }
    }

    @keyframes closed {
        0%{
            transform: translateY(0) scaleY(1);
        }
        100%{
            transform: translateY(-100px) scaleY(0);
        }
    }

    @keyframes fadeIn {
        0%{
            opacity: 0;
        }
        100%{
            opacity: 1;
        }
    }

     @keyframes fadeOut {
        0%{
            opacity: 1;
        }
        100%{
            opacity: 0;
        }
    }
    
    &.openedSection{
        animation: opened ease-in 0.2s forwards, fadeIn ease 0.15s forwards;
    }

    &.closedSection{
        animation: closed ease-out 0.2s forwards, fadeOut ease 0.15s forwards;
    }
 */
`;

export const ModalUserTitle = styled.h2`
  border-bottom: 1px solid var(--grey-dark);
  padding: 5px;
  color: var(--orange);
  font-size: 20px;
`;

export const ModalDivAnchor = styled.div`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;

  a {
    color: var(--soft-black);
    font-size: 18px;

    &:hover{
      color: var(--grey-dark);
    }
  }
`;

export const ModalAnchors = styled.p`
  color: var(--black);
  font-weight: 600;
  font-size: 18px;
  cursor: pointer;
  padding-bottom: 3px;

  &:hover {
    color: var(--grey-dark);
  }
`;
