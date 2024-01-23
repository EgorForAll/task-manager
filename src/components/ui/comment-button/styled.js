import styled from 'styled-components';

export const Button = styled.button`
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  padding-right: 10px;
  padding-top: 5px;
  padding-bottom: 5px;
  border-radius: 10px;
  border: 1px solid #000;
  opacity: 0.5;
  transition: opacity 0.3s ease;
  margin-right: 20px;
  &:hover {
    opacity: 1;
  }
`;
