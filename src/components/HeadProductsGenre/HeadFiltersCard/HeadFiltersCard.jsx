import { useDispatch, useSelector } from "react-redux";
import {
  HeadFilterCard,
  HeadCardImg,
  HeadCardText,
} from "./HeadFiltersCardStyles";
import { filterGenre, selectGenre } from "../../../redux/genreSlice/genreSlice";

const HeadFiltersCard = ({ id, img, category, title, doScroll}) => {
  const dispatch = useDispatch();
  const selectedGenre = useSelector(state=> state.genres.selectedGenre)

  
  const selectedToFilter = (e) => {
    if(selectedGenre){
      return;
    }
    doScroll()
    dispatch(filterGenre(category));
    dispatch(selectGenre(category))
   
  };


  return (
    <HeadFilterCard
      cardcolor={`card${id}`}
      title={`Filtrar: ${title}`}
      onClick={selectedToFilter}
    >
      <HeadCardText>{title}</HeadCardText>
      <HeadCardImg src={img} alt={title} />
    </HeadFilterCard>
  );
};
export default HeadFiltersCard;
