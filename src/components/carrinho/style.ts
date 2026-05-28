import styled from "styled-components";

export const CartContainer = styled.div`
  width: 100%;
  min-height: 400px;
  border-radius: 12px;
  box-shadow: 0 0px 25px rgba(196, 195, 195, 0.2);
  padding: 20px;
  display: flex;
  justify-content: space-evenly;
  align-items: flex-start;
  margin: 2em auto;
  position: relative;

  h2 {
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: "Roboto", sans-serif;
    font-size: 1.8em;
    font-weight: 900;
    color: #000000ce;
    margin-bottom: 1rem;
  }

  .precoTotal {
    display: flex;
    width: 30%;
    border-radius: 8px;
    height: auto;
    align-items: flex-start;
    flex-direction: column;
    padding: 12px;

    .title {
      width: 100%;
      display: flex;
      align-items: flex-start;
    }

    h3 {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 5px;
      font-family: "open sans", sans-serif;
      font-weight: 600;
      font-size: 1.4rem;
      padding: 10px;
      margin-bottom: 1rem;

      i {
        font-size: 1.3rem;
      }
    }

    .frete {
      width: 100%;
      margin: 6px 0;
      display: flex;
      flex-direction: column;
      font-family: "roboto", sans-serif;
      gap: 8px;

      input {
        width: 100%;
        height: 50px;
        border: none;
        border-radius: 8px;
        padding: 20px;
      }
      input:focus {
        outline: none;
      }
      input::placeholder {
        font-weight: 700;
        font-size: 16px;
      }

      .cep {
        display: flex;
        gap: 20px;

        button {
          width: 100px;
          border: none;
          border-radius: 8px;
          font-family: "open sans", sans-serif;
          font-weight: 700;
          font-size: 14px;
          color: #070707;
          cursor: pointer;
        }
      }
    }
    .dados {
      width: 82%;
      display: flex;
      align-items: flex-start;
      flex-direction: column;
      background-color: #ffffff;
      border-radius: 8px;
      font-size: 14px;
      font-weight: 400;
      color: #313131;
      padding: 12px;
      font-family: "open sans", sans-serif;
    }
    .cliente {
      font-size: 16px;
      font-weight: 500;
    }

    .valores {
      display: flex;
      flex-direction: column;
      width: 100%;
    }
    .valorTotal,
    .valorParcela,
    .valorPix {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-family: "open sans", sans-serif;
      margin-bottom: 0.5rem;
      padding: 0.9rem;
      border-radius: 4px;
      border-bottom: 0.1rem solid white;
      h4 {
        font-size: 17px;
      }
    }
    .valorTotal {
      h4 {
        font-size: 19px;
        font-weight: 500;
      }
      p {
        font-family: "roboto", sans-serif;
        font-size: 20px;
        font-weight: 900;
      }
    }
    .valorParcela {
      align-items: flex-start;
      div {
        display: flex;
        align-items: flex-end;
        flex-direction: column;
      }
    }
    .valorPix {
      .pix {
        color: #037a03;
      }
      .divPix {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        font-size: 14px;
      }
      .desconto {
        color: #037a03;
      }
    }

    .btns {
      width: 100%;
      display: flex;
      align-items: center;
      flex-direction: column;

      .back {
        background-color: #fffefecf;
        color: #000000;
        &:hover {
          background-color: #ffffff;
          color: #000000;
          transform: scale(1.01);
        }
      }

      button {
        width: 90%;
        height: 50px;
        cursor: pointer;
        margin: 1em 0;
        padding: 8px;
        border: 1px solid #ffffff8b;
        border-radius: 8px;
        background-color: transparent;
        color: white;
        font-family: "Montserrat", sans-serif;
        font-size: 1em;
        font-weight: 600;
        transition: 0.3s ease-in-out;

        &:hover {
          background: #1a1a1a;
          color: #f1f1f1;
          transform: scale(1.01);
        }
      }
    }
  }

  .containerCart {
    background-color: #0303035c;
    width: 100%;
    max-width: 60%;
    border-radius: 8px;
    gap: 8px;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 2rem;
    flex-direction: column;
  }

  .carrinhoVazio {
    width: 100%;
    height: 20vh;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;

    & p{
      font-family: "roboto", sans-serif;
      font-weight: 800;
      font-size: 2rem;
    }
    & i{
      font-size: 2rem;
    }
  }
`;
export const CartItem = styled.div`
  width: 100%;
  height: 250px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 3rem;
  margin-bottom: 8px;
  padding: 1rem;
  border-bottom: 1px solid #fff;

  .inforCart {
    display: flex;
    align-items: flex-start;
    gap: 5rem;
    width: 100%;
  }
  .descDiv {
    h3 {
      font-family: "Montserrat", sans-serif;
      font-size: 1.4rem;
      margin-bottom: 0.5rem;
    }
    p {
      font-family: "roboto", sans-serif;
      font-weight: 400;
      font-size: 1em;
    }
    .quantidade {
      display: flex;
      align-items: center;
      gap: 8px;
      width: 100px;
      height: 45px;
      padding: 0 4px;
      border-radius: 50px;
      background: #ffffff;
      box-shadow: 0 0px 8px rgba(255, 255, 255, 0.7);

      button {
        width: 100%;
        height: 50%;
        border-radius: 50%;
        border: none;
        margin-left: 4px;
        color: #000000ff;
      }
      input {
        width: 25px;
        text-align: center;
        border: 1px solid #ccc;
        border-radius: 4px;
      }
      i {
        color: #ff0000b9;
        font-size: 15px;
        transition: all 0.3s;
      }
      i:hover {
        color: red;
      }
    }
  }

  img {
    width: 8rem;
    object-fit: contain;
  }

  .preco {
    font-family: "roboto", sans-serif;
    font-size: 20px;
    font-weight: 900;
    
  }
  .valorPag {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    p {
      font-size: 0.8rem;
      font-family: "roboto", sans-serif;
      font-weight: 900;
    }

    h3{
      font-family: "roboto", sans-serif;
      font-weight: 600;
      font-size: 1.4rem;
    }
  }
`;


