import { createGlobalStyle } from "styled-components";
import GothamBold from '../fonts/gotham/GothamBold.ttf'
import GothamBlack from '../fonts/gotham/GothamBlack.otf'
import GothamLight from '../fonts/gotham/GothamLight.ttf'
import GothamThin from '../fonts/gotham/GothamThin.otf'
import UnderRated from '../fonts/under-rated/UNDERRATED-UltraBold Personal Use.otf'

export const GlobalStyles = createGlobalStyle`
    :root{
        --white: #F5F5F5;
        --white-menus: #F8F8FF; 
        --grey-light: #e4e4e4;
        --blue-light: #3498DB;
        --blue: #4faaFf;
        --light-blue: #badfff;
        --violet-dark: #af02ff;
        --violet-light:#dfbeff;
        --green-light: #2ECC71;
        --green: #2Eff71;
        --brown-light: #D7CCC8;
        --brown-dark: #B79999;
        --grey-dark: #A9A9A9;
        --black: #132019;
        --orange: #fa4b1f;
        --orange2: #fa7b1f;
        --light-orange: #f0af8f;
        --shadows: rgba(13, 14, 15, 0.3);
        --red: #ff0f2f;
        --yellow: #ff2f;
        --light-yellow: #ffef9f;
        --red-light: #ff3f4f;
        --white-transparent: rgba(230, 230, 230, 0.5);
        --dark-violet: #000b76;
        --soft-black: #273036;
        --light-black: #304040;
    }
    //Importing an external Font, with variations of Weight
    @font-face {
        font-family: 'Gotham';
        src: url('${GothamThin}');
        font-weight: 200;
        font-style: normal;
    }

    @font-face {
        font-family: 'Gotham';
        src: url('${GothamLight}');
        font-weight: 400;
        font-style: normal;
    }

    @font-face {
        font-family: 'Gotham';
        src: url('${GothamBold}');
        font-weight: 600;
        font-style: normal;
    }

    @font-face {
        font-family: 'Gotham';
        src: url('${GothamBlack}');
        font-weight: 800;
        font-style: normal;
    }
    @font-face {
        font-family: 'Under-Rated';
        src: url('${UnderRated}');
        font-weight: 600;
        font-style: normal;
    }

    *{
        box-sizing: border-box;
        padding: 0;
        margin: 0;
        text-decoration: none;
        list-style: none;
        list-style-type: none;
        font-family: 'Gotham';
    }

    html{
        scroll-behavior: smooth;
        scroll-padding-top: 80px;
    }

    body{
        display: flex;
        flex-direction: column;
        background-color: var(--white);
    }
`