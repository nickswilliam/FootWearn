import { styled } from "styled-components";
import BackgroundIMG from "../../assets/imgs/notfound/bg-img.jpg";

export const NotFoundContainer = styled.div`
  margin-top: 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: url("${BackgroundIMG}");
  width: 100%;
  height: calc(100vh - 80px);
  padding: 40px 60px;
  gap: 40px;

  h1 {
    text-align: center;
    font-family: "Under-Rated";
    width: 80%;
    color: var(--dark-violet);

    @media (max-width: 1024px){
        font-size: 28px;
        width: 90%;
    }
    @media (max-width: 768px){
        font-size: 24px;
        width: 95%;
    }
    @media (max-width: 480px){
        font-size: 20px;
        width: 100%;
    }
  }

  button {
    width: 40%;
    border: none;
    outline: none;
    padding: 10px 20px;
    color: var(--white);
    font-size: 24px;
    background-color: var(--orange);
    text-align: center;
    cursor: pointer;
    border-radius: 5px;
    font-weight: 600;
    transition: all ease .2s;

    &:hover{
        background-color: var(--orange2);
    }

    @media (max-width: 768px){
        font-size: 22px;
        width: 60%;
    }
    @media (max-width: 480px){
        font-size: 20px;
        width: 80%;
    }
  }

  @media (max-width: 768px){
    padding: 40px 20px;
  }

  @media (max-width: 480px){
    padding: 20px;
  }
`;

