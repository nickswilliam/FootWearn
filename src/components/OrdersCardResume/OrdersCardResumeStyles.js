import { styled } from "styled-components";

export const OrdersResumeContainer = styled.div`
    padding: 20px 30px;
    background-color: white-menus;
    border-radius: 5px;
    box-shadow: -4px 4px 6px var(--shadows), 4px 4px 6px var(--shadows);
    width: 100%;
    display: flex;
    align-items: center;
    gap: 20px;
    cursor: pointer;

    img{
        height: 80px;
        width: 80px;
        border: 1px solid var(--grey-dark);
        border-radius: 5px;
        padding: 1px;
    }
`
export const LeftContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;

    h2{
        color: var(--orange);
    }
    
    p{
        color: var(--black);
        font-weight: 600;
    }

`
export const RightContainer = styled(LeftContainer)`
    flex-direction: row;
    align-items: center;

    p{  
        color: var(--black);
        font-weight: 400;
    }

    span{
        color: var(--black)
    }
`