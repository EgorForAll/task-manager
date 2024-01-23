import styled from 'styled-components';

export const Input = styled.input`
  width: 100%;
  background-color: transparent;
  border: none;
  border-bottom: 1px solid #000;
  outline: none;
  padding: 0;
  margin: 0;
  margin-bottom: 10px;
`;

export const AddBtn = styled.button`
  position: relative;
  width: 30px;
  height: 20px;
  opacity: 0.5;
  background-color: #fff;
  border: 1px solid #000;
  border-radius: 5px;
  margin-left: 20px;
  padding: 0;
  transition: opacity 0.2s ease;
  rotate: 180deg;
  &:hover {
    opacity: 1;
  }
  &::before {
    position: absolute;
    top: 7px;
    left: 10px;
    width: 8px;
    height: 2px;
    rotate: 45deg;
    content: '';
    background-color: #000;
  }
  &::after {
    position: absolute;
    top: 8px;
    left: 4px;
    width: 10px;
    height: 2px;
    rotate: 135deg;
    content: '';
    background-color: #000;
  }
`;
