import { useDispatch, useSelector } from "react-redux";
import { HeadProductsWrapper } from "./HeadProductsGenreStyles";
import HeadFiltersCard from "./HeadFiltersCard/HeadFiltersCard";
import { BtnBack, BtnBackIcon } from "./HeadProductsGenreStyles";
import { removeFilter } from "../../redux/genreSlice/genreSlice";

const HeadProductsGenre = ({ doScroll }) => {
  const dispatch = useDispatch();
  const genres = useSelector((state) => state.genres.genres);

  const handleRemoveHead = () => {
    dispatch(removeFilter());
  };

  return (
    <HeadProductsWrapper>
      {genres.map((genre) => (
        <HeadFiltersCard key={genre.id} {...genre} doScroll={doScroll}/>
      ))}

      {genres.length === 1 && (
        <BtnBack title="Quitar filtro" onClick={handleRemoveHead}>
          <BtnBackIcon />
        </BtnBack>
      )}
    </HeadProductsWrapper>
  );
};
export default HeadProductsGenre;
