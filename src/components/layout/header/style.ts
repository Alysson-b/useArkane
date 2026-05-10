import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    background: #000000f8;
    color: aliceblue;

`;

export const Navigation = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 20px 32px;
    max-height: 150px;
    border-bottom: 1px solid white;
    background: #000;

    .search-container {
        position: relative;
        display: flex;
        width: 40%;
        
        .fa-magnifying-glass {
            position: absolute;
            top: 50%;
            right: 3%; 
            transform: translateY(-50%);
            color: #080808;
            font-size: 1.4rem;
            cursor: pointer;
        }
    }
    input{
        display: flex;
        align-items: center;
        min-width: 100%;
        border: none;
        padding: 12px 18px;
        border-radius: 4px;
        outline: none;

    }
    input::placeholder
    {
        font-size: 1.3em;
        font-family: "roboto", sans-serif;
        font-weight: 600;
        color: #888;
    }

    
`;


export const Nav = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    img{
        width: 70%;
        height: 70%;
        border-radius: 50%;
        cursor: pointer;
        box-shadow:  0 0 1px #ffffff, 0 0 5px #ffffff, 0 0 4px #ffffff;
    }
    .listProdutos ul{
        display: flex;
        align-items: center;
        list-style: none;
        font-size: 15px;
        font-family: "Roboto", sans-serif;
        font-weight: 700;
        flex-wrap: wrap;
        gap: 1rem;
        position: relative;

        }
        .listProdutos li{
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        }
        .listProdutos li::before{
        content: "";
        width: 0px;
        height: 2px;
        background-color: #fcfcff;
        position: absolute;
        top: 100%;
        left: 0;
        transition: .5s ease-in-out;
        text-transform: uppercase;
        }
        .listProdutos li{
        cursor: pointer;
        transition: 0.3s ease-in-out;
        }
        .listProdutos li:hover::before{
            width: 100%;
            transform: translateY(100%);
}

    



`;
export const NavBar = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    h3{
            font-weight: 700;
            font-family: "Montserrat", sans-serif;
            font-size: 1rem;
            cursor: pointer;
    }
    
    div{
        display: flex;
        align-items: center;
        gap: 5rem;

        i{
            font-size: 1.5em;
            cursor: pointer;
        }
    }
        .cart-icon {
            position: relative;
            display: flex;
    }

    .cart-count {
    position: absolute;
    top: -10px;
    right: -10px;
    background: #015e05;
    color: white;
    font-size: 12px;
    font-weight: bold;
    padding: 4px 8px;
    border-radius: 50%;
}

.Usuario{
    display: flex;
    align-items: center;
    justify-content: center;
    
    
}
.user-actions {
    display: flex;
    align-items: center;
    
    .menuContainer{
        position: relative;
        
        button{
            width: 100%;
            min-width: 180px;
            background: #979797; 
            color: #353536;
            padding: 8px 22px;
            border-radius: 8px;
            border: none;
            cursor: pointer;
            transition: 0.3s ease-in-out;

            &:hover{
                background: rgb(49, 49, 49);
                color: #ffffff;
            }
        }

        
    }

    .dropdown{
        z-index: 9999;
        position: absolute;
        top: 40px;
        right: 0;
        background: #FFFFFF;
        border-radius: 8px;
        padding: 1rem 2rem;
        box-shadow: 0 8px 25px rgba(15,23,42,0.08);
        display: flex;
        flex-direction: column;
        gap: 10px;
    }
}

    .navLink{
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 1rem;
    }
    ul{
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1.5rem;
        list-style: none;
        a{
            text-decoration: none;
            color: #fcfcff;;
        }
        li{
            font-weight: 600;
            font-family: "Roboto", sans-serif;
            font-size: 0.8rem;
            cursor: pointer;
            transition: 0.3s ease-in-out;
        }
        li:hover{
            text-shadow: 1px 2px 3px #ffffff;
            color: #fcfcff;
        }
    }
`;
