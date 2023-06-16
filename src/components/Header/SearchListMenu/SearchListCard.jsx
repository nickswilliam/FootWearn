import {
  SearchCardContainer,
  SearchCardTextCont,
} from "./SearchListMenuStyles";
import {
  selectCategorie,
  removeFilter as removeCategory,
  filterCategorie,
} from "../../../redux/categoriesSlice/categoriesSlice";
import {
  selectGenre,
  removeFilter as removeGenre,
  filterGenre,
} from "../../../redux/genreSlice/genreSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";


const SearchListCard = ({
  category,
  image,
  type,
  title,
  name,
  setToggleSearch,
  setToggleSearchMenu,
  toggleSearchMenu
}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { selectedGenre, genres } = useSelector((state) => state.genres);
  const { selectedCategorie, categories } = useSelector(
    (state) => state.categories
  );


  const filteredSearch = () => {
    if (genres.some((gen) => gen.category === category)) {
      dispatch(filterGenre(category));
      dispatch(selectGenre(category));
    } else if (categories.some((cat) => cat.category === category)) {
      dispatch(filterCategorie(category));
      dispatch(selectCategorie(category));
    }
  };


  const handleSearch = () => {
    if (!selectedCategorie || !selectedGenre) {
      filteredSearch();
    } else if (
      (categories.length === 1 && selectedCategorie) ||
      (genres.length === 1 && selectedGenre)
    ) {
      filteredSearch();
    }
    
    navigate('/#products')
    setToggleSearch(false);
    setToggleSearchMenu(!toggleSearchMenu)
  };

  useEffect(() => {
    dispatch(removeCategory());
    dispatch(removeGenre());
  }, [categories, genres]);

  return (
    <SearchCardContainer onClick={handleSearch} onTouchEnd={handleSearch} title={title}>
      <img src={image} alt={name} />
      <SearchCardTextCont>
        <h2 typed>{name}</h2>
        <p>Tipo: {type}</p>
      </SearchCardTextCont>
    </SearchCardContainer>
  );
};
export default SearchListCard;
