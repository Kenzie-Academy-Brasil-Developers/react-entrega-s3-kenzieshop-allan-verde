  import { Container } from "./styles";

const Product = ({ item, handleAddProduct }) => {
  return (
    <Container key={item.id}>
      <div className="bloco__img">
        <img src={item.image} alt="" />
      </div>

      <div className="bloco__descricao">
        <h2>{item.title}</h2>
        <h3>R$ {item.price}</h3>
        <button
          onClick={() => {
            handleAddProduct(item);
          }}
        >
          Adicionar carrinho
        </button>
      </div>
    </Container>
  );
};

export default Product;
