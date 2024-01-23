import styled from 'styled-components';

export const Btn = styled.button`
  position: relative;
  color: #fff;
  padding: 10px 15px;
  border: none;
  border-radius: 10px;
  min-height: 50px;
  text-transform: uppercase;
  font-family: 'Rubik', sans-serif;
  transition: background-color 0.3s ease;
  background-color: #c34a4a;

  &:hover {
    background-color: #e90000;
  }
`;
