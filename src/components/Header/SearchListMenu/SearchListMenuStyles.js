import { styled } from "styled-components";

export const SearchListMenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 0px;
  width: 100%;
  overflow-y: scroll;
  max-height: 200px;
  gap: 10px;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const SearchCardContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 50px;
  padding: 2px 4px;
  gap: 10px;
  cursor: pointer;

  img {
    margin-left: 10px;
    width: 40px;
    height: 40px;
  }

  &:hover{
    background-color: var(--grey-light);
    transition: all ease .2s;
  }
`;
export const SearchCardTextCont = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  
  h2 {
    color: ${({ typed }) => (typed ? "var(--red)" : "var(--black)")};
  }
`;
