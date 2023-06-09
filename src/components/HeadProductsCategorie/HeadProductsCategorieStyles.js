import { styled } from "styled-components";
import { FaArrowAltCircleLeft } from "react-icons/fa";

export const HeadProductsWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  gap: 30px;
  width: 100%;
  max-width: 1300px;
  padding: 20px;

`
export const BtnBack = styled.button`
  border: none;
  outline: none;
  background-color: transparent;
  cursor: pointer;
  justify-self: flex-end;
  position: relative;
`
export const BtnBackIcon = styled(FaArrowAltCircleLeft)`
  font-size: 50px;
  color: var(--dark-violet);
  pointer-events: none;
`