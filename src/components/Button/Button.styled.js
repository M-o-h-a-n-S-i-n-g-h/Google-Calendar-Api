import styled from "styled-components";

export const ButtonStyle = styled.button`
  background-color: ${
          props => props.primary
                   ? '#0373fc'
                   : props.submit
                     ? '#35D83B'
                     : props.danger
                       ? 'red'
                       : 'black'
  };
  color: ${props => props.submit ? 'black' : 'white'};
  font-family: sans-serif;
  font-size: 14px;
  margin: 20px;
  cursor: pointer;
  padding: .8rem;
`