import styled from "styled-components";

export const IssuesContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
    padding: 40px 30px 40px 30px;
    align-items: center;
    width: 100%;
    min-height: 600px;
`

export const IssueContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 100%;
    align-items: center;

    h1{
        color: var(--orange);
        text-align: center;
    }

    button{
        outline: none;
        border:  1px solid var(--orange);
        padding: 10px 20px;
        background-color: var(--orange);
        color: var(--white);
        border-radius: 5px;
        font-size: 18px;
        cursor: pointer;
        font-weight: 600;
        width: 100%;
        max-width: 600px;
        transition: all ease .15s;
        

        &:hover{
            background-color: var(--orange2);
            border-color: var(--orange2);
            color: var(--grey-light);
            
        }
    }

    h2{
        color: var(--orange);
        text-align: center;
    }

    form{
        display: flex;
        flex-direction: column;
        gap: 20px;
        align-items: center;
    }
`

export const Inputcontainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;

    label{
        font-size: 20px;
        font-weight: 600;
        color: var(--orange);
        text-align: center;
    }

    input{
        outline: none;
        border: none;
        border-bottom: 1px solid var(--orange);
        background-color: transparent;
        padding: 10px 20px;
        font-size: 18px;
        text-align: center;
        transition: all ease .15s;

        &:focus{
            border-color: var(--light-orange);
        }
        &::placeholder{
            font-size: 16px;
        }
    }

    p{
        color: var(--red);
        font-size: 14px;
    }

`