Aqui está o `README.md` atualizado para o seu projeto, agora levando em consideração que ele foi feito em Next.js:

```markdown
# Formulário de Registro em Next.js

Este projeto é um simples formulário de registro construído com Next.js. Ele inclui validação de formulários, tratamento de erros e envio para um endpoint de API. O formulário permite que os usuários se registrem fornecendo um nome de usuário, e-mail e senha.

## Funcionalidades

- **Validação Dinâmica de Formulário**: Validação em tempo real para os campos de e-mail, senha e confirmação de senha.
- **Integração com API**: Envia os dados do formulário para um endpoint de API especificado.
- **Componentes Personalizados**: Componentes modulares como `Input`, `Button` e `Title` para reutilização e fácil manutenção.
- **Tratamento de Erros**: Exibe mensagens de erro apropriadas para entradas inválidas e lida com erros de resposta da API.
- **Styled Components**: Utiliza styled-components para estilização da interface, proporcionando um código limpo e de fácil manutenção.

## Começando

### Pré-requisitos

- **Node.js**: Certifique-se de ter o Node.js instalado em sua máquina.
- **Next.js**: Este projeto utiliza Next.js. Você pode seguir o [Guia Oficial de Configuração do Next.js](https://nextjs.org/docs/getting-started) para configurar o ambiente.

### Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/rodrigomendezx777/nextjs-registration-form.git
   cd nextjs-registration-form
   ```

2. Instale as dependências:
   ```bash
   npm install
   # ou
   yarn install
   ```

3. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   # ou
   yarn dev
   ```

### Executando a Aplicação

A aplicação será executada em modo de desenvolvimento e estará disponível em `http://localhost:3000`. A partir daí, você pode acessar o formulário de registro na rota correspondente.

## Estrutura do Projeto

```
📂 src
 ┣ 📂 components
 ┃ ┣ 📜 Button.tsx
 ┃ ┣ 📜 Input.tsx
 ┃ ┣ 📜 Title.tsx
 ┃ ┗ 📜 Layout.tsx
 ┣ 📂 pages
 ┃ ┣ 📜 index.tsx
 ┃ ┗ 📜 register.tsx
 ┣ 📂 styles
 ┃ ┣ 📜 button.style.ts
 ┃ ┗ 📜 input.style.ts
 ┗ 📜 App.tsx
```

- **`components/`**: Contém componentes de UI reutilizáveis, como `Button`, `Input`, etc.
- **`pages/`**: Contém as páginas principais do app, incluindo a página de registro.
- **`styles/`**: Contém arquivos de estilo usados nos componentes.

## Uso

- **Validação de Formulário**: O formulário realiza a validação em tempo real das entradas do usuário e exibe mensagens de erro ou sucesso apropriadas.
- **Envio de Formulário**: Os dados do formulário são enviados para o endpoint de API `/api/register` ao ser submetido.

## Personalização

Você pode personalizar os campos do formulário, regras de validação ou endpoints de API editando a página `register.tsx` e os componentes associados.

## Contribuindo

Se você quiser contribuir para este projeto, sinta-se à vontade para fazer um fork do repositório e enviar um pull request. Contribuições são sempre bem-vindas!

## Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

**Autor**: Rodrigo Mendez

GitHub: [rodrigomendezx777](https://github.com/rodrigomendezx777)
```
