import { useEffect, useState } from "react"
import { UserResponse } from "../../types/user"
import { getUsuarios } from "../../services/usuarios.services"
import { useSearch } from "../../contexts/provider_search/useSeach"
import { Loading } from "../productCart/style"
import { ListUsuariosStyled } from "./Styled.Global"
import { ChevronDown  } from "lucide-react"
import Button from "./Button"


export const ListarUsuarios =()=>{
    const [listUsuarios, setListUsuarios] = useState<UserResponse[]>([])
    const {search}= useSearch()
    const [loading, setLoading] = useState(true);
    const [mostarDadosUsuario, setmostarDadosUsuario] = useState<number | null>(null)

    function abrirModal(id:number){
        setmostarDadosUsuario(mostarDadosUsuario === id ? null : id)
    }

    useEffect(()=>{
        async function buscarUsuarios() {
            try{    
                const data =  await getUsuarios()
                setListUsuarios(data)
                console.log(data)
                
            }catch(err){
                console.log(err)
                
            }finally{
                setLoading(false)
            }
        }
        buscarUsuarios()
    },[])   
    const termo = (search ?? "").toLowerCase()
    const filter = listUsuarios.filter((user)=>{
        const nome = (user.nome ?? "").toLowerCase()
        const email = (user.email ?? "").toLowerCase()
        const endereco = user.enderecos ?? []
        const perfil = user.perfil

        const enderecos = endereco.some((e)=>(
            (e.cep ?? "").toLowerCase().includes(termo) ||
            (e.cidade ?? "").toLowerCase().includes(termo) ||
            (e.estado ?? "").toLowerCase().includes(termo)
        ))

        const perfils = 
            (perfil?.sexo ?? "").toLowerCase().includes(termo) ||
            (perfil?.data_nascimento ?? "").toLowerCase().includes(termo) ||
            (perfil?.telefone ?? "").toLowerCase().includes(termo)

        return nome.includes(termo) || email.includes(termo)  || enderecos ||  perfils
    })

    if (loading) {
            return (
            <Loading>
                <div className="loading-container">
                    <div className="spinner"></div>
                    <p>Buscando Usuarios...</p>
                </div>
            </Loading>
    )}

    return(

        <ListUsuariosStyled>
            {filter?.length ? (
                filter.map((user)=>(
                    <div key={user.id}>

                    <div className="containerUser" key={user.id}>
                        <i onClick={()=> abrirModal(user.id)} className="iconDrop">{<ChevronDown size={18} />}</i>
                            <div className="dadosUser">
                                <h3>Nome: {user.nome}</h3>
                                <p>Email: {user.email}</p>
                            </div>

                        <div className="bottoes">
                            <Button id="editar">Editar</Button>
                            <Button id="excluir">Excluir</Button>
                        </div>
                    </div>

                    {mostarDadosUsuario === user.id && (
                        <div className="enderecos">
                            {(user.enderecos ?? []).length > 0 ? (
                                user.enderecos.map((u, index) => (
                                    <ul key={index}>
                                    <li>Cep: {u.cep}</li>
                                    <li>Cidade: {u.cidade}</li>
                                    <li>Estado: {u.estado}</li>
                                    </ul>
                                ))
                                ) : (
                                <p className="semEndereco">Endereço não cadastrado</p>
                            )}
                        </div>
                        )}
                    </div>
                ))
            ):(
                <div className="contAinerError">
                <p>Usuario nao encontrado</p>
                </div>
            )}
        </ListUsuariosStyled>
        
    
    )
}