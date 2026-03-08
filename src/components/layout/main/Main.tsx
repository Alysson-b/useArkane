import { Outlet, useLocation } from "react-router-dom";
import FooterSection from "../footer/Footer";
import Header from "../header/Header";
import { Container } from "../header/style";
import { useState } from "react";
import LoginModal from "../../common/Modal";
import Carrosel from "../../common/Carrosel";



function Layout(){

    const [abrirLogin, setAbrirLogin] = useState(false)
    const location = useLocation()

    function abriModal(){
        setAbrirLogin(true)
    }
    function fecharModal(){
        setAbrirLogin(false)
    }
    return(
        <Container>
            <Header LoginModal={abriModal} />
            {location.pathname === "/" && <Carrosel/>}
            <main>
                <Outlet/>
            </main>

            <FooterSection/>
            {abrirLogin && <LoginModal fecharLogin={fecharModal} />}
        </Container>
    )
}
export default Layout