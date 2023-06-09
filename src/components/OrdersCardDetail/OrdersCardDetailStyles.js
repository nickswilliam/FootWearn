import { styled } from "styled-components";

export const OrderCardDetailContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 30px;
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
  }
`;
export const OrderNameText = styled.h3`
  color: var(--dark-violet);
  font-size: 22px;
`;

export const OrderNameMid = styled.div`
  display: flex;
  gap: 10px;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  p {
    color: var(--dark-violet);
    font-size: 18px;
    border-right: 1px solid var(--grey-dark);
    padding-right: 10px;
  }

  span {
    color: var(--dark-violet);
    font-size: 16px;
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
`;

export const OrderItemsTitle = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 10px 20px;
  cursor: pointer;


  svg{
    font-size: 26px;
        &.normalDown{
            transform: rotate(0);
            transition: all ease .15s;
        }
        &.rotateUpped{
            transform: rotate(-180deg);
            transition: all ease .15s
        }
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
    box-shadow: -4px 4px 6px var(--shadows), 4px 4px 6px var(--shadows)
    ;

    h3{
        color: var(--orange);
    }
    
`
export const OrderItemMid = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;

    p{
        padding-bottom: 3px;
        border-bottom: 1px solid var(--grey-dark);
    }

    span{
        font-weight: 600;
    }
`

