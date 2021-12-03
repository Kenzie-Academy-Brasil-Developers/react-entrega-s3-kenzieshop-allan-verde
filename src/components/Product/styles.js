import styled from "styled-components";

export const Container = styled.div`
  margin-bottom: 25px;
  max-width: 350px;
  .bloco__img {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      max-width: 300px;
      max-height: 300px;
    }
  }
  .bloco__descricao {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  button {
    width: 200px;
    height: 60px;
    font-size: 20px;
    font-family: monospace;
    border: 2px solid transparent;
    border-radius: 12px;
    color: #999;
    background: #f5f5f5;
  }
  button:hover {
    background-color: #424faa;
    color: #fff;
  }
`;
