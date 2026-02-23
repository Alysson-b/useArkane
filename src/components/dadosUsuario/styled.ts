import styled from "styled-components";


export const ContainerCadastroStyled = styled.div`
  background:
    radial-gradient(ellipse 70% 50% at 50% 0%, rgba(99, 102, 241, 0.07) 0%, transparent 65%),
    #f5f5f7;
  align-items: center;
  justify-content: center;
  padding: 4rem 2rem;
  font-family: 'DM Sans', 'Helvetica Neue', sans-serif;

  form {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 48px;
    width: 100%;
    flex-direction: column;
    
  }

  input {
    width: 100%;
    padding: 13px 16px;
    border-radius: 10px;
    border: 1.5px solid #e4e4e7;
    background: #fafafa;
    font-size: 14px;
    font-family: inherit;
    font-weight: 450;
    color: #18181b;
    transition: border-color 0.2s ease, box-shadow 0.2s ease, background 0.2s ease;
    
    &:disabled{
      background: #ff040400;
      color: #bbbbbb;
    }
    &::placeholder {
      color: #00000088;
    }

    &:hover {
      border-color: #c4c4ca;
      background: #fdfdfd;
    }

    &:focus {
      outline: none;
      border-color: #6366f1;
      background: #fff;
      box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.12);
    }
  }

    button {
    padding: 13px 28px;
    border-radius: 10px;
    border: none;
    font-size: 14px;
    font-family: inherit;
    font-weight: 600;
    letter-spacing: 0.01em;
    cursor: pointer;
    transition: all .3s ease-in-out;

    &:hover{
        transform: scale(1.01);
    }
    &#alterar{
        background-color: #0d4b01af;
    }
    &#alterar:hover{
        background-color: #189100ea;
    }

    &#salvar{
        background-color: #8f8f8fd8;
    }
    &#salvar:hover{
        background-color: #7e7d7dad;
       
    }
  }

`;

export const PerfilStyled = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;

    > div {
        display: flex;
        gap: 16px;
    }

    > div > div {
        flex: 1;
        display: flex;
        gap: 16px;
    }

    @media (max-width: 768px) {
        > div {
        flex-direction: column;
        }

        > div > div {
        flex-direction: column;
        }
    }
`;

export const EnderecoStyled = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;

    .uf{
      display: flex;
      gap: 2rem;
    }
    @media (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`;



