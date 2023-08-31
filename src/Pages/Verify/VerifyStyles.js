import { styled } from "styled-components";

export const VerifyContainer = styled.div`
    align-self: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 800px;
    min-height: 600px;
    margin-top: 20px;
    gap: 40px;
    padding: 30px 20px;
    h1{
        color: var(--orange);
    }

    span{
        color: var(--red);
        font-size: 18px;
        font-weight: 600;
    }

    form{
        display: flex;
        flex-direction: column;
        gap: 30px;
        width: 100%;

        button{
            outline: none;
            background-color: var(--orange);
            border: 1px solid var(--orange);
            font-size: 22px;
            padding: 10px 20px;
            color:  var(--white);
            border-radius: 5px;
            cursor: pointer;
            transition: all ease .15s;

            &:hover{
                background-color: var(--orange2);
                border-color: var(--orange2);
            }

            &:disabled{
                background-color: var(--light-orange);
                border-color: var(--light-orange);
            }
        }
    }
`

export const InputsVerify =  styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 100%;

    label{
        font-size: 20px;
        color: var(--orange);
        font-weight: 600;
        text-align: center;
    }
    input{
        outline: none;
        border: none;
        font-size: 18px;
        border-bottom: 1.5px solid var(--orange);
        padding: 10px;
        transition: all ease-in .15s;
        text-align: center;

        &:focus{
            border-color: var(--light-orange);
            transition: all ease .15s;
        }
    }

    p{
        font-size: 14px;
        color:  var(--red);
    }
`