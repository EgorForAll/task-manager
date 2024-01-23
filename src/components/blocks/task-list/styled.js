import styled from 'styled-components';

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
