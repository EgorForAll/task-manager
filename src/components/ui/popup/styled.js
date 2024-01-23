import styled from 'styled-components';

export const PopupWrap = styled.div`
  margin: 10px;
  display: flex;
  flex-direction: column;
`;

export const Textarea = styled.textarea`
  height: 60px;
  background-color: #fff;
  border-radius: 10px;
  margin: 0;
  margin-top: 10px;
  border: 2px solid #bdbdbd;
  resize: none;
  padding: 5px;
`;

export const Button = styled.button`
  width: min-content;
  height: min-content;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
  margin-top: 10px;
  border: none;
  opacity: 0.7;
  transition: opacity 0.4s ease;
  &:hover {
    opacity: 1;
  }
  &:disabled {
    opacity: 0.3;
  }
`;

export const ButtonsWrap = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 20px;
`;
