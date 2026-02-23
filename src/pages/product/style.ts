import styled from "styled-components";

export const  ItemsCarrinho = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-around;
    width: 100%;
    height: auto;
    padding: 3em 0;
    border-bottom: 1px solid #fff;
    

    .imgmin{
        display: flex;
        flex-direction: column;
        width: 120px;
        height: 120px;
        gap: 8px;
        object-fit: contain;
        cursor: pointer;
        margin: 0 1rem;
    }
    .fotos{
        display: flex;
        align-items: flex-start;
    }

    
    `
    export const  ItemImage = styled.div`

    img{
        max-width: 500px;
        width: 100%; 
        object-fit: contain;
        cursor: pointer;
    }
    `
    export const  InforItems = styled.div`
        
        .descriçao{
        display: flex;
        justify-content: flex-start;
        flex-direction: column;
        gap: 1rem;
        }
        h1{
        font-size: 2.5rem;
        font-family: 'roboto', sans-serif;
        font-weight: 700;
        margin-bottom: 1.5rem;
        }
        p{
        font-size: 1.2rem;
        font-family: 'roboto', sans-serif;
        font-weight: 400;
        }
        .descriçaoPreco{
            display: flex;
            flex-direction: column;
            gap: 1.2rem;
            font-family: "open sans", sans-serif;

        .warning{
            width: 50%;
            display: flex;
            font-family: "Montserrat", sans-serif;
            justify-content: center;
            font-size: 1.5rem;
            font-weight: 700;
            color: black;
            padding: 0.5rem;
            background: #f7fa40;
            border-radius: 6px;
            
            
        }
        .warningLast{
            width: 50%;
            display: flex;
            font-family: "Montserrat", sans-serif;
            justify-content: center;
            font-size: 1.5rem;
            font-weight: 700;
            color: white;
            padding: 0.5rem;
            background: #fd0a0a;
            border-radius: 6px;

            
            
        }
        h3{
            font-size: 30px;
            font-weight: 900;
        }
        p{
            font-size: 14px;
        }
        a{
            text-decoration: none;
            color: aliceblue;
            border-bottom: 1px solid #fff;
            
        }
        }
        
        .quantidade{
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
        width: 100px;
        height: 45px;
        padding: 0 4px;
        border-radius: 50px;
        background: #ffffff;
        box-shadow: 0 0px 8px rgba(255, 255, 255, 0.7);
        
        button{
            width: 100%;
            height: 50%;
            border-radius: 50%;
            border: none;
            margin-left: 4px;
            background: #000000f6;
            color: #ccc;

        }
        input{
            width: 25px;
            text-align: center;
            border: 1px solid #ccc;
            border-radius: 4px;
        }
        
        }
        
        
        .tamanhos{
            display: flex;
            flex-direction: column;
            h3{
                font-size: 1rem;
                font-family: "open sans";
                font-weight: 700;
                margin-bottom: 0.5rem;
            }
        ul{
            display: flex;
            list-style: none;
            gap: 8px;
            border-radius: 8px;
            border: none;
            font-family: "roboto", sans-serif;
            font-weight: 400;
            font-size: 13px;
            transition: all;
            
        li{
            border-radius: 6px;
            border: 2px solid #ccc;
            padding: 8px 16px;
            border: none;
            background-color: aliceblue;
            cursor: pointer;
            font-weight: bold;
            transition: all 0.3s ease;
            user-select: none;
            color: #0a0a0a;
        }
        
        li:hover{
            background-color: black;
            color: aliceblue;
        }
        li.ativo{
            background-color: black;
            color: aliceblue;
        }
    }

    }
        
        .cor{
        display: flex;
        flex-direction: column;
        gap: 6px;
        width: 260px;
        font-family: 'roboto', sans-serif;

        label{
            font-size: 1rem;
            font-weight: 700;
        }
        select{
            appearance: none;
            background-color: #faf6f6;
            border: 1px solid #444;
            color: #070707;
            padding: 12px;
            border-radius: 10px;
            font-size: 15px;
            cursor: pointer;
            transition: 0.3s ease;
            border: none;
        }
        select:focus{
            outline: none;
        
        }
        option{
            background: #111;
            color: #fff;
            padding: 10px;
        }
        }
        .addBtn{
            display: flex;
            gap: 2rem;

        .btn-voltar{
            padding: 14px 25px;
            background-color: transparent;
            color: #ffffffff;
            border: 1px solid #ffffff99;
            border-radius: 8px;
            cursor: pointer;
            font-size: 18px;
            margin-top: 1.5em;
            transition: all 0.3s ease;
        }

        button{
            padding: 14px 25px;
            background-color: transparent;
            color: #5e5e5eff;
            border: 1px solid #ffffff99;
            border-radius: 8px;
            cursor: pointer;
            font-size: 18px;
            margin-top: 1.5em;
            transition: all 0.3s ease;
        }

        .ativo{
            padding: 14px 25px;
            background-color: #222222ab;
            color: #ffffffff;
            border: 1px solid #ffffff99;
            border-radius: 8px;
            cursor: pointer;
            font-size: 18px;
            margin-top: 1.5em;
            transition: all 0.3s ease;
        }
        }


        

    `

export const Loading = styled.div`
.loading-container {
    min-height: 60vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    background: linear-gradient(135deg, #22222273, #ffffff);
    }

.loading-container p {
    font-size: 2rem;
    color: #fdfcfcff;
    font-weight: 500;
    letter-spacing: 0.5px;
    }

.spinner {
    width: 48px;
    height: 48px;
    border: 4px solid #e0e0e0;
    border-top: 4px solid #111;
    border-radius: 50%;
    animation: spin 0.9s linear infinite;
    }

    
@keyframes spin {
    to {
        transform: rotate(360deg);
    }
    }

    
`
export const ContainerError=  styled.div`
    .erro-container {
    min-height: 80vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    background: linear-gradient(135deg, #22222273, #ffffff);
    }

    .erro-card {
    background: #3535353d;
    padding: 2.5rem 2rem;
    border-radius: 16px;
    max-width: 420px;
    width: 100%;
    text-align: center;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.08);
    animation: fadeIn 0.4s ease-in-out;
    }

    .erro-icon {
    font-size: 3rem;
    display: block;
    margin-bottom: 1rem;
    }

    .erro-card h1 {
    font-size: 1.6rem;
    font-weight: 700;
    margin-bottom: 4rem;
    color: #f8f6f6ff;
    }

    .erro-card button {
    background: #111;
    color: #fff;
    border: none;
    padding: 0.75rem 1.75rem;
    font-size: 1rem;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.3s ease;
    }

    .erro-card button:hover {
    background: #000;
    transform: translateY(-2px);
    }


`