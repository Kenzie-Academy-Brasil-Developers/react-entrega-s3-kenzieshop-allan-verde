import { removeProduct } from '../../store/modules/cart/actions'
import { useSelector } from "react-redux";
import { Container } from "./styles";
import { Link } from "react-router-dom";
import { toast } from 'react-hot-toast'

function Cart() {
  
  const products = useSelector((state) => {
    return state.products;
  });

  return (
    <Container>
      <header>
        <p>
          <Link to="/">Voltar</Link>
        </p>
        <p>Carrinho</p>
      </header>
        <div className='carrinho' >
        <main>
        <h3>Produtos escolhidos</h3>
        <ul>
          {products.map((item) => (
            <li key={item.id}>
              <div className="bloco__img">
                <img src={item.image} alt="prod" />
              </div>
              <p className='descricao'>{item.description}</p>
              <div>
              <p>{item.price}</p>
              <button onClick={() => {
                removeProduct(item)
                toast.success('Item removido')
              }}>Remover item</button>
              </div>
            </li>
          ))}
        </ul>
      </main>
      <nav>
        <h2>Resumo do pedido</h2>
        <h3>
          <p>{products.length} pedidos</p>
          <p>
            R$
            {products.reduce((acc, cur) => {
              return acc + cur.price;
            }, 0).toFixed(2)}
          </p>
        </h3>
        <button onClick={() => toast.error('Botão em manutenção')} >FINALIZAR O PEDIDO</button>
      </nav>
        </div>
    </Container>
  );
}

export default Cart;
