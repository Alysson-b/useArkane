import styled from "styled-components";

export const HeaderMenu = styled.div`
    display: flex;
    flex-direction: column;
    margin: 4em 0em;
    z-index: 1;

    h1{
        display: flex;
        flex-direction: column;
        font-family: 'open sans', sans-serif;
        font-weight: 700;
        font-size: 3em;
        padding: 1rem;
        text-shadow: 0 0 8px rgba(255, 255, 255, 0.25);
    }
    
    .pages{
        display: flex;
        justify-content: center;
        gap: 2rem;
        width: 100%;
    }
    

    .PREV{
        position: relative;

        .titles{
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 0 2rem 0 0;
            
            p{
                font-size: 20px;
                font-family: "open sans";
                font-weight: 400;
                margin-top: 0.9rem;
                color: #f5f5f5d7;
                border-bottom: 1.5px solid #ffffff54;
                cursor: pointer;
                transition: all 0.3s ease;
                &:hover{
                    color: aliceblue;
                    border-bottom: 1.5px solid #ffffff9f;

                }
            }
        }
        
    }

    .banner{
        width: 100%;
        display: flex;
        justify-content: center;
        margin: 2rem auto;
        img{
            max-height: 600px;
            width: 100%;
            object-fit: cover;
            border-radius: 3rem;
            padding: 0 1.5rem ;
        }
    }
    
`;

export const Cards = styled.div`
    display: grid;
    gap: 3rem;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    margin: 0 auto; 
    width: 100%;
    max-width: 1200px;
    min-height: 600px;

    .produto-nao-encontrado {
    grid-column: 1 / -1;
    text-align: center;
    font-size: 1.9rem;
    color: #ffffff; 
    font-weight: bold;
    margin: 2rem 0;
}

`
export const Card= styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    padding: 1em;
    gap: 10px;
    transition: transform 0.2s ease, box-shadow 0.2s ease;

    
    &:hover {
        
        box-shadow: 0 0px 8px rgba(255, 255, 255, 0.7); 
        background: transparent;
        
    }

    img {
        width: 220px;
        height: 250px;
        object-fit: cover;
        border-radius: 10%;
    }
    h3{
        font-family: "Montserrat", sans-serif;
        font-size: 1.8em;
    }
    
    p{
        margin: 0.5rem 0;
        font-family: "open sans", sans-serif;
        font-size: 0.8rem;
        
    }
    button{
        cursor: pointer;
        margin: 0.2rem 0;
        padding: 0.5em 4em;
        border: none;
        border-radius: 8px;
        color: #fff;
        background: #1f1f1f;
        font-family: "Montserrat", sans-serif;
        font-size: 1em;
        font-weight: 600;
        transition: 0.5s ease-in-out;

        &:hover{
            background: #dfdfdf;
            transform: scale(1.03);
            color: #1f1f1f;
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

export const Pagination = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    margin: 30px 0;
`;
export const PageNumber = styled.button<{ active?: boolean }>`
    width: 36px;
    height: 36px;
    border-radius: 8px;
    border: 1px solid ${({ active }) => (active ? "#3b82f6" : "transparent")};
    background: ${({ active }) => (active ? "#e6f0ff" : "transparent")};
    color: ${({ active }) => (active ? "#2563eb" : "#555")};
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s ease;

    &:hover {
        background: ${({ active }) => (active ? "#e6f0ff" : "#f5f5f5")};
    }
`;
export const NextButton = styled.button`
    display: flex;
    align-items: center;
    text-align: center;
    gap: 1rem;
    margin-left: 10px;
    background: transparent;
    border: none;
    color: #555;
    font-weight: 500;
    cursor: pointer;

    &:hover {
        background-color: #e6f0ffdc;
        color: #ccc;
        border-radius: 4px;
        padding: 10px;
        color: #000;
    }
`;

export const CardsProducts = styled.div`
    display: flex;
    gap: 2.6rem;
    overflow-x: auto;
    padding: 1rem 3rem;
    scroll-behavior: smooth;
    margin: auto;
    cursor: grab;
    user-select: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    background-color: #00000052;
    border-radius: 12px;
    
    &:active { 
        cursor: grabbing;
    }

    &::-webkit-scrollbar{
        display: none;
    }

    .produto-nao-encontrado {
        grid-column: 1 / -1;
    text-align: center;
    font-size: 1.9rem;
    color: #ffffff; 
    font-weight: bold;
    margin: 2rem 0;
}

    #scrollRight{
        position: absolute;
        top: 35%;
        left: 0.5%;
        padding: 5rem 0;
        background-color: #0000000a;
        border: none;
        color: #ffffff;
        cursor: pointer;
        z-index: 1;
        font-size: 2rem;
        opacity: .8

    }
    #scrollLeft{
        position: absolute;
        top: 35%;
        right: 0.5%;
        padding: 5rem 0;
        background-color: #0000000a;
        border: none;
        color: #ffffff;
        cursor: pointer;
        z-index: 1;
        font-size: 2rem;
        opacity: .8

    }
