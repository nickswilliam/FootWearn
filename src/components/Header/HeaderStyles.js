import { styled } from "styled-components";
import { NavLink } from "react-router-dom";
import { FaCartPlus } from "react-icons/fa";
import { ButtonTransparent } from "../UI/UIStyles";

export const HeaderContainer = styled.header`
    background-color: var(--white-menus);
    z-index: 4;
    width: 100%;
    height: 80px;
    padding: 20px 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 30px;
    box-shadow: 0px 5px 6px var(--shadows);
    position: fixed;

    @media (max-width: 1024px){
        padding: 20px 15px;
    }

    @media (max-width: 768px){
        padding: 15px 10px;
    }
`
export const SearchWrapper = styled.div`
    width: 100%;
    @media (max-width: 1200px){
        display: none;
    }
`

export const ImgLogo = styled.img`
        width: 300px;
        height: auto;
        padding: 5px 10px;
        cursor: pointer;
        transition: all ease .2s;

        @media (max-width: 1024px){
            width: 270px;
            padding: 5px;
        }

        @media(max-width: 768px){
            width: 70px;
        }

        @media (max-width: 480px){
            width: 60px;
        }

        @media (max-width: 400px){
            width:50px;
            padding: 0;
        }
`
export const NavWrapper = styled.div`
    order: 4;
    display: flex;
    align-items: center;
    justify-self: flex-end;
    gap: 15px;
    position: relative;
    order: 3;
`

export const BtnTransparent = styled.button`
    border: none;
    outline: none;
    background-color: transparent;
`

export const SearchBtn = styled.button`
    border: none;
    outline: none;
    background-color: transparent;
    position: relative;
    cursor: pointer;

    &::before{
        content: '';
        position: absolute;
        
        top: 30px;
        left: auto;
        right: auto;
        width: 25px;
        height: 2px;
        transform-origin: left;
        background-color: var(--black);
        transform: scaleX(0);
        transition: all ease .2s;
    }

    &:hover::before{
        transform: scaleX(1);
        transition: all ease-in .15s;
    }

`

export const ToggleMenuBtn = styled(BtnTransparent)`
    display: none;
    position: relative;
    cursor: pointer;
    &:hover{
        opacity: .8;
        transition: all ease-in .3s;
    }

    &::before{
        content: '';
        position: absolute;
        
        top: 30px;
        left: auto;
        right: auto;
        width: 30px;
        height: 2px;
        transform-origin: left;
        background-color: var(--black);
        transform: scaleX(0);
        transition: all ease .2s;
    }

    &:hover::before{
        transform: scaleX(1);
        transition: all ease-in .15s;
    }

    @media (max-width: 967px){
        order: 2;
        display: block;
    }

`

export const UserNavLink = styled(NavLink)`
    color: var(--black);
    padding: 15px 17px;
    font-weight: 600;
    text-decoration: none;
    border-radius: 50%;
    opacity: 1;
    transition: all ease .25;
    

    &.active{
        font-weight: 800;
        color: var(--blue-light);
        transition: all ease-in .25;
    }

    &:hover{
        background-color: var(--light-blue);
        transition: all ease-in .3s;
    }
`
export const ButtonCart = styled(ButtonTransparent)`
    text-align: center;
    padding: 15px 18px;
    opacity: 1;
    transition: all ease-out .35s;
    position: relative;

    &:hover{
        opacity: .8;
        transition: all ease-in .3s;
    }

    &::before{
        content: '';
        position: absolute;
        bottom: 10px;
        left: auto;
        right: auto;
        width: 50%;
        height: 2px;
        transform-origin: left;
        background-color: var(--black);
        transform: scaleX(0);
        transition: all ease .2s;
    }

    &:hover::before{
        transform: scaleX(1);
        transition: all ease-in .15s;
    }
    
`

export const Cart = styled(FaCartPlus)`
    text-align: center;
    font-size: 24px;
    color: var(--black);
    font-weight: 600;
`
export const Overlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    z-index: 2;
    background-color: rgba(13,14,15, 0.8);
`
export const CartBubble = styled.div`
    position: absolute;
    top: 10px;
    right: 8px;
    width: 20px;
    height: auto;
    background-color: var(--red);
    border: 1px solid transparent;
    border-radius: 5px;
    color: var(--white-menus);
    font-weight: 600;
    font-size: 12px;
    transition: all ease .4s;
`   