export const DadosCompra = styled.div`
  background-color: #0303035c;
  width: 35%;
  max-width: 40%;
  border-radius: 8px;
  display: flex;
  padding: 2rem;
  flex-direction: column;
  position: relative;
  h2 {
    color: aliceblue;
  }

  @keyframes fade-in-top {
    0% {
      -webkit-transform: translateY(-50px);
      transform: translateY(-50px);
      opacity: 0;
    }
    100% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
      opacity: 1;
    }
  }

  .fa-backward-fast {
    font-size: 22px;
    position: absolute;
    color: aliceblue;
    top: 10px;
    left: 10px;
    cursor: pointer;
  }

  .pagamentoPix,
  .pagamentoBoleto,
  .pagamentoCredito {
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    font-family: "open sans", sans-serif;
    margin-bottom: 0.5rem;
    background-color: #cccccc21;
    padding: 0.9rem;
    border-radius: 8px;
    cursor: pointer;

    h4 {
      font-size: 17px;
    }
    i {
      color: green;
      font-size: 25px;
    }
  }

  .containerPix {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    margin-top: 2rem;
    opacity: 0;
    transform: translateY(20px);
    animation: fade-in-top 0.5s ease-in-out forwards;
    h3 {
      font-family: "roboto", sans-serif;
      font-size: 28px;
      font-weight: 400;
      margin-bottom: 1rem;
    }
    p {
      font-size: 25px;
      font-family: "open sans", sans-serif;
      margin-bottom: 1rem;
    }
    img {
      width: 50%;
      border-radius: 12px;
      object-fit: contain;
    }
  }
  .containerBoleto {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    margin-top: 2rem;
    opacity: 0;
    transform: translateY(20px);
    animation: fade-in-top 0.5s ease-in-out forwards;
    h3 {
      font-family: "roboto", sans-serif;
      font-size: 28px;
      font-weight: 400;
      margin-bottom: 1rem;
    }
    p {
      font-size: 25px;
      font-family: "open sans", sans-serif;
      margin-bottom: 1rem;
    }
    img {
      width: 100%;
      object-fit: contain;
      border-radius: 12px;
    }
  }
  .containerCredito {
    display: flex;
    align-items: flex-start;
    margin-top: 1rem;
    opacity: 0;
    transform: translateY(20px);
    animation: fade-in-top 0.5s ease-in-out forwards;
    position: relative;
    img {
      width: 70%;
      object-fit: contain;
      border-radius: 20px;
    }
    .inputs {
      display: flex;
      width: 100%;
      flex-direction: column;
      gap: 0.5rem;
      justify-content: center;
      input {
        border-radius: 8px;
        padding: 10px 6px;
        border: none;
      }
      .validade {
        display: flex;
        align-items: flex-start;
        gap: 1rem;
        input {
          width: 40%;
        }
        .cvv {
          width: 20%;
        }
      }
      button {
        width: 100%;
        background-color: #015a01c3;
        color: aliceblue;
        padding: 12px 6px;
        border-radius: 12px;
        border: none;
        cursor: pointer;
        font-size: 12px;
        font-weight: 600;
        transition: all 0.3s ease-in-out;

        &:hover {
          background-color: #018001c3;
        }
      }
    }
    .containerImg {
      perspective: 1000px;
      

      .imagemCartao {
        position: relative;
        width: 90%;
        height: 270px; /* ajusta pro tamanho da sua imagem */
        transform-style: preserve-3d;
        transition: transform 0.6s ease;

        .frontCard {
          position: absolute;
          width: 100%;
          height: 100%;
          backface-visibility: hidden;

          img{
            width: 100%;
            height: 100%;
            object-fit: contain;
            
          }
          

          .dadosFront{
            position: absolute;
            bottom: 1.8rem;
            left: 2.5rem;
            width: 85%;
            padding: 1rem;

            .numeroCartao {
                font-size: 1.3rem;
                font-weight: 600;
                letter-spacing: 2px;
                margin: 1.7rem;
            }
            .dados{
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin-left: 1.7rem;

                .nomeCartao{
                    font-size: 14px; 
                    font-weight: 400;
                }

                .validadeCartao{
                    font-size: 14px;
              
                }
            }
          }
        }
        
        .backCard {
            position: absolute;
            width: 100%;
            height: 100%;
            backface-visibility: hidden;
            transform: rotateY(180deg);

            img{
                width: 100%; 
                height: 100%; 
                object-fit: contain; 
                }
            .dadosBack{
                position: absolute;
                top: 35%;
                right: 36%;

                .cvv{
                    font-weight: 700;
                    color: black;
                    font-size: 22px;
                    letter-spacing: 3px;
                }
            }
                
        }
      }
    }
}
`;
