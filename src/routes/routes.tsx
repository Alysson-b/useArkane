import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ProductList } from "../components/productCart/ProductList";
import DetalhesProduto from "../pages/product/DetalhesProduto";
import Layout from "../components/layout/main/Main";
import { ToastContainer } from "react-toastify";
import CartPage from "../components/carrinho/CartItem";
import ModalAdmin from "../components/common/Modal_admin";
import ListaDeProdutos from "../components/common/ListProduct";
import { Sobre } from "../pages/sobre/Sobre";
import { Cadastro_completo } from "../components/dadosUsuario/Dados_usuarios";
import { ListarUsuarios } from "../components/common/ListUsuarios";






export function AppRoutes(){
    return(
            <BrowserRouter>
                <Routes >
                    <Route element={<Layout/>}>
                        <Route path="/" element={<ProductList/>}/>
                        <Route path="/sobre" element={<Sobre/>}/>
                        <Route path="/produto/:id" element={<DetalhesProduto/>}/>
                        <Route path="/carrinho" element={<CartPage/>}/>  
                        <Route path="/admin" element={<ModalAdmin/>}/>
                        <Route path="/admin/lista" element={<ListaDeProdutos/>}/>
                        <Route path="/admin/:id" element={<ModalAdmin/>}/>
                        <Route path="/cadastro" element={<Cadastro_completo/>}/>
                        <Route path="/usuarios" element={<ListarUsuarios/>}/>
                        
                    </Route>
                </Routes>
                <ToastContainer/>
            </BrowserRouter>
    )
}