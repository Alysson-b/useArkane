import styled from "styled-components";


export const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6); 
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
    overflow: hidden;
    
    
    .close{
        position: absolute;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 8%;
        background-color: #ffffff8a;
        color: #000000ff;
        top: 6px;
        right: 5px;
        transition: all 0.5s ease-in-out;
    }
    .close:hover{
        background-color: #fff;
        color: #000000ff;
        transform: translateY(0);
        opacity: 0.5;
    }
`;
export const LoginContainer = styled.div`
    padding: 2rem;
    width: 500px;
    border-radius: 12px;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    position: relative;
    
    ::before{
        content: "";
        position: absolute;
        inset: 0;
        background: url("../../../../public/assets/background.png") no-repeat center / cover ;
        opacity: 0.1;
        z-index: -1;
        border-radius: 12px;
    }
    

    label {
        font-weight: 600;
        margin-bottom: 0.5rem;
        color: #333;
    }
    h2{
        font-family: "Montserrat", sans-serif;
        font-size: 1.3em;
        font-weight: 700;
        color: rgb(0, 0, 0);
        margin-bottom: 3rem;
        display: flex;
        align-items: center;
        justify-content: center;
        letter-spacing: 4px;
    }

    input {
        width: 100%;
        padding: 0.8rem 1rem;
        margin-bottom: 1.5rem;
        border: 1px solid #ccc;
        border-radius: 8px;
        font-size: 1rem;
        transition: all 0.3s ease;


        &:focus {
        border-color: #0505059d;
        box-shadow: 0 0 5px rgba(107, 115, 255, 0.5);
        outline: none;
        }
    }

    button {
        width: 100%;
        padding: 0.8rem 1rem;
        margin-bottom: 0.5rem;
        border: none;
        border-radius: 8px;
        background-color: #000000dc;
        color: rgb(255, 255, 255);
        font-weight: 600;
        cursor: pointer;
        transition: all 0.5s ease-in-out;

        &:hover {
        background-color: #000000;
        color: rgb(255, 255, 255);
        
        }
    }

    .href{
            display: flex;
            align-items: center;
            justify-content: space-around;
            margin-top: 1em;

            a{
                text-decoration: none;
                font-family: "roboto", sans-serif;
                font-size: 1.03em;
                color: #fbfbfcff;
                font-weight: 700;
                transition: 0.3s ease-in-out;

                &:hover{
                    color: #000000;

                }

            }

        }
`;
export const CadastroContainer = styled.div`
    padding: 2rem;
    width: 400px;
    border-radius: 12px;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    position: relative;

    ::before{
        content: "";
        position: absolute;
        inset: 0;
        background: url("../../../../public/assets/background.png") no-repeat center / cover ;
        opacity: 0.1;
        z-index: -1;
        border-radius: 12px;
    }


    label {
        font-weight: 600;
        margin-bottom: 0.5rem;
        color: #333;
    }
    h2{
        font-family: "Montserrat", sans-serif;
        font-size: 1.3em;
        font-weight: 700;
        color: rgb(0, 0, 0);
        margin-bottom: 2rem;
        display: flex;
        align-items: center;
        justify-content: center;
        letter-spacing: 4px;
    }

    input {
        width: 100%;
        padding: 0.8rem 1rem;
        margin-bottom: 1.2rem;
        border: 1px solid #ccc;
        border-radius: 8px;
        font-size: 1rem;
        transition: all 0.3s ease;


        &:focus {
        border-color: #6b73ff;
        box-shadow: 0 0 5px rgba(107, 115, 255, 0.5);
        outline: none;
        }
    }

    button {
        width: 100%;
        padding: 0.8rem 1rem;
        margin-bottom: 0.5rem;
        border: none;
        border-radius: 8px;
        background-color: rgba(0, 0, 0, 0.91);
        color: #fff;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.5s ease-in-out;

        &:hover {
        background-color: rgb(0, 0, 0);
        color: rgb(255, 255, 255);
        
        }
    }
    .href{
            display: flex;
            align-items: center;
            justify-content: space-around;
            margin-top: 1em;

            a{
                text-decoration: none;
                font-family: "roboto", sans-serif;
                font-size: 1.03em;
                color: #c1ccfc;
                font-weight: 700;
                transition: 0.3s ease-in-out;

                &:hover{
                    color: #000000;

                }

            }

        }
