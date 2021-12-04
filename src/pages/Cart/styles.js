import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  header {
    height: 70px;
    background-color: #fff6d5;
    box-sizing: border-box;
    width: 100%;
    padding: 0 20px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    border-bottom: 2px solid rgba(0, 0, 0, 0.2);
    p {
      position: relative;
    }
    .contador_cart {
      display: inline-block;
      position: absolute;
      top: -5px;
      right: -10px;
      color: white;
      background-color: red;
      border-radius: 100%;
      width: 15px;
      height: 15px;
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0;
      padding: 0;
    }
  }
  .carrinho {
    display: flex;
    flex-direction: column;
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
          box-sizing: border-box;
          padding: 20px;
          display: flex;
          max-width: 500px;
          width: 100%;
          justify-content: space-between;
          align-items: center;
          background-color: #fff6d5;
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
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        max-width: 150px;
        max-height: 150px;
      }
    }
    .descricao {
      margin: 0 10px;
    }
    .remove {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
    nav {
      box-sizing: border-box;
      background-color: #fff6d5;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 20px 30px;
      width: 100%;
      max-height: 400px;
      h2 {
        text-align: center;
        margin: 0;
        width: 100%;
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
    }
  }
  @media only screen and (min-width: 750px) {
    .carrinho {
      flex-direction: row;
      justify-content: space-between;
    }
    nav {
      max-width: 350px;
      margin: 10px 10px 0 0;
    }
  }
`;
