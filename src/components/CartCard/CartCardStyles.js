import { styled } from "styled-components"

export const CartCardItem = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    justify-content: space-between;
    gap: 15px;
    padding: 10px 20px;
    border: 1px solid var(--grey-dark);
    border-radius: 10px;
    background-color: rgba(183, 153, 153, .3);
    backdrop-filter: blur(2px);

`

export const LeftCartInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    justify-content: center;
    align-items: center;
`

export const ImgItemCart = styled.img`
    width: 120px;
    height: 120px;
    border-radius: 10px;
    border: 1px solid var(--blue-light);
    padding: 2px;
    box-shadow: 0 0 6px var(--blue-light);

`

export const TitleItemCart = styled.h2`
    text-align: center;
    font-weight: 800;
    color: var(--orange);
    text-shadow: 0 0 3px var(--shadows);
`


export const RightCartInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;

`

export const TopRightInfo = styled.h3`
    text-align: left;
    font-weight: 600;
    font-size: 15px;
    color: var(--black);
    border-bottom: 1px solid var(--grey-dark);
    padding: 0 0 8px 2px;
`

export const RightMid = styled.div`
    justify-self: center;
    display: flex;
    gap: 10px;
    align-items: center;
    justify-content: center;

`

export const BtnsQuant = styled.button`
    border-radius: 10px;
    width: 40px;
    height: 40px;
    border: 1px solid transparent;
    outline: none;
    font-weight: 800;
    background-color: ${({ adder }) => (adder ? 'var(--blue-light)': 'var(--orange)')};
    cursor: pointer;
    color: var(--white);
    transition: all ease 0.3s;


    &:hover{
        background-color: ${({ adder }) => (adder ? 'var(--blue)': 'var(--light-orange)')};
    }
`
export const Quantity = styled.p`
    border-radius: 10px;
    border: 1px solid var(--grey-dark);
    text-align: center;
    padding: 10px 15px;

`

export const MidTopText = styled.span`
    align-self: center;
    border: 1px solid var(--grey-dark);
    border-radius: 10px;
    background-color: var(--grey-light);
    color: black;
    width: 45%;
    padding: 4px;
`

export const RightBottom = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`
export const PriceDiv = styled.div`
    align-self: center;
    background-color: var(--white);
    border: 1px solid var(--black);
    border-radius: 20px;
    display: flex;
    justify-content: space-between;
    align-items: last baseline;
    gap: 10px;
    padding: 10px 10px;

`

export const PriceContains = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const PriceText = styled.h3`
    font-size: 18px;
`
export const PriceTextOff = styled.h3`
    font-weight: 400;
    text-decoration: line-through;
    font-size: 10px;
    align-self: flex-end;
`

export const DiscountOff = styled.span`
    color: var(--green-light);
    font-size: 12px;

`
export const RightDiv = styled.div`
    align-self: center;
    display: flex;
    align-items: center;
    gap: 15px;
    background-color: var(--white-menus);
    padding: 10px;
    border: 1px solid var(--black);
    border-radius: 10px;
`

export const RightSizeText = styled.h3`
    color: var(--black);
    text-shadow: 0px 0px 1px var(--shadows);
`

export const RightSelect = styled.select`
    border-radius: 10px;
    padding: 4px;
    font-size: 14px;
    color: var(--white);
    background-color: var(--black);

`

export const RightOption = styled.option`
    background-color: var(--black);
    color: var(--green-light);

    &:disabled{
        color: var(--red-light);
        cursor: not-allowed;
    }
`