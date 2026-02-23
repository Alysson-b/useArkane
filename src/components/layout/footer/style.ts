import styled from "styled-components";


export const Footer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    margin: 2rem 0;

    h3{
        font-family: "Montserrat", sans-serif;
        font-weight: 700;
        font-size: 1.2em;
    }
    
`;
export const Contatos = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    gap: 2rem;
    
    input{
        padding: 8px 15px;
        width: 20em;
        border: none;
        border-radius: 8px;
        
    }

    button{
        cursor: pointer;
        padding: 7px;
        border-radius: 8px;
        border: none;
        background: white;
        color: #1f1f1f;
        font-size: 0.9em;
        font-family: "open sans", sans-serif;
        font-weight: 600;
        transition: 0.5s ease-in-out;
        &:hover{
            background: #1f1f1f;
            color: white;
    
        }


    }
`

export const Informaçoes = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin: 2em 0;
    background: #ffffff;
    color: #000000;
    padding: 8px;

    h3{
        font-family: 'Montserrat', sans-serif;
        font-size: 1.3em;
    }
    p{
        font-family: "open sans", sans-serif;
        font-weight: 700;
        font-size: 14px;
        color: #838282;
        cursor: pointer;
        transition: 0.3s ease-in-out;
        
        &:hover{
            color: #000000;
        }
    }
    img{
        
        width: 80px;
        height: 50px;
        

    }
`
export const Cartao =styled.div`
        display: flex;
        align-items: center;
        width: 100%;

        img{
            width: 100%;
        }
    
    
    
`

export const Redes = styled.div`
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    margin-top: 1.5rem;
    font-family: 'Montserrat', sans-serif;
    
    h2{
        font-family: "roboto", sans-serif;
    }
    .redeSocial ul{
        display: flex;
        list-style: none;
        gap: 1rem;
        margin-top: 1.5rem;
        transition: all .3s ease-in-out;
        li{
            font-size: 1.5rem;
            cursor: pointer;
            .fa-instagram{
                color: #E4405F;
            }
            .fa-facebook{
                color: #1877F2;
            }
            .fa-whatsapp{
                color: #25D366;
            }
            
        }
        li:hover{
            transform: scale(1.1);
        }
        
    }
`

export const  Diretriz = styled.div`
    display: flex;
    justify-content: center;
    margin: 1rem;
    font-family: "open sans", sans-serif;

`