import styled from 'styled-components';

export const Form = styled.form`
  position: absolute;
  bottom: 0;
  width: 100%;
`;

export const InputText = styled.input`
  border: none;
  border-radius: 0;
  padding: 5%;
  width: 80%;
  font-size: 1.2em;
  height: 160px;
  &:focus {
    outline: none;
  }
`;

export const SendBtn = styled.button`
  color: #fff !important;
  text-transform: uppercase;
  text-decoration: none;
  background: #2979FF;
  display: inline-block;
  border: none;
  width: 20%;
  padding: 69px 0px;
  &:focus {
    outline: none;
  }
`;
