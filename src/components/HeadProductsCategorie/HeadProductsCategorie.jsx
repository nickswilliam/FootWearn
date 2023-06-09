import { useDispatch, useSelector } from "react-redux";
import { HeadProductsWrapper } from "./HeadProductsCategorieStyles";
import HeadFiltersCard from "./HeadFiltersCard/HeadFiltersCard";
import { BtnBack, BtnBackIcon } from "./HeadProductsCategorieStyles";
import { removeFilter } from "../../redux/categoriesSlice/categoriesSlice";

const HeadProductsCategorie = ({ doScroll }) => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories.categories);

  const handleRemoveHead = () => {
    dispatch(removeFilter());
  };
  return (
    <HeadProductsWrapper>
      {categories.map((category) => (
        <HeadFiltersCard key={category.id} {...category} doScroll={doScroll}/>
      ))}

      {categories.length === 1 && (
        <BtnBack title="Quitar filtro" onClick={handleRemoveHead}>
          <BtnBackIcon />
        </BtnBack>
      )}
    </HeadProductsWrapper>
  );
};
export default HeadProductsCategorie;
