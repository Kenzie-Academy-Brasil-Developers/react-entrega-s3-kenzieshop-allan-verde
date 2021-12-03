import { Container } from './styles'
import { toast } from "react-hot-toast";

const Product = ({ item, handleAddProduct }) => {
  return (
    <Container key={item.id}>

      <div className="bloco__img">
        <img src={item.image} alt="" />
      </div>

      <div className="bloco__descricao">
        <h2>{item.title}</h2>
        <h3>R$ {item.price}</h3>
        <button onClick={() => { 
          handleAddProduct(item) 
          toast.success('Item a dicionado') 
          }}>Adicionar carrinho</button>
      </div>

    </Container>
  );
};

export default Product;

