import { styled } from "styled-components";

export const UserLoggedContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    border-bottom: 1px solid var(--grey-dark);
    margin-top: 80px;
    padding: 10px;
    background-color: var(--grey-light);
    position: sticky;
    top: 80px;
    z-index: 3;
    gap: 20px;

    span{
        font-size: 20px;
        font-weight: 600;
        text-align: center;
    }
    button{
        background-color: var(--orange);
        font-size: 16px;
        color: var(--white);
        padding: 5px 8px;
        border: 1px solid var(--orange);
        border-radius: 5px;
        cursor: pointer;
        transition: all ease .15s;

        &:hover{
            background-color: var(--orange2);
            border-color: var(--orange2);
            color: var(--grey-light);
        }
    }
`