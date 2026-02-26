import { Outlet } from "react-router-dom";
import FooterSection from "../footer/Footer";
import Header from "../header/Header";
import { Container } from "../header/style";
import { useState } from "react";
import LoginModal from "../../common/Modal";


function Layout(){

    const [abrirLogin, setAbrirLogin] = useState(false)

    function abriModal(){
        setAbrirLogin(true)
    }
    function fecharModal(){
        setAbrirLogin(false)
    }
    return(
        <Container>
            <Header LoginModal={abriModal} />
            <main>
                <Outlet/>
            </main>

            <FooterSection/>
            {abrirLogin && <LoginModal fecharLogin={fecharModal} />}
        </Container>
    )
}
export default Layout