import styled from 'styled-components';

export const CardWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  min-height: 550px;
  margin-bottom: 40px;
  padding: 20px;
  background-color: #fff;
  border-width: 3px;
  border-style: solid;
  border-radius: 20px;
  @media (max-width: 992px) {
    min-height: 610px;
  }

  @media (max-width: 576px) {
    min-height: 370px;
  }
`;

export const CardHeader = styled.header`
  border-bottom: 1px solid #000;
  margin-bottom: 20px;
`;

export const CardFooter = styled.footer`
  display: flex;
  flex-direction: column;
  display: flex;
  align-items: center;
`;

export const Desc = styled.div`
  color: #3c3737;
  line-height: 25px;
  min-height: 100px;
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  margin-bottom: 10px;
  text-align: justify;
`;

export const Div = styled.div`
  display: block;
  color: #3c3737;
  text-align: start;
  margin-bottom: 10px;
`;

export const Priority = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 10px;
`;

export const CommentBallon = styled.div`
  padding: 10px 15px;
  background-color: blue;
  color: #fff;
  border-radius: 20px;
  margin-top: 10px;
  width: auto;
  text-align: center;
  position: relative;
  left: 10px;
  &::after {
    position: absolute;
    content: '';
    border: 20px solid transparent;
    left: 0;
    top: 14px;
    border-bottom: 5px solid blue;
    border-left: 8px solid blue;
  }
`;

export const EditWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

export const Select = styled.select`
  margin-left: 10px;
  background-color: #fff;
  padding: 5px 10px;
  border: 1px solid #bdbdbd;
  border-radius: 5px;
`;
