import { Container } from "./styles";
import { addProduct } from '../../store/modules/cart/actions'
import { useDispatch } from "react-redux";
import { prodList } from '../../database/prodList'
import { Link } from 'react-router-dom'
import Product from '../../components/Product'

function Shop() {
  const dispatch = useDispatch()
  const handleAddProduct = (product) => dispatch(addProduct(product))

  return (
    <Container>
      <header>
        <h1>Kenzie Shop</h1>
        <ul>
          <li>
            <p><Link to='/cart'>Carrinho</Link></p>
          </li>
          <li>
            <p>Entrar</p>
          </li>
        </ul>
      </header>
      <main>
        <ul>
          {prodList.map((item) => {
            return <Product item={item} handleAddProduct={handleAddProduct} />
          })}
        </ul>
      </main>
    </Container>
  );
}

export default Shop;

//  <li key={item.id}>
//    <div className='bloco__img'>
//        <img src={item.image} alt="" />
//    </div>
//    <div className='bloco__descricao'>
//      <h2>{item.title}</h2>
//      <h3>R$ {item.price}</h3>
//      <button onClick={() => handleAddProduct(item)}>Adicionar carrinho</button>
//    </div>              
//  </li>