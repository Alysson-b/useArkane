import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ProductList } from "../components/productCart/ProductList";
import DetalhesProduto from "../pages/product/DetalhesProduto";
import Layout from "../components/layout/main/Main";
import { ToastContainer } from "react-toastify";
import CartPage from "../components/carrinho/CartItem";
import ModalAdmin from "../components/common/Modal_admin";
import ListaDeProdutos from "../components/common/ListProduct";
import { Sobre } from "../pages/sobre/Sobre";
import { PoliticaEnvio } from "../pages/frete/freteEntrega";
import { PoliticaTrocas } from "../pages/Devolucao/Devolucao";
import { TermosUso } from "../pages/termoUso/TermoUso";
import { PoliticaPrivacidade } from "../pages/privacidade/Privacidade";
import { Cadastro_completo } from "../components/dadosUsuario/Dados_usuarios";






export function AppRoutes(){
    return(
            <BrowserRouter>
                <Routes >
                    <Route element={<Layout/>}>
                        <Route path="/" element={<ProductList/>}/>
                        <Route path="/sobre" element={<Sobre/>}/>
                        <Route path="/envio" element={<PoliticaEnvio/>}/>
                        <Route path="/troca" element={<PoliticaTrocas/>}/>
                        <Route path="/termo" element={<TermosUso/>}/>
                        <Route path="/privacidade" element={<PoliticaPrivacidade/>}/>
                        <Route path="/produto/:id" element={<DetalhesProduto/>}/>
                        <Route path="/carrinho" element={<CartPage/>}/>  
                        <Route path="/admin" element={<ModalAdmin/>}/>
                        <Route path="/admin/lista" element={<ListaDeProdutos/>}/>
                        <Route path="/admin/:id" element={<ModalAdmin/>}/>
                        <Route path="/cadastro" element={<Cadastro_completo/>}/>

                    </Route>
                </Routes>
                <ToastContainer/>
            </BrowserRouter>
    )
}