import styled from "styled-components";

export const HomeStyles = styled.div`
  margin-top: 4em;

  h1 {
    text-align: center;
    font-size: 4em;
    color: rgb(255, 207, 0);
  }

  .button__container {
    display: flex;
    justify-content: center;
    align-items: center;

    span {
      padding: 1rem;
    }
  }

  .quote__box {
    h2 {
      font-size: 2.5em;
      color: rgb(50, 232, 117);
      padding: 10px;
      font-style: italic;
    }

    width: 700px;
    border-radius: 15px;
    background-color: rgb(24, 28, 34);
    margin: auto;
    margin-top: 5em;
    border: solid white 1px;
    padding: 1.5em;
    display: flex;
    justify-content: center;
  }
`