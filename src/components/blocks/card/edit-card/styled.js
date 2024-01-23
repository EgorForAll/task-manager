import styled from 'styled-components';

export const BtnWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  margin-top: 35px;
`;

export const Error = styled.p`
  position: absolute;
  color: red;
  bottom: 0;
  margin: 0;
  margin-bottom: 20px;
`;

export const Textarea = styled.textarea`
  margin-top: 10px;
  margin-bottom: 10px;
  padding: 0;
  resize: none;
  box-sizing: border-box;
  min-height: 100px;
  border: none;
  font-size: 18px;
  width: 100%;
  border-radius: 10px;
  padding: 5px;
  box-sizing: border-box;
  font-family: 'Rubik', sans-serif;
`;

export const TitleInput = styled.input`
  border: none;
  font-size: 22px;
  width: 100%;
  text-align: center;
`;

export const Input = styled.input`
  border: 1px solid #d9d9d9;
  border-radius: 10px;
  padding: 5px 10px;
  margin-left: 10px;
`;

export const IdInput = styled.input`
  width: 30px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  margin-left: 10px;
`;

export const IdWrap = styled.div`
  display: flex;
  align-items: center;
`;

export const ProjectInput = styled.input`
  border: none;
  text-align: center;
  border-bottom: 1px solid #000;
`;
