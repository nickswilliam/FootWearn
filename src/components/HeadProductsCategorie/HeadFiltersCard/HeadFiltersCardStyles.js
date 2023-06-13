import { styled } from "styled-components"

export const HeadFilterCard =  styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 250px;
  height: auto;
  border: 1px solid var(--grey-dark);
  box-shadow: 4px 4px 4px var(--red-light), -4px -4px 4px var(--blue-light);
  transition: all ease .2s;
  overflow: hidden;
  cursor: pointer;

  &:hover:nth-child(odd){
    transform: scale(1.1) rotate(-2deg);
    transition: all ease-in .2s;
  }

  &:hover:nth-child(even){
    transform: scale(1.1) rotate(2deg);
    transition: all ease-in .2s;
  }

  &::before{
    content: '';
    position: absolute;
    top: -100%;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: transparent;
    transition: all ease .3s;
  }

  &:hover::before{
    background-color: ${({cardcolor}) =>(
      cardcolor === 'card1'
      ? 'var(--red)' 
      : cardcolor === 'card2' 
      ? 'var(--green)'
      : cardcolor === 'card3' 
      ? 'var(--blue-light)'
      : 'var(--yellow)'
    )};
    opacity: .6;
    top: 0;
    transition: all ease .4s;
  }

  &:hover{
    &h2{
      transform: scale(1.5) translateY(100px);
      transition: all ease .2s;
    }
  }

  @media (max-width: 1024px){
    width: 200px;
  }

  @media (max-width: 500px){
    width: 150px;
  }
`

export const HeadCardText = styled.h2`
  position: absolute;
  right: auto;
  left: auto;
  color: var(--dark-violet);
  text-shadow: 1px 1px 2px var(--shadows), -2px 2px 2px var(--light-blue);
  font-weight: 600;
  transition: all ease-in .2s;
  pointer-events: none;

`
export const HeadCardImg = styled.img`
  width: 100%;
  height: auto;
`
