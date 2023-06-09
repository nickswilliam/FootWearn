import { bottomInfo } from "../../data/heroBottomInfo";
import {
  HeroContainer,
  HeroMidInfo,
  HeroInfoContainer,
  HeroInfoSubTitle,
  HeroInfoTexts,
  HeroInfoTitle,
  HeroBottomInfo,
  HeroBottomText,
} from "./HeroStyles";
import SliderImgs from "../SliderImgs/SliderImgs";
import SliderBrands from "../SliderBrands/SliderBrands";
const Hero = ({ doScroll, scrollCat, scrollGen }) => {
  return (
    <HeroContainer>
      <SliderImgs
        id="#gallery"
        doScroll={doScroll}
        scrollCat={scrollCat}
        scrollGen={scrollGen}
      />

      <HeroMidInfo>
        {bottomInfo.map((item) => (
          <HeroInfoContainer key={item.id}>
            <item.icon size="24px" />
            <HeroInfoTexts>
              <HeroInfoTitle>{item.title}</HeroInfoTitle>
              <HeroInfoSubTitle>{item.subtitle}</HeroInfoSubTitle>
            </HeroInfoTexts>
          </HeroInfoContainer>
        ))}
      </HeroMidInfo>

      <HeroBottomInfo>
        <HeroBottomText>Marcas Asociadas</HeroBottomText>
        <SliderBrands />
      </HeroBottomInfo>
    </HeroContainer>
  );
};
export default Hero;
