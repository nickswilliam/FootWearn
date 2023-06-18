import { styled } from "styled-components";

export const OrderCardDetailContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 30px;

  @media (max-width: 768px) {
    gap: 20px;
  }
`;

//Order name Styles
export const OrderNameContainer = styled.div`
  padding: 20px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;

  h2 {
    color: var(--orange);
    font-size: 28px;

    @media (max-width: 1024px) {
      font-size: 26px;
    }

    @media (max-width: 768px) {
      font-size: 24px;
    }
    @media (max-width: 480px) {
      font-size: 22px;
    }
    @media (max-width: 400px) {
      font-size: 20px;
    }
  }

  @media (max-width: 768px) {
    padding: 10px;
  }
`;
export const OrderNameText = styled.h3`
  color: var(--dark-violet);
  font-size: 22px;

  @media (max-width: 768px) {
    font-size: 20px;
  }
  @media (max-width: 480px) {
    font-size: 18px;
  }

  @media (max-width: 400px) {
    font-size: 16px;
  }
`;

export const OrderNameMid = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  width: 100%;

  p {
    color: var(--dark-violet);
    font-size: 18px;
    border-right: 1px solid var(--grey-dark);
    padding-right: 10px;

    @media (max-width: 768px) {
      font-size: 16px;
    }
    @media (max-width: 480px) {
      font-size: 14px;
    }

    @media (max-width: 400){
      border-right: 1px solid var(--transparent);
    }
  }

  span {
    color: var(--dark-violet);
    font-size: 18px;

    @media (max-width: 768px) {
      font-size: 16px;
    }
    @media (max-width: 480px) {
      font-size: 14px;
    }
  }

  @media (max-width: 400px){
    flex-direction: column;
  }
`;
export const OrderNameBot = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  gap: 10px;

  p {
    color: var(--dark-violet);
    font-size: 18px;
    font-weight: 600;

    @media (max-width: 768px) {
      font-size: 16px;
    }
    @media (max-width: 480px) {
      font-size: 14px;
    }
  }
`;

//OrderITems Styles

export const OrderItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  padding: 20px;
  background-color: var(--white-menus);
  box-shadow: -4px 4px 6px var(--shadows), 4px 4px 6px var(--shadows);

  @media (max-width: 768px) {
    padding: 15px;
  }
  @media (max-width: 480px) {
    padding: 10px;
  }
`;

export const OrderItemsTitle = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 10px 20px;
  cursor: pointer;

  h2 {
    font-size: 26px;
    color: var(--black);

    @media (max-width: 1024px) {
      font-size: 24px;
    }

    @media (max-width: 768px) {
      font-size: 22px;
    }
    @media (max-width: 480px) {
      font-size: 20px;
    }
    @media (max-width: 400px) {
      font-size: 18px;
    }
  }

  svg {
    font-size: 26px;
    &.normalDown {
      transform: rotate(0);
      transition: all ease 0.15s;
    }
    &.rotateUpped {
      transform: rotate(-180deg);
      transition: all ease 0.15s;
    }

    @media (max-width: 768px) {
      font-size: 24px;
    }
    @media (max-width: 480px) {
      font-size: 22px;
    }
  }

  @media (max-width: 768px) {
    padding: 10px 15px;
  }

  @media (max-width: 480px) {
    padding: 10px;
  }
`;

export const OrderItemCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  padding: 10px;
  max-height: 200px;
  overflow-y: scroll;
  width: 100%;

  &::-webkit-scrollbar {
    display: none;
  }
`;

//Order card Item

export const OrderItemCardContainer = styled.div`
  display: flex;
  gap: 10px;
  background-color: var(--white-menus);
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 15px;
  border-radius: 5px;
  box-shadow: -4px 4px 6px var(--shadows), 4px 4px 6px var(--shadows);

  @media (max-width: 768px){
    padding: 10px;
  }

  @media (max-width: 480px){
    flex-direction: column;
    align-items: center;
  }
`;
export const LeftCardOrderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 10px;

  h3 {
    color: var(--orange);
    font-size: 20px;

    @media (max-width: 768px){
      font-size: 18px;
    }
    @media (max-width: 480px){
      font-size: 16px;
    }
  }

  img {
    width: 30px;
    height: 30px;
    border-radius: 4px;
    padding: 1px;
    border: 1px solid var(--grey-dark);
  }
`;

export const LeftBottomContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
`;

export const OrderItemMid = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  p {
    padding-bottom: 3px;
    border-bottom: 1px solid var(--grey-dark);
  }

  span {
    font-weight: 600;
  }
`;
