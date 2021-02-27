import styled from 'styled-components';

export const Div = styled.div`
  background: #2b78fc;
  height: 100%;
  width: 100%;
  position: absolute;
`;

export const Wrapper = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background: #fff;
  padding: 15px;
  border-radius: 6px;
  box-shadow: 
    2px 2px 6px rgba(0, 0, 0, 0.4),
    -2px -2px 6px rgba(255, 255, 255, 0.6);
`;

export const HeadlingUl = styled.ul`
  margin-bottom: 15px;
`;

export const HeadingLi = styled.li`
  list-style: none;
  display: inline-block;
`;

export const Image = styled.img`
  height: 40px;
`;

export const Heading = styled.h1`
  font-size: 19px;
  font-weight: 900;
  text-align: center;
  margin-bottom: 0;
`;

export const Form = styled.form`

`;

export const Input = styled.input`
  border-radius: 4px;
  border: 1px solid #d0d0d0;
  margin-bottom: 7px;
  padding: 7px 10px;
  transition: .25s all ease-in-out;
  &:focus {
    outline: none;
    border: 1px solid #a7a7a7;
  }
`;

export const Button = styled.button`
  background: #2b78fc;
  border: none;
  border-radius: 4px;
  width: 100%;
  margin-top: 5px;
  padding: 7px 0;
  color: #fff;
  transition: all .2s ease-in-out;
  &:hover {
    background: #3da1bf;
  }
  &:focus {
    outline: none;
  }
`;