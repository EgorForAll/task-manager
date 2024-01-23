import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderWrapper = styled.header`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const HeaderContainer = styled.div`
  margin: 0 100px;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #d9d9d9;
  @media (max-width: 1023px) {
    margin: 0 30px;
    font-size: 14px;
  }
  @media (max-width: 767px) {
    margin: 0 20px;
  }
`;

export const HeaderLink = styled(Link)`
  margin-right: 10px;
  color: #000;
  font-family: 'Rubik', sans-serif;
  font-size: 18px;
  transition: text-decoration 0.2s ease-in;
  &:hover {
    text-decoration: none;
  }
`;
