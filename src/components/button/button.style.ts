import styled from 'styled-components';

export const Button = styled.button`
  width: 70%;
  background-color: #007bff; /* Cor de fundo */
  color: white; /* Cor do texto */
  border: none; /* Remove a borda padrão */
  border-radius: 4px; /* Borda arredondada */
  padding: 10px 20px; /* Espaçamento interno */
  font-size: 16px; /* Tamanho da fonte */
  font-weight: bold; /* Peso da fonte */
  cursor: pointer; /* Cursor de ponteiro ao passar sobre o botão */
  transition: background-color 0.3s ease; /* Transição suave de cor de fundo */

  &:hover {
    background-color: #0056b3; /* Cor de fundo ao passar o mouse */
  }

  &:disabled {
    background-color: #d6d6d6; /* Cor de fundo quando desabilitado */
    cursor: not-allowed; /* Cursor de não permitido */
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center; /* Centraliza o botão horizontalmente */
  margin-top: 20px; /* Adiciona espaçamento acima do botão */
`;
