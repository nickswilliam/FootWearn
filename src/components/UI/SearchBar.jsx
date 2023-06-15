import React, { useState, useRef, useEffect } from "react";
import {
  ButtonTransparent,
  SearchBarContainer,
  SearchBarForm,
  SearchInput,
  SearchList,
} from "./UIStyles";
import { FaSearch, FaBackspace, FaWindowClose, FaMarkdown, FaBackward, FaRegWindowClose } from "react-icons/fa";
import { AiFillCloseCircle } from "react-icons/ai";
import SearchListMenu from "../Header/SearchListMenu/SearchListMenu";
import { searchListMenu } from "../../data/SearchListMenu";
import { useDispatch, useSelector } from "react-redux";
import {
  filterCategorie,
  selectCategorie,
  removeFilter as removeCategory,
} from "../../redux/categoriesSlice/categoriesSlice";
import {
  filterGenre,
  selectGenre,
  removeFilter as removeGenre,
} from "../../redux/genreSlice/genreSlice";

const SearchBar = React.forwardRef(({ setToggleSearchMenu, toggleSearchMenu, ref}) => {
  const dispatch = useDispatch();
  const inputRef = useRef(null)

  React.useEffect(()=>{
    if(ref){
      ref.current = inputRef.current
    }
  }, [ref])

  const { categories, selectedCategorie } = useSelector(
    (state) => state.categories
  );
  const { genres, selectedGenre } = useSelector((state) => state.genres);

  const [value, setValue] = useState("");
  const [toggleSearch, setToggleSearch] = useState(false);
  const [filter, setFilter] = useState([]);

  const filterSearch = searchListMenu.filter((search) =>
    search.name.toLowerCase().includes(value.toLowerCase())
  );

  const filteredSearch = (category) => {
    if (genres.some((gen) => gen.category === category)) {
      dispatch(filterGenre(category));
      dispatch(selectGenre(category));
    } else if (categories.some((cat) => cat.category === category)) {
      dispatch(filterCategorie(category));
      dispatch(selectCategorie(category));
    }
  };

  const handleSearch = (category) => {
    if (!selectedCategorie || !selectedGenre) {
      filteredSearch(category);
    } else if (
      (categories.length === 1 && selectedCategorie) ||
      (genres.length === 1 && selectedGenre)
    ) {
      filteredSearch(category);
    }

    setToggleSearch(false);
  };

  const cleanInput = () => {
    setValue("");
    setToggleSearch(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value.length) return;

    if (!filterSearch.length) {
      setToggleSearch(true);
      setFilter(filterSearch);
    }
    setToggleSearch(false);
    setFilter(filterSearch);

    filterSearch.map((search) => handleSearch(search.category));

    setToggleSearchMenu(!toggleSearchMenu)
    setValue("");
  };
  return (
    toggleSearchMenu && (
      <SearchBarContainer onClick={(e)=>{
        if(!e.target.classList.contains('search_bar')){
          setToggleSearchMenu(!toggleSearchMenu)
        }
        return;
      }}>
        <ButtonTransparent style={{alignSelf: 'flex-end'}} 
        onClick={()=> setToggleSearchMenu(!toggleSearchMenu)}>
          <FaRegWindowClose pointerEvents='none' color="var(--white)" size='25px'/>
        </ButtonTransparent>
        <SearchBarForm onSubmit={handleSubmit} bordered={toggleSearch} className="search_bar">
          <SearchInput
            className="form-search search_bar"
            placeholder="Buscar X Categoría o Género"
            onChange={(e) => {
              setValue(e.target.value);
              if (value.length >= 2) {
                setToggleSearch(true);
                setFilter(filterSearch);
              } else {
                setToggleSearch(false);
                return;
              }
            }}
            value={value}
            type="text"
            ref={inputRef}
            
          />

          {value && (
            <ButtonTransparent onClick={cleanInput} type="reset" className="search_bar">
              <AiFillCloseCircle pointerEvents="none" size="18px" />
            </ButtonTransparent>
          )}

          <ButtonTransparent type="submit" onClick={handleSubmit} className="search_bar">
            <FaSearch size="18px" />
          </ButtonTransparent>

          {toggleSearch && (
            <SearchList>
              <SearchListMenu
                setToggleSearch={setToggleSearch}
                value={value}
                filter={filter}
                setToggleSearchMenu={setToggleSearchMenu}
                toggleSearchMenu={toggleSearchMenu}
              />
            </SearchList>
          )}
        </SearchBarForm>
      </SearchBarContainer>
    )
  );
});
export default SearchBar;
