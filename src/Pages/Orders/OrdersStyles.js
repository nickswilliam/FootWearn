import { styled } from "styled-components";
import OrderBG from "../../assets/imgs/orders/bg-img.jpg";

export const OrderBGContainer = styled.div`
  background-image: url("${OrderBG}");
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
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
    font-size: 32px;

    @media (max-width: 1024px) {
      font-size: 30px;
    }
    @media (max-width: 768px) {
      font-size: 28px;
      text-align: center;
    }
    @media (max-width: 480px) {
      font-size: 26px;
    }
  }

  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;
export const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  max-width: 800px;

  button {
    outline: none;
    border: 1px solid var(--black);
    border-radius: 5px;
    padding: 10px 20px;
    font-size: 20px;
    font-weight: 600;
    color: var(--white);
    background-color: var(--black);
    text-align: center;
    cursor: pointer;
    transition: all ease 0.2s;

    &:hover {
      background-color: var(--soft-black);
      color: var(--grey-dark);
    }

    @media (max-width: 768px) {
      font-size: 18px;
    }
    @media (max-width: 480px) {
      font-size: 16px;
    }
  }
`;

export const OrdersLists = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--white-menus);
  padding: 20px;
  gap: 20px;
  box-shadow: -8px 8px 10px var(--shadows), 8px 8px 10px var(--shadows);
  max-width: 700px;
  width: 100%;
  min-height: 400px;
  max-height: 600px;

  @media (max-width: 768px){
    padding: 15px;
  }

  @media (max-width: 480px){
    padding: 10px;
  }
`;

export const OrdersListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 10px;
  max-width: 700px;
  width: 100%;
  max-height: 400px;
  overflow-y: scroll;

  &::-webkit-scrollbar{
    display: none;
  }

`;

export const NoOrderText = styled.p`
  font-size: 24px;
  color: var(--red);
  font-weight: 600;
  margin-top: 40px;
  text-align: center;
`;
export const RightContainer = styled(LeftContainer)`
  max-width: 600px;

  @media (max-width: 1024px){
    width: 100%;
  }
`;