`;
export const RecuperarSenha = styled.div`
    padding: 2rem;
    width: 400px;
    border-radius: 12px;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    position: relative;

    ::before{
        content: "";
        position: absolute;
        inset: 0;
        background: url("../../../../public/assets/background.png") no-repeat center / cover ;
        opacity: 0.1;
        z-index: -1;
        border-radius: 12px;
    }

    label {
        font-weight: 600;
        margin-bottom: 0.5rem;
        color: #333;
    }
    h2{
        font-family: "Montserrat", sans-serif;
        font-size: 1.3em;
        font-weight: 700;
        color: rgb(0, 0, 0);
        margin-bottom: 2rem;
        display: flex;
        align-items: center;
        justify-content: center;
        letter-spacing: 4px;
    }

    input {
        width: 100%;
        padding: 0.8rem 1rem;
        margin-bottom: 0.5rem;
        border: 1px solid #ccc;
        border-radius: 8px;
        font-size: 1rem;
        transition: all 0.3s ease;


        &:focus {
        border-color: #6b73ff;
        box-shadow: 0 0 5px rgba(107, 115, 255, 0.5);
        outline: none;
        }
    }

    button {
        width: 100%;
        padding: 0.8rem 1rem;
        margin-bottom: 0.5rem;
        border: none;
        border-radius: 8px;
        background-color: rgba(0, 0, 0, 0.91);
        color: #ffffffff;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.5s ease-in-out;

        &:hover {
        background-color: rgb(0, 0, 0);
        color: rgb(255, 255, 255);
        
        }
    }

    
`
export const ContainerAdmin = styled.div`
    width: 100%;
    background-color: #0f0f0f;
    padding: 40px 24px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    place-items: center;
    position: relative;

    form {
        width: 100%;
        max-width: 800px;
        background-color: #181818;
        padding: 32px;
        border-radius: 12px;
        display: flex;
        flex-direction: column;
        gap: 24px;
        box-shadow: 0 8px 30px rgba(0, 0, 0, 0.4);

    }
    
    .addProdutos {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 16px;
    }
    input{
        width: 100%;
        padding: 12px;
        border-radius: 4px;
        border: none;
    }

    select {
        width: 100%;
        padding: 8px;
        border: 1px solid #ddd;
        border-radius: 4px;
        font-size: 14px;
        font-family: "Roboto", sans-serif;
        font-weight: 300;
        
    }
    #btnVariaçao{
        width: 60%;
        background-color: white;
        color: black;
        
    }
    #btnVariaçao:disabled{
        background-color: #cccccc33;
        color: black;
    }
    
    textarea {
        grid-column: span 2;
        width: 100%;
        min-height: 140px;
        resize: none;
        padding: 12px;
        border-radius: 8px;
        border: 1px solid #2a2a2a;
        background-color: #101010;
        color: #fff;
        font-size: 14px;
        outline: none;
        transition: border 0.2s;

        &::placeholder {
        color: #888;
        }

        &:focus {
        border-color: #4f46e5;
        }
    }

    button{
        width: 100%;
        padding: 14px;
        margin-top: 8px;
        border: none;
        border-radius: 8px;
        background-color: #2f382ca9;
        color: #fff;
        font-size: 15px;
        font-weight: 600;
        cursor: pointer;
        transition: background 0.2s, transform 0.1s;
        
        &:hover {
            background-color: #145201a9;
        }

        &:active {
            transform: scale(0.98);
        }
    }

    img{
    margin-top: 10px;
    border-radius: 8px;
    max-height: 400px;
    max-width: 400px;
    object-fit: cover;
    
    }

.preview {
    display: flex;
    align-items: center;
    gap: 16px;
    width: 100%;
    margin-top: 20px;
}
.CardPreview{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
}
.preview > img {
    border-radius: 12px;
    max-width: 400px;
    width: 100%;
    object-fit: cover;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.4);
}


.preview .variacao-card {
    width: 100%;
    max-width: 400px;
    background: #1b1b1b;
    padding: 14px 18px;
    border-radius: 10px;
    border: 1px solid #2a2a2a;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
    transition: all 0.2s ease;
}

.preview .variacao-card:hover {
    background: #222;
    border-color: #333;
    transform: translateY(-2px);
}

