import { useDispatch, useSelector } from "react-redux";
import {
  HeadFilterCard,
  HeadCardImg,
  HeadCardText,
  } from "./HeadFiltersCardStyles";
import {
  filterCategorie,
  selectCategorie,
} from "../../../redux/categoriesSlice/categoriesSlice";


const HeadFiltersCard = ({ id, img, category, title, doScroll }) => {
  const dispatch = useDispatch();
  const selectedCategorie = useSelector(state=> state.categories.selectedCategorie)

  const selectedToFilter = () => {
    if(selectedCategorie){
      return;
    }
    doScroll()
    dispatch(filterCategorie(category));
    dispatch(selectCategorie(category));
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
