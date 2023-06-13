import { styled } from "styled-components";
import { FaArrowAltCircleLeft } from "react-icons/fa";

export const HeadProductsWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  align-items: center;
  gap: 30px;
  width: 100%;
  max-width: 1300px;
  padding: 20px;

  @media (max-width: 1150px){
    justify-content: space-around;
  }

  @media (max-width: 1024px){
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    align-items: center;
    justify-items: center;
  }

  @media (max-width: 400px){
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
  }

`
export const BtnBack = styled.button`
  border: none;
  outline: none;
  background-color: transparent;
  cursor: pointer;
  justify-self: flex-end;
  position: relative;
  order: -1;
`
export const BtnBackIcon = styled(FaArrowAltCircleLeft)`
  font-size: 50px;
  color: var(--dark-violet);
  pointer-events: none;

   @media (max-width: 1024px){
    font-size: 46px;
  }

   @media (max-width: 768px){
    font-size: 40px;
  }

   @media (max-width: 480px){
    font-size: 36px;
  }
`