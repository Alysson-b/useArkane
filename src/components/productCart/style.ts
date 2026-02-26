import styled from "styled-components";

export const HeaderMenu = styled.div`
    display: flex;
    flex-direction: column;
    margin: 4em 0em;
    z-index: 1;

    h1{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        font-family: 'open sans', sans-serif;
        font-weight: 600;
        font-size: 2.2em;
    }
    .line{
        border-bottom: 0.1px solid #fff;
        width: 8%;
        
    }
`;

export const Cards = styled.div`
    display: grid;
    gap: 3rem;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    margin: 8rem auto; 
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