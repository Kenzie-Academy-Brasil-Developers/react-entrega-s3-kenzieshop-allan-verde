import { Container } from "./styles";
import { addProductThunk } from "../../store/modules/cart/thunks";
import { useDispatch } from "react-redux";
import { prodList } from "../../database/prodList";
import { Link } from "react-router-dom";
import Product from "../../components/Product";
import { useSelector } from "react-redux";
import { toast } from "react-hot-toast";

function Shop() {
  const dispatch = useDispatch();

  const products = useSelector((store) => store.products);

  const handleAddProduct = (product) => {
    if (products.includes(product)) {
      toast.error("Item já adicionado");
    } else {
      dispatch(addProductThunk(product));
      toast.success("Item adicionado");
    }
  };

  return (
    <Container>
      <header>
        <h1>Kenzie Shop</h1>
        <ul>
          <li>
            <p>
              <Link to="/cart" className="text_cart">
                Carrinho 
                <span className="contador_cart">{products.length}</span>
              </Link>
            </p>
          </li>
          <li>
            <p>Entrar</p>
          </li>
        </ul>
      </header>
      <main>
        <ul>
          {prodList.map((item) => {
            return (
              <Product
                key={item.id}
                item={item}
                handleAddProduct={handleAddProduct}
              />
            );
          })}
        </ul>
      </main>
    </Container>
  );
}

export default Shop;
