import styled from 'styled-components';

export const Select = styled.select`
  margin-left: 10px;
  background-color: #f0f0f0;
  padding: 5px 10px;
  border-radius: 5px;
  border: 1px solid #bdbdbd;
`;

export const TasksContainer = styled.div`
  position: relative;
  margin: 0 100px;
  display: flex;
  flex-direction: column;
  @media (max-width: 1023px) {
    margin: 0 30px;
    font-size: 14px;
  }
  @media (max-width: 767px) {
    margin: 0 20px;
  }
`;

export const SearchDiv = styled.div`
  width: 100%;
  display: flex;
  height: 30px;
  margin-top: 30px;
  align-items: center;
  justify-content: flex-end;
  @media (max-width: 767px) {
    margin-bottom: 20px;
    margin-top: 20px;
  }
`;

export const Grid = styled.div`
  display: grid;
  margin-top: 20px;
  column-gap: 50px;
  width: 100%;
  grid-template-columns: 1fr 1fr 1fr;
  margin-bottom: 100px;
  @media (max-width: 1023px) {
    column-gap: 30px;
  }
  @media (max-width: 767px) {
    grid-template-columns: none;
  }
`;

export const GridColumn = styled.div`
  width: 100%;
  row-gap: 40px;
  display: flex;
  margin-bottom: 20px;
  flex-direction: column;
`;

export const AddBtn = styled.button`
  position: absolute;
  width: 21px;
  height: 21px;
  top: 26%;
  left: 5%;
  border: none;
  opacity: 1;
  transition: opacity 0.3s ease;
  &:hover {
    opacity: 0.6;
  }
  &:before {
    position: absolute;
    width: 11px;
    height: 2px;
    top: 10px;
    left: 5px;
    content: '';
    rotate: 90deg;
    background-color: #fff;
  }
  &:after {
    position: absolute;
    width: 11px;
    height: 2px;
    top: 10px;
    left: 5px;
    content: '';
    background-color: #fff;
  }
`;
