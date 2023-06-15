import { styled } from "styled-components";

export const SearchBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: calc(100vh - 80px);
  position: absolute;
  top: 80px;
  left: 0;
  background-color: rgba(13, 14, 15, 0.5);
  backdrop-filter: blur(5px);
  padding: 10px 20px 30px 20px;
`

export const SearchBarForm = styled.form`
  display: flex;
  border: 1px solid var(--black);
  background-color: var(--white-menus);
  border-radius: 5px;
  border-bottom: ${({ bordered }) =>
    bordered ? "1px solid transparent" : "1px solid var(--grey-dark)"};
  padding: 10px 20px;
  max-width: 1200px;
  height: 60px;
  width: 80%;
  gap: 10px;
  transition: all ease 0.3s;
  position: relative;

  &:hover {
    border: 1.5px double var(--black);
    transition: all ease-in 0.25s;
  }

`;

export const SearchInput = styled.input`
  border: none;
  background-color: transparent;
  outline: none;
  width: 100%;
  font-size: 18px;

  &::placeholder {
    text-overflow: ellipsis;
  }

  &:focus {
    font-weight: 600;
  }

  &:focus::placeholder {
    font-weight: normal;
  }

  @media (max-width: 1200px) {
    &::placeholder {
      color: var(--white-transparent);
    }

    &:focus::placeholder {
      color: var(--grey-dark);
    }

    &:hover::placeholder{
      color: var(--grey-dark);
    }
  }
`;

export const ButtonTransparent = styled.button`
  border: none;
  outline: none;
  background-color: transparent;
  cursor: pointer;
`;

export const SearchList = styled.div`
  position: absolute;
  top: 59px;
  left: 0;
  border: 1px solid var(--black);
  border-radius: 0 0 5px 5px;
  border-top: ${({ bordered }) =>
    bordered ? "1px solid transparent" : "1px solid var(--grey-dark)"};
  background-color: var(--white-menus);
  width: 100%;
  height: auto;
  z-index: 4;

  &::-webkit-scrollbar {
    display: none;
  }
`;