.preview .variacao-card span {
    font-size: 14px;
    color: #ddd;
}

.preview .variacao-card strong {
    color: #fff;
}
.miniModal {
    position: fixed;
    top: 42%;
    right: 23%;
    transform: translate(-50%, -50%);
    background: #1c1c1c;
    padding: 20px;
    border-radius: 12px;
    width: 300px;
    box-shadow: 0 20px 40px rgba(0,0,0,0.6);
    z-index: 1000;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}
    
`;

export const ListProductStyled = styled.div`
  padding: 0 20px;
  position: relative;

  .informaçoes {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #1e1e1e;
    border-radius: 16px;
    padding: 16px 20px;
    margin: 16px 0;
    color: #f5f5f5;
    gap: 2rem;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.25);
    transition: all 0.3s ease;

    &:hover {
      transform: translateY(-3px);
      box-shadow: 0 6px 20px rgba(0, 0, 0, 0.35);
    }

    img {
      width: 70px;
      height: 70px;
      border-radius: 12px;
      object-fit: cover;
      border: 2px solid #2c2c2c;
    }

    .inforDados {
      width: 75%;
      display: flex;
      align-items: center;
      gap: 2rem;

      h3 {
        font-family: "Roboto", sans-serif;
        font-weight: 600;
        font-size: 1.4rem;
        margin-bottom: 6px;
      }
    }

    .variaçoes {
      display: flex;
      flex-direction: column;
      gap: 4px;

      p {
        font-family: "Open Sans", sans-serif;
        font-weight: 500;
        font-size: 0.95rem;
        color: #bdbdbd;
      }
    }

    .btns {
      display: flex;
      gap: 12px;

      button {
        padding: 10px 18px;
        border: none;
        border-radius: 10px;
        cursor: pointer;
        font-family: "Roboto", sans-serif;
        font-weight: 500;
        font-size: 0.95rem;
        display: flex;
        align-items: center;
        gap: 8px;
        transition: all 0.2s ease;
      }

      .editar {
        background-color: #2563eb;
        color: white;

        &:hover {
          background-color: #1d4ed8;
        }
      }

      .excluir {
        background-color: #dc2626;
        color: white;

        &:hover {
          background-color: #b91c1c;
        }
      }
    }
  }


.overlayModal {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.55);
  backdrop-filter: blur(4px);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
  animation: fadeIn 0.2s ease-in-out;
}


.modalDeConfirmacao {
  background: #ffffff;
  padding: 30px;
  width: 90%;
  max-width: 420px;
  border-radius: 16px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
  text-align: center;
  animation: scaleIn 0.2s ease-in-out;
}

.modalDeConfirmacao h2 {
  font-size: 25px;
  font-weight: 500;
  margin-bottom: 25px;
  color: #333;
}

.modalDeConfirmacao h2 span {
  font-weight: 700;
  color: #d62828;
}


.modalButtons {
  display: flex;
  gap: 15px;
  justify-content: center;
}

.btnDanger {
  background: #d62828 !important;
  color: #fff !important;
  transition: 0.2s ease;
  padding: 10px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
}

.btnDanger:hover {
  background: #b71c1c !important;
  transform: scale(1.05);
}

.btnCancel {
  background: #e0e0e0 !important;
  color: #333 !important;
  transition: 0.2s ease;
  padding: 10px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
}

.btnCancel:hover {
  background: #c7c7c7 !important;
  transform: scale(1.05);
}


@keyframes fadeIn {
  from { opacity: 0 }
  to { opacity: 1 }
}

@keyframes scaleIn {
  from { transform: scale(0.9); opacity: 0 }
  to { transform: scale(1); opacity: 1 }
}

