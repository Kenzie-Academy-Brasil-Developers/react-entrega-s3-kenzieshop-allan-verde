import styled from "styled-components";

export const Container = styled.div`
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
    justify-content: space-between;
    align-items: center;
    border-bottom: 2px solid rgba(0, 0, 0, 0.2);
    ul {
      width: 100%;
      max-width: 150px;
      margin: 0;
      padding: 0;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      list-style: none;
      .text_cart {
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
  }
  main {
    box-sizing: border-box;
    width: 100%;
    padding: 20px;
    ul {
      margin: 0;
      padding: 0;
    }
  }

`;
