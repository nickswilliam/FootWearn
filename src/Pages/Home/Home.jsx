import {
  AboutWrapper,
  AllStoreWrapper,
  ContactWrapper,
  HeadProductsContainer,
  MainContainer,
  MainTitle,
  ProductsTitle,
  ProductsWrapper,
  SecondTitle,
  TitleCategories,
} from "./HomeStyles";

import { useEffect, useRef } from "react";
import Hero from "../../components/Hero/Hero";
import HeadProductsCategorie from "../../components/HeadProductsCategorie/HeadProductsCategorie";
import { useDispatch, useSelector } from "react-redux";
import HeadProductsGenre from "../../components/HeadProductsGenre/HeadProductsGenre";
import CardsProducts from "../../components/CardsProducts/CardsProducts";
import About from "../../components/About/About";
import Contact from "../../components/Contact/Contact";
import { useLocation } from "react-router-dom";

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    document.title = "Inicio";
    homeRef.current.scrollIntoView()

    const handleScrollToSection = () => {
      const { hash } = location;
      if (hash) {
        const section = document.querySelector(hash);
        if (section) {
          section.scrollIntoView({});
        }
      }
    };

    handleScrollToSection();
  }, [location]);

  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories.categories);

  const productsRef = useRef(null);
  const categoriesRef = useRef(null);
  const genreRef = useRef(null);
  const homeRef = useRef();

  const doScroll = () => productsRef.current.scrollIntoView();
  const scrollCat = () => categoriesRef.current.scrollIntoView();
  const scrollGen = () => genreRef.current.scrollIntoView();

  return (
    <MainContainer ref={homeRef} id="hero">
      {/* Hero Imgs Slider */}
      <Hero
        doScroll={doScroll}
        scrollCat={scrollCat}
        scrollGen={scrollGen}
        id="#hero"
      />

      <MainTitle>BIENVENIDA/O A NUESTRO E-SHOP</MainTitle>
      {/* Titles & Main Filters to E-Shop */}

      {/* Wrapper contains styles of BG */}
      <AllStoreWrapper>
        <HeadProductsContainer>
          <SecondTitle>Hoy... ¿Que zapas queres comprar?</SecondTitle>

          <TitleCategories ref={categoriesRef}>
            Búsqueda X Categorias
          </TitleCategories>

          <HeadProductsCategorie doScroll={doScroll} />

          <TitleCategories ref={genreRef} diff="true">
            Búsqueda X Género
          </TitleCategories>

          <HeadProductsGenre doScroll={doScroll} />
        </HeadProductsContainer>

        {/* Section of Products & Left Products Filter */}

        <ProductsWrapper ref={productsRef} id="products">
          <ProductsTitle>Productos</ProductsTitle>
          <CardsProducts doScroll={doScroll}/>
        </ProductsWrapper>
      </AllStoreWrapper>

      {/* About Section & Info*/}
      <AboutWrapper id="about">
        <About />
      </AboutWrapper>

      {/* Contact section - S. Newsletter */}
      <ContactWrapper id="contact">
        <Contact />
      </ContactWrapper>
    </MainContainer>
  );
};
export default Home;
