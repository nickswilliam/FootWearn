import { styled } from "styled-components";

export const CardsProductsContainer = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    padding: 20px 0px;
    flex-wrap: wrap;
    gap: 30px;
    transition: all ease 0.25s;
`

export const PaginationContainer = styled.div`
    display: flex;
    gap: 20px;
    width: 100%;
    justify-content: space-around;
    align-items: center;
`
export const PaginateBtn = styled.button`
    display: flex;
    gap: 10px;
    font-size: 18px;
    font-weight: 600;
    align-items: center;
    padding: 10px 20px;
    outline: none;
    border: 1px solid ${({secondary})=> (secondary? 'var(--white)' : 'var(--black)')};
    background-color: ${({secondary})=> (secondary? 'var(--black)' : 'var(--white)')};
    color: ${({secondary})=> (secondary? 'var(--white)' : 'var(--black)')};
    box-shadow: 4px 4px 6px var(--shadows);
    cursor: pointer;
    transition: all ease .1s;
    

    &:disabled{
        background-color: ${({secondary})=> (secondary && 'var(--grey-dark)')};
        color: ${({secondary})=> (secondary? 'var(--grey-light)' : 'var(--grey-dark)')};
        cursor: not-allowed;
        border-color: ${({secondary})=> (secondary? 'var(--grey-dark)' : 'var(--grey-light)')};
        transition: all ease-in .1s;
    }

    &:hover{
        opacity: 1;
        transition: all .1s ease;
    }
`


export const PagedContainer = styled.div`
    display: flex;
    gap: 5px;
    justify-content: center;
    align-items: center;
`

export const PagedBox = styled.button`
    border: 1px solid var(--black);
    width: 40px;
    height: 40px;
    font-size: 18px;
    font-weight: 600;
    color:  var(--black);
    text-align: center;
    background-color: white;
    outline: none;
    box-shadow: 2px 2px 5px var(--shadows);
    cursor: pointer;
    transform: scale(1);
    transition: all ease-in .1s;



    &.active{
        background-color: var(--black);
        color: var(--white);
        transition: all ease-out .1s;
    }

    &:hover{
        opacity: 1;
        transform: scale(1.05);
        transition: all ease-in .1s;
    }
`