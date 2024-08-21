import styled from 'styled-components';

export const InputContainer = styled.div`
  margin-bottom: 15px;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 4px;
  font-weight: bold;
`;

export const InputField = styled.input<{ isError: boolean; isSuccess: boolean }>`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
  box-sizing: border-box;
  border-color: ${({ isError, isSuccess }) => (isError ? 'red' : isSuccess ? 'green' : '#ccc')};
`;

export const ErrorMessage = styled.p`
  color: red;
  font-size: 12px;
  margin-top: 4px;
  margin-bottom: 12px;
`;

export const SuccessMessage = styled.p`
  color: green;
  font-size: 12px;
  margin-top: 4px;
  margin-bottom: 12px;
`;
