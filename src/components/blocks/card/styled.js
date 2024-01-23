import styled from 'styled-components';

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  width: 100%;
  height: 500px;
  padding: 20px;
  background-color: #fff;
  border: 1px solid #d0d0d0;
  border-radius: 20px;
`;

export const CardHeader = styled.header`
  border-bottom: 1px solid #000;
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
  margin-top: 10px;
  margin-bottom: 10px;
  text-align: justify;
`;

export const Span = styled.span`
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

export const Comment = styled.textarea`
  box-sizing: border-box;
  width: 100%;
  min-height: 50px;
  resize: none;
  margin-top: 10px;
  padding: 5px;
  border: none;
  border-radius: 10px;

  &:focus {
    outline: 2px solid #d67e7e;
  }
`;

export const CommentFieldWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;

export const EditWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;
