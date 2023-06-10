import CardProductSlide from "./CardProductSlide/CardProductSlide";
import {
  BtnAddToCart,
  CardProductBottomContainer,
  CardProductContainer,
  CardProductMidContainer,
  CardProductPrices,
  SelectStyled,
} from "./CardProductStyles";
import { discountOff } from "../../../utils/percentaje";
import { addToCart } from "../../../redux/cartSlice/cartSice";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { ButtonTransparent } from "../../UI/UIStyles";

const CardProduct = ({
  id,
  title,
  imgs,
  price,
  size,
  brand,
  quantity,
  discount,
  description,
}) => {
  const dispatch = useDispatch();

  const [sizeSelect, setSizeSelect] = useState(null);
  const [error, setError] = useState(false);

  const handleAddCart = () => {
    if (!sizeSelect) {
      setError(true);
      return;
    } else {
      setError(false);
      dispatch(
        addToCart({
          id,
          title,
          imgs,
          price,
          sizeSelect,
          brand,
          quantity,
          discount,
          description,
        })
      );
    }
  };
  return (
    <CardProductContainer>
      <CardProductSlide imgs={imgs} title={title} />

      <CardProductMidContainer>
        <ButtonTransparent
          style={{ alignSelf: "flex-start" }}
          onClick={() =>
            console.log({
              id,
              title,
              imgs,
              price,
              size,
              brand,
              quantity,
              discount,
              description,
            })
          }
        >
          <h3 style={{ fontSize: "22px", pointerEvents: "none" }}>
            {brand.toUpperCase()}
          </h3>
        </ButtonTransparent>
        <p>{description}</p>

        <CardProductPrices>
          {discount === 0 ? (
            <h3>${price}</h3>
          ) : (
            <CardProductPrices>
              <h3>${discountOff(price, discount)}</h3>
              <span>${price}</span>
              <p>{discount}% OFF</p>
            </CardProductPrices>
          )}
        </CardProductPrices>
      </CardProductMidContainer>

      <CardProductBottomContainer>
        <p>Talles disponibles:</p>
        {error && (
          <span style={{ color: "var(--red)" }}>
            *Debes seleccionar un talle {console.log(sizeSelect)}
          </span>
        )}

        <SelectStyled
          value={sizeSelect}
          placeholder={!sizeSelect? 'Selecciona un talle' : sizeSelect}
          options={size.map((option) => ({
            label: option.value,
            value: option.value,
          }))}
          onChange={(e)=> setSizeSelect(e.value)}
        />

        <BtnAddToCart onClick={handleAddCart}>Agregar al carrito</BtnAddToCart>
      </CardProductBottomContainer>
    </CardProductContainer>
  );
};
export default CardProduct;
