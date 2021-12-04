import { removeProductThunk } from "../../store/modules/cart/thunks";
import { Container } from "./styles";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";
import ProdCard from '../../components/ProdCard'

function Cart() {
  const dispatch = useDispatch();
  const products = useSelector(store => store.products)
  console.log(products);

  const handleRemoveProduct = (product) => {
    dispatch(removeProductThunk(product));
  };

  return (
    <Container>
      <header>
        <p>
          <Link to="/">Voltar</Link>
        </p>
        <p>
        Carrinho
        <div className='contador_cart' >{products.length}</div>
        </p>
      </header>
      <div className="carrinho">
        <main>
          <h3>Produtos escolhidos</h3>
          <ul>
            {products.map((item) => (
              <ProdCard handleRemoveProduct={handleRemoveProduct} item={item} />
            ))}
          </ul>
        </main>
        <nav>
          <h2>Resumo do pedido</h2>
          <h3>
            <p>{products.length} pedidos</p>
            <p>
              R$
              {products
                .reduce((acc, cur) => {
                  return acc + cur.price;
                }, 0)
                .toFixed(2)}
            </p>
          </h3>
          <button onClick={() => toast.error("Botão em manutenção")}>
            FINALIZAR O PEDIDO
          </button>
        </nav>
      </div>
    </Container>
  );
}

export default Cart;
