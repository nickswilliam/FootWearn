import { styled } from "styled-components";

export const SearchBarForm = styled.form`
  display: flex;
  border: 1px solid var(--grey-dark);
  border-bottom: ${({ bordered }) =>
    bordered ? "1px solid transparent" : "1px solid var(--grey-dark)"};
  padding: 10px 10px;
  max-width: 1200px;
  width: 50%;
  gap: 10px;
  position: relative;
  transition: all ease 0.3s;

  &:hover {
    border: 1.5px double var(--black);
    transition: all ease-in 0.25s;
  }

  @media (max-width: 1200px) {
    border: none;
    position: absolute;
    top: 80px;
    left: 0;
    width: 100%;
    height: 40px;
    max-width: 100%;
    padding: 10px 20px;

    &:hover {
      background-color: var(--white-menus);
      border: 1px solid var(--grey-light);
    }
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
  top: 40px;
  left: 0;
  border: 1px solid var(--black);
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
