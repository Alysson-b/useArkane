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
            gap: 1.5rem;
            
            p{
                font-size: 14px;
                font-family: "open sans";
                font-weight: 400;
                margin-top: 0.9rem;
                color: #f5f5f5ab;
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
            min-width: 1800px;
            object-fit: cover;
            border-radius: 12px;
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