import { styled } from "styled-components";
import waveImg from '../../assets/imgs/hero/bg/wave.svg'
import waveImg02 from '../../assets/imgs/hero/bg/wave2.svg'


export const SeparatorContainer = styled.div`
    display: flex;
    width: 100%;
    height: 300px;
    background-image: url('${waveImg}');
    position: relative;
    background-repeat: no-repeat;
    background-size: cover;
`

export const SeparatorContainer2 = styled(SeparatorContainer)`
    background-image: url('${waveImg02}');
`

