import styled from "styled-components";


export const FormStyles = styled.div`
  padding: 20px;

  h2 {
    color: rgb(50, 232, 117);
  }

  h1 {
    border-bottom: 1px solid white;
    color: #3d3d3d;
    font-family: sans-serif;
    font-size: 20px;
    font-weight: 600;
    line-height: 24px;
    padding: 10px;
    text-align: center;
  }

  form {
    background: white;
    border: 1px solid #dedede;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin: 0 auto;
    max-width: 500px;
    padding: 30px 50px;
    border-radius: 10px;
  }

  input {
    border: 1px solid #d9d9d9;
    border-radius: 4px;
    box-sizing: border-box;
    padding: 10px;
    width: 100%;
    margin-bottom: 3em;
  }

  label {
    color: #3d3d3d;
    margin-right: auto;
    font-family: sans-serif;
    font-size: 14px;
    font-weight: 500;
    margin-bottom: 5px;
  }
`;