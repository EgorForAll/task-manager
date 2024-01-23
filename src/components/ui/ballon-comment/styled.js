import styled from 'styled-components';

export const BallonWindow = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  width: 105%;
  min-height: 250px;
  margin-top: 7px;
  border: 2px solid #bdbdbd;
  bottom: 134px;
  background-color: #d5cdcd;
  left: -10px;
  border-radius: 10px;
  &::after {
    content: '';
    position: absolute;
    bottom: -29px;
    left: 44px;
    border: 14px solid transparent;
    border-top: 13px solid #bdbdbd;
  }
`;

export const BallonTitle = styled.h4`
  margin-top: 10px;
  font-size: 14px;
  margin-left: 10px;
`;

export const List = styled.ul`
  padding: 10px;
  margin-right: 10px;
  margin-left: 10px;
  height: 150px;
  overflow: scroll;
  overflow-x: hidden;
  border: 2px solid #9a9a9a;
  background-color: #fff;
  border-radius: 10px;
`;

export const ListItem = styled.li`
  margin-bottom: 10px;
`;

export const PlusBtn = styled.button`
  position: absolute;
  bottom: 10px;
  left: 15px;
  padding: 0;
  background-color: transparent;
  opacity: 0.6;
  transition: opacity 0.3s ease;
  border: none;
  &:hover {
    opacity: 1;
  }
`;

export const CloseBtn = styled.button`
  position: absolute;
  top: 7px;
  right: 5px;
  width: 20px;
  height: 20px;
  background-color: transparent;
  border: none;
  opacity: 0.5;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 1;
  }
  &::before {
    position: absolute;
    content: '';
    top: 5px;
    left: 3px;
    width: 15px;
    height: 2px;
    background-color: #333;
    rotate: 45deg;
  }
  &::after {
    position: absolute;
    content: '';
    top: 5px;
    left: 3px;
    width: 15px;
    height: 2px;
    background-color: #333;
    rotate: 135deg;
  }
`;
