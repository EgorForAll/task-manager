import styled from 'styled-components';

export const ListItem = styled.li`
  font-family: 'Rubik', sans-serif;
  margin-bottom: 20px;
`;

export const ListWrapper = styled.div`
  margin: 0 100px;
  display: flex;
  flex-direction: column;
  @media (max-width: 1023px) {
    margin: 0 30px;
  }
  @media (max-width: 767px) {
    margin: 0 20px;
  }
`;

export const ListLink = styled.a`
  text-decoration: none;
  margin-right: 20px;
`;
