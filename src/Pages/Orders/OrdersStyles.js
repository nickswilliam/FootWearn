import { styled } from "styled-components";
import OrderBG from "../../assets/imgs/orders/bg-img.jpg";

export const OrderBGContainer = styled.div`
  background-image: url("${OrderBG}");
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  margin-top: 80px;
  height: auto;
  min-height: 700px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

export const OrdersContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 30px;
  width: 100%;
  padding: 60px 40px;
  min-height: 700px;
  max-width: 1300px;

  h1 {
    font-family: "Under-Rated";
    color: var(--soft-black);
    text-shadow: -2px 0px 1px var(--white);
  }
`;
export const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;

  button{
    outline: none;
    border: 1px solid var(--black);
    border-radius: 5px;
    padding: 10px 20px;
    width: 50%;
    font-size: 20px;
    font-weight: 600;
    color: var(--white);
    background-color: var(--black);
    text-align: center;
    cursor: pointer;
    transition: all ease .2s;

    &:hover{
      background-color: var(--soft-black);
      color: var(--grey-dark);
    }
  }
`;
export const NoOrderText = styled.p`
  font-size: 24px;
  color: var(--red);
  font-weight: 600;
  margin-top: 40px;
  text-align: center;
`;

export const OrdersLists = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--white-menus);
  padding: 20px;
  gap: 20px;
  box-shadow: -8px 8px 10px var(--shadows), 8px 8px 10px var(--shadows);
  min-width: 400px;
  max-width: 700px;
  width: 100%;
  min-height: 400px;
  max-height: 600px;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`;
export const RightContainer = styled(LeftContainer)``;
