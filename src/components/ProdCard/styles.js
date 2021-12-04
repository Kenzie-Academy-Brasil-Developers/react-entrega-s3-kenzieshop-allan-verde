import styled from "styled-components";

export const Container = styled.li`
  display: flex;
  flex-direction: column;
  margin-bottom: 25px;
  box-sizing: border-box;
  padding: 20px;
  max-width: 500px;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  background-color: #fff6d5;
  button {
    width: 170px;
    height: 50px;
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
  .bloco__img {
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      max-width: 150px;
      max-height: 150px;
    }
  }
  .descricao {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }
  .remove {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;
