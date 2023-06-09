import {
  CardsProductsContainer,
  PagedBox,
  PagedContainer,
  PaginateBtn,
  PaginationContainer,
} from "./CardsProductsStyles";
import CardProduct from "./CardProduct/CardProduct";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { INITIAL_LIMIT } from "../../utils/constants";

const CardsProducts = () => {
  let { products } = useSelector((state) => state.products);
  const [currentPage, setCurrentPage] = useState(1);
  const [limit, setLimit] = useState(INITIAL_LIMIT);

  const selectedGenre = useSelector((state) => state.genres.selectedGenre);
  const selectedCategorie = useSelector(
    (state) => state.categories.selectedCategorie
  );

  if (selectedGenre && selectedCategorie) {
    products = products.filter(
      (product) =>
        product.category === selectedCategorie &&
        product.genre === selectedGenre
    );
  } else if (selectedCategorie) {
    products = products.filter(
      (product) => product.category === selectedCategorie
    );
  } else if (selectedGenre) {
    products = products.filter((product) => product.genre === selectedGenre);
  } else {
    products;
  }

  const totalProducts = products.length;

  const totalPages = Math.ceil(totalProducts / limit);

  const indexOfLastItem = currentPage * limit;
  const indexOfFirstItem = indexOfLastItem - limit;

  const pageNumbers = [];

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  const setPage = (num) => {
    setCurrentPage(num);
  };

  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategorie, selectedGenre]);

  return (
    <>
      <CardsProductsContainer>
        {!products.length ? (
          <h3>No hay productos para la búsqueda especificada</h3>
        ) : totalProducts >= limit ? (
          products
            .map((product) => <CardProduct key={product.id} {...product} />)
            .slice(indexOfFirstItem, indexOfLastItem)
        ) : (
          products.map((product) => (
            <CardProduct key={product.id} {...product} />
          ))
        )}
      </CardsProductsContainer>

      {totalProducts >= limit + 1 && (
        <PaginationContainer>
          <PaginateBtn
            disabled={currentPage === 1}
            onClick={() => setPage(currentPage - 1)}
          >
            Anterior
          </PaginateBtn>

          <PagedContainer>
            {pageNumbers.map((page) => (
              <PagedBox
                key={page}
                className={currentPage === page && "active"}
                onClick={() => setPage(page)}
              >
                {page}
              </PagedBox>
            ))}
          </PagedContainer>

          <PaginateBtn
            secondary="true"
            disabled={currentPage === totalPages || totalProducts <= limit}
            onClick={() => setPage(currentPage + 1)}
          >
            Siguiente
          </PaginateBtn>
        </PaginationContainer>
      )}
    </>
  );
};
export default CardsProducts;
