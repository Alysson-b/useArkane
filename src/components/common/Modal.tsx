import React, { useEffect, useState } from "react";
import { useAuth } from "../../contexts/auth/useAuth";
import { toast } from "react-toastify";
import Input from "./Input";
import Button from "./Button";
import { CadastroContainer, LoginContainer, Overlay, RecuperarSenha } from "./Styled.Global";



type loginProps = "login" | "cadastro" | "recuperar"

function LoginModal({fecharLogin}: {fecharLogin: ()=> void}){
    const [tela, setTela] = useState<loginProps>("login")
    const {login} = useAuth()
    const {cadastrar} = useAuth()
    
    
    useEffect(()=>{
        const fecharModal = (event: KeyboardEvent) =>{
            if(event.key === "Escape"){
                fecharLogin()
            }
        }
        window.addEventListener("keydown", fecharModal)
        return ()=> window.removeEventListener("keydown", fecharModal)
    },[fecharLogin])

    
    async function salvarLogin(e:React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        const form = e.currentTarget
        const email = form.email.value
        const senha = form.senha.value
        console.log(email, senha)
        console.log("passou daqui")
        try{
            await login(email, senha)
            toast("Login realizado com sucesso")
            fecharLogin()
        }
        catch(err: any){
            toast.error(
                err?.response?.data?.message || "Email ou senha inválidos"
            )
        }
    }
    
    async function salvarCadastro(e:React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        const form = e.currentTarget
        const nome = form.nome.value
        const email = form.email.value
        const senha = form.senha.value
        
        try{
            await cadastrar(nome, email, senha)
            toast("Cadastro realizado com sucesso")
            fecharLogin()
        }
        catch(err: any){
            toast.error(
                err?.response?.data?.message || "Erro ao cadastrar usuário"
            )
        }

    }

        return(
            <Overlay>
            {tela === "login" &&(
                <LoginContainer>

                    <form onSubmit={salvarLogin}>
                        <h2>LOGIN</h2>
                        <Input name="email" id={"email"} placeholder="Digite seu Email"  required/>
                        <Input name="senha" type="password" id={"senha"} placeholder="Digite seu Senha"  required/>
                        <Button children={"Entrar"}/>
                        <div className="href">
                            <a href="#" onClick={(e) =>{e.preventDefault(); setTela("cadastro")}}>Cadastrar-se</a>
                            <a href="#" onClick={(e) =>{e.preventDefault(); setTela("recuperar")}}>Esqueceu a senha?</a>
                        </div>
                        <div>
                            <Button type="submit" className="close" children={"X"} onClick={fecharLogin}/>
                        </div>
                    </form>
                </LoginContainer>
        )}

        {tela === "cadastro" &&(
            <CadastroContainer >
                <form onSubmit={salvarCadastro}>
                    <h2>CADASTRO</h2>
                    <Input name="nome" id={"nome"} placeholder="Digite seu Nome" required/>
                    <Input name="email" id={"email"} placeholder="Digite seu Email"  required/>
                    <Input name="senha" type="password" id={"senha"} placeholder="Digite seu Senha"  required/>
                    <Button  children={"Cadastrar"}/>

                    <div className="href">
                        <a href="#" onClick={(e) => {e.preventDefault(); setTela("login")}}>Já tem Conta?</a>
                    </div>
                    <div>
                        <Button type="submit" className="close" children={"X"} onClick={fecharLogin}/>
                    </div>
                </form>
            </CadastroContainer>
        )}
        {tela === "recuperar" && (
            <RecuperarSenha onClick={(e) => e.stopPropagation()}>
                <h2>RECUPERAR SENHA</h2>
                <Input id={"email"} placeholder={"Digite seu email"}/>
                <Button onClick={(e) => {e.preventDefault(); setTela('login')}} children={"Enviar"}/>
                <div>
                    <Button type="submit" className="close" children={"X"} onClick={fecharLogin}/>
                </div>
            </RecuperarSenha>
        )}
        </Overlay>
        )
}


export default LoginModal