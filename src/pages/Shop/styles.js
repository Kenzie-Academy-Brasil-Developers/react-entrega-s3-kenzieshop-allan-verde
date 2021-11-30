import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  header {
    background-color: #fff6d5;
    box-sizing: border-box;
    width: 100%;
    padding: 0 20px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    border-bottom: 2px solid rgba(0, 0, 0, 0.2);
    ul {
      width: 150px;
      margin: 0;
      padding: 0;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      list-style: none;
    }
  }
  main {
    box-sizing: border-box;
    width: 100%;
    padding: 20px;
    ul {
      margin: 0;
      padding: 0;
      list-style: none;
      li {
        margin-bottom: 25px;
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
      }
    }
  }
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
`;
