import styled, { createGlobalStyle } from "styled-components";
import bgimg from "./Images/bg.jpg";

export const GlobalStyle = createGlobalStyle`
  html {
    height: 100%;
  }

  body {
    background-image: url(${bgimg});
    background-size: cover;
    margin: 0;
    padding: 0 20px;
    display: flex;
    justify-content: center;
  }

  * {
    font-family: 'Catamaran', sans-serif;
    box-sizing: border-box;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  > p {
    color: #fff;
  }

  .score {
    color: #fff;
    font-size: 2rem;
    margin: 0;
  }

  h1 {
    font-family: "Joan", serif;
    background-image: linear-gradient(180deg, #fff, #87f1ff);
    font-weight: 400;
    background-size: 100%;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
    filter: drop-shadow(2px 2px #0085a3);
    font-size: 70px;
    text-align: center;
    margin: 20px;
  }

  .start,
  .next {
    cursor: pointer;
    height: 70px;
    width: 150px;
    border: none;
    transition: 0.3s;
    animation: glow 1s infinite;
    border-radius: 20px;
    background-color: #c3bacc;
    transition: 0.5s;
  }

  .start {
    max-width: 200px;
  }
  .start:hover {
    border-radius: 5px;
    background-color: #c3bacc;
    transition: 0.5s;
  }

  @keyframes glow {
    0% {
      box-shadow: 5px 5px 20px rgb(93, 52, 168), -5px -5px 20px rgb(93, 52, 168);
    }

    50% {
      box-shadow: 5px 5px 20px rgb(81, 224, 210),
        -5px -5px 20px rgb(81, 224, 210);
    }
    100% {
      box-shadow: 5px 5px 20px rgb(93, 52, 168), -5px -5px 20px rgb(93, 52, 168);
    }
  }
`;
