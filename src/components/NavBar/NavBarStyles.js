import { styled } from "styled-components";
import { NavLink, Link } from "react-router-dom";

export const Navbar = styled.nav`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px 15px;
`

export const NavUl = styled.ul`
    display: flex;
    align-items: center;
    justify-content: space-around;
    gap: 20px;
`

export const NavLi = styled.li`
    font-size: 22px;
    font-weight: 600;
    padding: 29px 0px;
    height: 100%;
    color: var(--black);
    cursor: pointer;
    position: relative;
    display: flex;
    align-items: baseline;
    gap: 10px;

    svg{
        &.normal{
            transform: rotate(0);
            transition: all ease .15s;
        }
        &.rotateUp{
            transform: rotate(-180deg);
            transition: all ease .15s
        }
    }
`
export const StyledNavLink = styled(NavLink)`
    display: flex;
    gap: 15px;
    align-items: center;
    padding: 20px 30px;
    text-decoration: none;
    color: var(--black);
    transition: all ease .25;
    position: relative;
    &.active{
        font-weight: 800;   
        background: linear-gradient(to right, var(--blue-light), var(--brown-dark));
        -webkit-background-clip: text;
        background-clip: text;
        color: transparent;
        transition: all ease-out .3s;

        svg{
            color: var(--blue-light);
        }
    }

    &.activate{
        font-weight: 800;   
        color: var(--blue-light)
    }
    
    &:active{
        color: var(--blue-light);
    }

    svg{
        color: var(--black);
    }
`

export const LiMenu = styled.ul`
    justify-self: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px 0;
    background-color: var(--white-menus);
    border: 1px solid var(--grey-dark);
    border-radius: 10px;
    gap: 5px;
    position: absolute;
    top: 80px;
    left: -2px;
    z-index: 4;
    box-shadow: 8px 8px 8px var(--shadows);
    transition: all ease-in 0.35s;
    
    &::before{
        content: '';
        position: absolute;
        top: -15px;
        left: 35px;
        width: 0;
        height: 0;
        border-right: 15px solid transparent;
        border-bottom: 15px solid var(--black);
        border-left: 15px solid transparent;
        z-index: -1;
}
    

    @keyframes opened {
        0%{
            transform: translateY(-100px) scaleY(0);
        }
        100%{
            transform: translateY(0) scaleY(1);
        }
    }

    @keyframes closed {
        0%{
            transform: translateY(0) scaleY(1);
        }
        100%{
            transform: translateY(-100px) scaleY(0);
        }
    }

    @keyframes fadeIn {
        0%{
            opacity: 0;
        }
        100%{
            opacity: 1;
        }
    }

     @keyframes fadeOut {
        0%{
            opacity: 1;
        }
        100%{
            opacity: 0;
        }
    }
    
    &.openedSection{
        animation: opened ease-in 0.2s forwards, fadeIn ease 0.15s forwards;
    }

    &.closedSection{
        animation: closed ease-out 0.2s forwards, fadeOut ease 0.15s forwards;
    }

`

export const MenuItem = styled.li`
    width: 100%;
    cursor: pointer;
    transition: all ease 0.25s;


    &:hover{
        background-color: var(--grey-light);
        transition: all ease-in 0.25s;
    }

`
export const MenuItemText = styled(Link)`
    width: 100%;
    padding: 20px 70px;
    text-align: center;
    font-size: 20px;
    font-weight: 600;
    color: var(--black);
    display: flex;
    align-items: center;
    gap: 15px;
    transform: scale(1);
    transition: all ease 0.25s;

    &:hover{
        transform: scale(1.08);
        transition: all ease 0.25s;
    }
`