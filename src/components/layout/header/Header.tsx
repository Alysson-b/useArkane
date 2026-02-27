import { useNavigate } from "react-router-dom";
import { Nav, NavBar, Navigation } from "./style";
import { useSearch } from "../../../contexts/provider_search/useSeach";
import logo from "../../../../public/assets/Logo.png";
import { useAuth } from "../../../contexts/auth/useAuth";
import {  useState } from "react";
import { useCart } from "../../../contexts/provider_car/useCart";

interface Props {
    LoginModal: () => void;
}

function Header({ LoginModal }: Props) {
    const { search, setSearch } = useSearch();
    const navigate = useNavigate();
    const { token, logout, user } = useAuth();
    const {totalItems} = useCart()
    const logado = Boolean(token);
    const isAdmin = user?.tipo === "admin";
    const [open, setOpen] = useState(false);

    function fecharMiniModal() {
        setOpen(false);
    }
    

    return (
        <Navigation>
        <Nav>
            <div className="produtos-menu">
            <img onClick={() => navigate("/")} src={logo} alt="logo" />
            </div>

            <div className="listProdutos">
            <ul>
                <li>Camisas</li>
                <li>Regatas</li>
                <li>Oversized</li>
                <li>Bermudas</li>
            </ul>
            </div>
        </Nav>

        <NavBar>
            <div className="navLink">
            <ul>
                <li onClick={() => navigate("/")}>Home</li>
                <li onClick={() => navigate("/sobre")}>Sobre nós</li>
                <li><a href="#footer">Fale conosco</a></li>
            </ul>
            </div>

            <div className="Usuario">
            <div className="search-container">
                <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                type="text"
                placeholder="Buscar"
                />
                <i className="fa-solid fa-magnifying-glass"></i>
            </div>

            <div className="user-actions">
                {!logado ? (
                <>
                    <h3 className="logar" onClick={LoginModal}>
                    Entrar
                    </h3>
                    <i
                    className="fa-solid fa-user"
                    onClick={LoginModal}
                    title="Login"
                    ></i>
                </>
                ) : (
                <>
                    <h3 onClick={logout} className="logar">
                    Sair
                    </h3>
                    <i
                    onClick={logout}
                    className="fa-solid fa-right-from-bracket"
                    ></i>
                </>
                )}

                {!isAdmin ? (
                <div className="cart-icon">
                    <i
                    className="fa-solid fa-cart-shopping"
                    onClick={() => navigate("/carrinho")}
                    title="Carrinho"
                    ></i>
                    {totalItems > 0 && <span className="cart-count">{totalItems}</span>}
                </div>
                ) : (
                <div className="menuContainer">
                    <div onClick={() => setOpen((prev) => !prev)}>
                    <i className="fa-solid fa-gear"></i>
                    </div>

                    {open && (
                    <div className="dropdown" onMouseLeave={fecharMiniModal}>
                        <button onClick={() => navigate("/admin")}>
                        Cadastrar produto
                        </button>

                        <button onClick={() => navigate("/admin/lista")}>
                        Ver produto
                        </button>

                        <button onClick={()=> navigate("/usuarios")}>Ver usuarios</button>
                    </div>
                    )}
                </div>
                )}
            </div>
            </div>
        </NavBar>
        </Navigation>
    );
}

export default Header;
