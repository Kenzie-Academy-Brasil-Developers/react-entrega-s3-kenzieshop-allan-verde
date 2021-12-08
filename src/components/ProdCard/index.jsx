import { Container } from "./styles";
import { toast } from "react-hot-toast";

const ProdCard = ({ item, removeProduct }) => {
  return (
    <Container key={item.id}>
      <div className="bloco__img">
        <img src={item.image} alt="prod" />
      </div>
      <div className='descricao'>
        <p>{item.description}</p>
        <p>{item.price}</p>
        <button
          onClick={() => {
            removeProduct(item);
            toast.success("Item removido");
          }}
        >
          Remover item
        </button>
      </div>
    </Container>
  );
};

export default ProdCard;
