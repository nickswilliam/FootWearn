import { styled } from "styled-components";

export const CardProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--white-menus);
  border: 1px solid var(--grey-dark);
  gap: 10px;
  box-shadow: 4px 4px 8px var(--shadows), -4px 4px 8px var(--shadows);
  width: 100%;
  max-width: 400px;
  height: 600px;
`;

export const CardProductMidContainer = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const CardProductPrices = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;

  span {
    color: var(--grey-dark);
    text-decoration: line-through;
    font-size: 14px;
  }

  p {
    color: var(--red);
    font-size: 14px;
    padding: 5px 5px 5px 20px;
    background-color: var(--grey-light);
    position: relative;
    border: 1px solid var(--black);
  }

  p::before {
    content: "";
    position: absolute;
    right: auto;
    border: 1px solid var(--black);
    top: 8px;
    left: 4px;
    height: 8px;
    width: 8px;
    border-radius: 50%;
    background-color: var(--white);
  }
`;

export const CardProductBottomContainer = styled(CardProductMidContainer)``;

export const BtnAddToCart = styled.button = styled.button`
    width: 100%;
    padding: 10px 20px;
    color: var(--white);
    background-color: var(--green-light);
    border: 1px solid var(--gren);
    font-size: 18px;
    font-weight: 600;
    outline: none;
    transition: all ease .15s;
    cursor: pointer;

    &:hover{
      transition: all ease-in .15s;
      background-color: #2effa1;
    }
`
