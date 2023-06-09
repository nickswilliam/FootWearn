import { useDispatch } from "react-redux";
import { SelectorContainer, SelectorMenu } from "./SelectSizeProductStyles";


const SelectSizeProduct = ({ size }) => {
  const dispatch = useDispatch()
  const handleChange = (e) => {
    (parseInt(e.target.value));
  };
  return (
    <SelectorContainer>
      <SelectorMenu
        name="size"
        id="size"
        onChange={handleChange}
        
      >
        {size.map(
          (item) =>
            item.available && (
              <option key={item.value} value={item.value}>
                {item.value}
              </option>
            )
        )}
      </SelectorMenu>
    </SelectorContainer>
  );
};
export default SelectSizeProduct;