`;

export const ListUsuariosStyled = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
  gap: 0.8rem;

  .containerUser {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #f0f8ff;
    color: #222;
    padding: 14px 16px;
    border-radius: 10px;
    border: 1px solid #e0e0e0;
    transition: all 0.2s ease;

    &:hover {
      background-color: #e6f2ff;
    }
  }

  .dadosUser {
    padding: 0 1.5rem;
  }

  .enderecos {
    display: flex;
    flex-direction: column;
    background-color: #f8fbff;
    border-radius: 10px;
    width: 50%;
    border: 1px solid #e0e0e0;
    padding: 10px 14px;
    margin: 6px 0 0 0;
    color: #333;
    font-family: "Roboto", sans-serif;
    font-size: 0.95rem;
    line-height: 1.4;
    transition: all 0.3s ease-in-out;
  }

  .enderecos ul {
    list-style: none;
    padding: 4px 0;
  }

  .semEndereco {
    font-style: italic;
    color: #777;
  }

  .bottoes {
    display: flex;
    align-items: center;
    gap: 0.8rem;
    
}
    button {
        padding: 8px 16px;
        border: none;
        border-radius: 8px;
        cursor: pointer;
        font-family: "Roboto", sans-serif;
        font-weight: 500;
        font-size: 0.9rem;
        transition: all 0.2s ease;
        
        &:hover {
            opacity: 0.85;
        }
    }
    #excluir{
        background-color: #db0101f1;
        color: #fff;
    }
    #editar{
        background-color: #007e11f1;
        color: #fff;
    }

  .iconDrop {
    position: absolute;
    cursor: pointer;
    display: flex;
    align-items: center;
  }
`;


export const ListaPedidosStyled =  styled.div`
  display: flex;
  gap: 1.5rem;
  padding: 1.2rem;
  margin: 1rem 0;
  background: #ffffff;
  border-radius: 12px;
  box-shadow: 0 3px 10px rgba(0,0,0,0.08);
  align-items: center;
  transition: 0.2s;

  &:hover{
    transform: translateY(-3px);
    box-shadow: 0 6px 18px rgba(0,0,0,0.12);
  }

  .imagem img{
    width: 110px;
    height: 110px;
    object-fit: cover;
    border-radius: 10px;
  }

  .conteudo{
    display: flex;
    flex-direction: column;
    gap: 0.6rem;
  }

  h1{
    font-size: 1.2rem;
    font-weight: 600;
    color: #272727;
  }

  p{
    font-size: 0.9rem;
    color: #444;
  }

  span{
    font-weight: 600;
    color: #000;
  }

  .TCP{
    display: flex;
    gap: 1.5rem;
    flex-wrap: wrap;
  }

  .infoPedido{
    display: flex;
    gap: 2rem;
    flex-wrap: wrap;
    margin-top: 0.2rem;
  }

  .status{
    margin-left: 6px;
    padding: 2px 8px;
    border-radius: 6px;
    font-size: 0.8rem;
  }

  .aguardando_pagamento{
    background: #fff4cc;
    color: #b45309;
  }

  .pago{
    background: #dcfce7;
    color: #166534;
  }

  .cancelado{
    background: #fee2e2;
    color: #991b1b;
  }
`


export const CardCarroselStyled = styled.div`
  .carrosel {
        position: relative;
        width: 100%;
        height: 600px;
        margin: auto;
        overflow: hidden;
        border-radius: 12px;
        box-shadow: 0 4px 15px rgba(0,0,0,0.2);
      
    }

    .carrosel img {
        width: 100%;
        height: 600px;
        object-fit: cover;
        position: absolute;
        top: 0;
        left: 0;
        opacity: 0;
        transition: opacity 0.5s ease-in-out;
    }

    .carrosel img.active {
        opacity: 1;
        position: relative;
    }

    .carrosel .indicators {
        position: absolute;
        bottom: 15px;
        left: 50%;
        transform: translateX(-50%);
        display: flex;
        gap: 8px;
        z-index: 2;
    }

    .carrosel .not {
        width: 12px;
        height: 12px;
        border-radius: 50%;
        background-color: rgba(255,255,255,0.6);
        cursor: pointer;
        transition: background-color 0.3s ease;
    }

    .carrosel .not.active {
        background-color: white;
    }

    .carrosel button:hover {
        background-color: rgba(0,0,0,0.7);
    }
`


export const Section = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    background: aliceblue;
    height: 10vh;
    color: #000;

    p{
        font-family: 'Montserrat', sans-serif;
        font-weight: 600;
        font-size: 1.3rem;
        margin: 1.1rem;
        display: flex;
        align-items: center;
        gap: 1rem;
    }
    i{
        font-size: 1.5em;
    }
    .fa-pix{
        color: #27fa27;
    }
    .fa-truck-fast{
        color: #0847f7;
    }
`