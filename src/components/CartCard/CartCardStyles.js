import { styled } from "styled-components";

export const CartCardItem = styled.div`
justify-self: flex-start;
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 15px;
  padding: 10px;
  border-radius: 5px;
  background-color: var(--white-menus);
  box-shadow: -4px 4px 6px var(--shadows), 4px 4px 6px var(--shadows);

  @media (max-width: 530px){
    flex-wrap: wrap;
    justify-content: center;
  }
`;

export const LeftCartInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  align-items: flex-start;
  padding: 10px;

  @media (max-width: 530px){
    align-items: center;
  }
`;

export const ImgItemCart = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 5px;
  border: 1px solid var(--grey-dark);
  box-shadow: -2px 2px 5px var(--shadows);
  padding: 2px;
`;
export const TitleItemCart = styled.h2`
  text-align: left;
  font-size: 22px;
  font-weight: 600;
  color: var(--dark-violet);

  @media (max-width: 530px){
    text-align: center;
  }
`;

export const RightCartInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  padding: 10px 20px;
`;
export const MidTopText = styled.span`
  align-self: center;
  color: black;
  padding: 4px;
  font-size: 18px;
`;

export const RightMid = styled.div`
  justify-self: center;
  display: flex;
  gap: 5px;
  align-items: center;
  justify-content: center;
`;

export const BtnsQuant = styled.button`
  border-radius: 5px;
  width: 35px;
  height: 35px;
  border: 1px solid var(--black);
  outline: none;
  font-weight: 800;
  background-color: ${({ adder }) => (adder ? "var(--black)" : "var(--white-menus)")};
  cursor: pointer;
  color: ${({ adder }) => (adder ? "var(--white-menus)" : "var(--black)")};
  transition: all ease 0.3s;

  &:hover {
    background-color: ${({ adder }) =>
      adder ? "var(--soft-black)" : "var(--grey-light)"};
  }
`;
export const Quantity = styled.p`
  text-align: center;
  padding: 10px;
  font-size: 18px;
`;

export const RightSizeText = styled.h3`
  color: var(--black);
  text-shadow: 0px 0px 1px var(--shadows);
  text-align: center;
  border-bottom: 1px solid var(--grey-dark);
  padding-bottom: 5px;
`;

export const PriceDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  padding: 10px 10px;
`;

export const PriceContains = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const PriceText = styled.h3`
  font-size: 18px;
  padding-bottom: 4px;
  border-bottom: 1px solid var(--grey-dark);
`;
export const PriceTextOff = styled.h3`
  font-weight: 400;
  text-decoration: line-through;
  font-size: 10px;
  align-self: flex-end;
`;

export const DiscountOff = styled.span`
    color: var(--red);
    text-align: center;
    font-size: 14px;
    padding: 5px 5px 5px 20px;
    background-color: var(--white-transparent);
    position: relative;
    border-radius: 3px;
    border: 1px solid var(--black);

    &::before {
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
