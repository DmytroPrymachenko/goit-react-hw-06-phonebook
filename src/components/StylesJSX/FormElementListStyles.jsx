import styled from 'styled-components';

export const FormDiv = styled.div`
  display: flex;
  flex-direction: column;
`;
export const FormElementDiv = styled.div`
  display: flex;

  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 8px solid #5404ff;
  background: #ffffff;
  padding: 50px;
  width: 500px;
  border-radius: 16px 16px 16px 16px;
  -webkit-border-radius: 16px 16px 16px 16px;
  -moz-border-radius: 16px 16px 16px 16px;
  box-shadow: 14px 12px 19px -2px rgba(0, 0, 0, 0.83);
  -webkit-box-shadow: 14px 12px 19px -2px rgba(0, 0, 0, 0.83);
  -moz-box-shadow: 14px 12px 19px -2px rgba(0, 0, 0, 0.83);
`;

export const DeleteBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  width: 75px;
  height: 30px;
  border-radius: inherit;
`;

export const ElementDiv = styled.div`
  display: flex;
`;
export const ElementUl = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: center;
  justify-content: center;
  padding: 20px;
  border: 2px solid rgba(102, 48, 255, 0.11);
  border-radius: 26px 26px 26px 26px;
  -webkit-border-radius: 26px 26px 26px 26px;
  -moz-border-radius: 26px 26px 26px 26px;
`;