`

export const CardProducts = styled.div`
    display: flex;
    min-height: 350px;
    min-width: 330px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    padding: 1em;
    gap: 10px;
    transition: all 0.3s ease;
    cursor: pointer;
    position: relative;
    
    &:hover {
        transform: translateY(-5px) scale(1.02);
        box-shadow: 0 0 20px rgba(255,255,255,0.15);
    }

    img {
        width: 220px;
        height: 250px;
        object-fit: cover;
        border-radius: 10%;
        user-select: none;
        -webkit-user-drag: none;
        
        }
    h3{
        font-family: "Montserrat", sans-serif;
        font-size: 1.8em;
    }
    
    p{
        margin: 0.5rem 0;
        font-family: "open sans", sans-serif;
        font-size: 0.8rem;
        
    }
    button{
        cursor: pointer;
        margin: 0.2rem 0;
        padding: 0.5em 4em;
        border: none;
        border-radius: 8px;
        color: #fff;
        background: #1f1f1f;
        font-family: "Montserrat", sans-serif;
        font-size: 1em;
        font-weight: 600;
        transition: 0.5s ease-in-out;

        &:hover{
            background: #dfdfdf;
            transform: scale(1.03);
            color: #1f1f1f;
        }
    }

    

`


export const SectionFilter =  styled.div`
    display: flex;
    padding: 0.5rem 2rem;
    width: 100%;
    
    .containerSection{
        display: flex;
        flex-direction: column;
        position: relative;

        .btnFilter{
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 10px;
            border-radius: 12px;
            padding: 0.5rem 1rem;
            border: none;
            font-family: "roboto", sans-serif;
            font-weight: 500;
            font-size: .9rem;
            cursor: pointer;
            transition: all .5s ease;
            &:hover{
                transform: scale(1.05);
                background-color: #dfdfdf;
                color: #0a0a0a;
            }
        }
    }
    .btns{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        h2{
            font-family: "open sans", sans-serif;
            font-weight: 700;
            font-size: 1.2rem;
        }
        button{
            padding: 0.6rem 0.9rem;
            background-color: #ffffff;
            border-radius: 12px;
            border: none;
            color: #000000d3;
            cursor: pointer;
            transition: all 0.3s ease;
            &:hover{
                background-color: #dfdfdf;
                color: #1d1d1d;
            }
        }
    }
    .container{
        display: flex;
        align-items: center;
        flex-direction: column;
        gap: 4rem;
        box-shadow: 0 2px 06px rgba(73, 73, 73, 0.25);
        padding: 0.9rem;
        border-radius: 14px;
        animation: fadeInLeft 1s ease;
        position: absolute;
        top: 8%;

        @keyframes fadeInLeft {
            0% {
                    
                transform: translateX(-50px);
                opacity: 0;
            }
            100% {
                    
                transform: translateX(0);
                opacity: 1;
            }
        }

        .precoContainer{
            display: flex;
            flex-direction: column;
            gap: 1rem;
            .titlePreco{
                font-family: "roboto", sans-serif;
                font-weight: 400;
                font-size: 1.1rem;
            }
        }
        .containerTamanho{
            width: 100%;
            display: flex;
            flex-direction: column;
            gap: 1rem;
            .titleTamanho{
                font-family: "roboto", sans-serif;
                font-weight: 400;
                font-size: 1.1rem;
            }
            ul{
            display: flex;
            list-style: none;
            gap: 1.4rem;
            border-radius: 8px;
            border: none;
            font-family: "roboto", sans-serif;
            font-weight: 400;
            font-size: 13px;
            transition: all;
            
            li{
            border-radius: 6px;
            border: 0.1rem solid #ccc;
            padding: 8px 16px;
            cursor: pointer;
            font-weight: bold;
            transition: all 0.3s ease;
            user-select: none;
            color: #0a0a0a;
            
            button{
                background-color: transparent;
                border: none;
            }
            }
            li:hover{
                background-color: black;
                color: aliceblue;
                button{
                    color: #dfdfdf;
                }
            }
            }
        }
        .barra{
            display: flex;
            flex-direction: column;
            width: 100%;
            box-shadow: 0 4px 08px rgba(255,255,255,0.25);
            padding: 1rem;
            border-radius: 4px;
            background-color: #dfdfdf;
            color: black;

            .preco{
                display: flex;
                align-items: center;
                justify-content: space-between;
                font-family: "Roboto", sans-serif;
                font-size: 0.8rem;
                color: #000000;
            }
            input{
                width: 100%;
                background-color: #000000;
                appearance: none;
                border-radius: 5px;
                height: 4px;
                outline: none;
            }
            .slide::-webkit-slider-thumb{
                appearance: none;
                width: 20px;
                height: 20px;
                background-color: #0c0c0c;
                border-radius: 50%;
                cursor: pointer;
            }
            
        
        }
        .filters{
            display: flex;
            align-items: center;
            padding: 1rem;
            gap: 1rem;
            border-radius: 4px;
            box-shadow: 0 4px 08px rgba(255,255,255,0.25);
            background-color: #dfdfdf;
            color: #000000;
            

            p{
                font-size: 2.2rem;
            }
            input{
                max-width: 5.5rem;
                padding:  0.4rem 0.8rem;
                background-color: transparent;
                border: none;
                background-color: #dfdfdf;
                color: #000000;
                &:focus{
                    outline: none;
                    
                }
                
            }
            input[type="number"]::-webkit-outer-spin-button,
            input[type="number"]::-webkit-inner-spin-button{
                -webkit-appearance: none;
            }
            fieldset{
                font-family: "open sans", sans-serif;
                font-weight: 300;
                font-size: 14px;
                padding: 0.3rem;
                box-shadow: 0 02px 08px rgba(255,255,255,0.25);
                background-color: #dfdfdf;
                color: #000000;
            }
        }
        .TamanhosCores{
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            box-shadow: 0 02px 08px rgba(255,255,255,0.25);
            padding: 1rem;
            border-radius: 12px;
            background-color: #dfdfdf;
            color: #000000;
            
            select{
                appearance: none;
                background-color: transparent;
                border: 1px solid #444;
                color: #000000;
                padding: 6px;
                border-radius: 10px;
                font-size: 15px;
                cursor: pointer;
                transition: 0.3s ease;
                border: none;
                box-shadow: 0 2px 8px rgba(24, 24, 24, 0.93);
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
            
        .cor {
            width: 25px;
            height: 25px;
            border-radius: 50%;
            border: 2px solid #03030383;
            cursor: pointer;
            background: none;
            padding: 1px;
            overflow: hidden;
            transition: 0.2s;
        }

        .cor::-webkit-color-swatch-wrapper {
            padding: 1px;
        }

        .cor::-webkit-color-swatch {
            border: none;
            border-radius: 50%;
        }

        .cor.ativa {
            border: 2px solid #222;
            box-shadow: 0 0 0 3px white;
        }
    }
`