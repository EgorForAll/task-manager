import styled from 'styled-components';
import { BallonWindow } from '../ballon-comment/styled';

export const BallonWindowSub = styled(BallonWindow)`
  &::after {
    left: 124px;
  }
`;

export const List = styled.ol`
  padding: 10px;
  padding-left: 30px;
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
