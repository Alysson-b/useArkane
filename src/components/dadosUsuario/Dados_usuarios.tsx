import React, { useEffect, useState } from "react";
import Button from "../common/Button";
import Input from "../common/Input";
import {
  ContainerCadastroStyled,
  EnderecoStyled,
  PerfilStyled,
} from "./styled";
import { useAuth } from "../../contexts/auth/useAuth";
import { toast } from "react-toastify";
import { completarCadastro, getDadosUsuario } from "../../services/usuarios.services";

export const Cadastro_completo = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [cpf, setCpf] = useState("");
  const [sexo, setSexo] = useState<string | undefined>("");
  const [telefone, setTelefone] = useState<string | undefined>("");
  const [data_nascimento, setData_nascimento] = useState<string | undefined>("");
  const [rua, setRua] = useState<string | undefined>("");
  const [numero, setNumero] = useState<string | undefined>("");
  const [complemento, setComplemento] = useState<string | undefined>("");
  const [bairro, setBairro] = useState<string | undefined>("");
  const [cidade, setCidade] = useState<string | undefined>("");
  const [estado, setEstado] = useState<string | undefined>("");
  const [cep, setCep] = useState("");
  const [isLogin, setIsLogin]= useState(false)
  const { user } = useAuth();
  

  useEffect(() => {
    if (user) {
      setIsLogin(true)
      setName(user.nome);
      setEmail(user.email);
    }
  }, [user]);

  useEffect(() => {
    async function buscarCep() {
      const cepLimpo = cep.replace(/\D/g, "");

      if (cepLimpo.length !== 8) return;

      try {
        const response = await fetch(
          `https://viacep.com.br/ws/${cepLimpo}/json/`,
        );

        const data = await response.json();

        if (data.erro) {
          toast("CEP não encontrado");
          return;
        }

        setRua(data.logradouro);
        setBairro(data.bairro);
        setCidade(data.localidade);
        setEstado(data.uf);
      } catch (err) {
        console.error(err);
        toast("Erro ao buscar CEP");
      }
    }

    buscarCep();
  }, [cep]);

  async function completar(e: React.FormEvent) {
    e.preventDefault();

    if (
      !cpf ||
      !sexo ||
      !telefone ||
      !data_nascimento ||
      !rua ||
      !numero ||
      !complemento ||
      !bairro ||
      !cidade ||
      !estado ||
      !cep
    ) {
      toast("Todos os campos sao obrigatorios");
      return;
    }
    try {
      await completarCadastro({
        cpf,
        sexo,
        telefone,
        data_nascimento,
        rua,
        numero,
        complemento,
        bairro,
        cidade,
        estado,
        cep,
      });

      toast("Cadastro completado com sucesso");

      setCpf("");
      setSexo("");
      setTelefone("");
      setData_nascimento("");
      setRua("");
      setNumero("");
      setComplemento("");
      setBairro("");
      setCidade("");
      setEstado("");
      setCep("");
    } catch (err) {
      console.error(err);
      toast("Falha ao completar cadastro");
    }
  }

  async function buscarDadosUser() {
    
    try{
      const data = await getDadosUsuario()

      setSexo(data.perfil?.sexo)
      setTelefone(data.perfil?.telefone);
      setData_nascimento(data.perfil?.data_nascimento);
      setRua(data.enderecos[0].rua);
      setNumero(data.enderecos[0].numero);
      setComplemento(data.enderecos[0].complemento);
      setBairro(data.enderecos[0].bairro);
      setCidade(data.enderecos[0].cidade);
      setEstado(data.enderecos[0].estado);
      setCep(data.enderecos[0].cep);

    }catch(err){
      console.log("eero do server", err)
    }
    
  }

//     function formatarCPF(cpf: string) {
//       cpf = cpf.replace(/\D/g, "");

//     return cpf.replace(
//         /(\d{3})(\d{3})(\d{3})(\d{2})/,
//         "$1.$2.$3-$4"
//     );
// }

//   function formatarTel(tel: string) {
//       tel = tel.replace(/\D/g, "");

//     return tel.replace(
//         /(\d{2})(\d{5})(\d{4})/,
//         "($1) $2-$3"
//     );
// }


  
  
  return (
    <ContainerCadastroStyled>
      <form onSubmit={completar}>
        <PerfilStyled>
          <Input
            value={name}
            type="text"
            name="nome"
            id="nome"
            placeholder="Nome completo"
            onChange={(e) => setName(e.target.value)}
            disabled={isLogin}
            minLength={15}
            required
          />
          <Input
            value={email}
            disabled={isLogin}
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <div>
            <Input
              value={cpf}
              onChange={(e) => setCpf(e.target.value)}
              type="text"
              name="cpf"
              id="cpf"
              placeholder="CPF"
              required
              maxLength={11}
            />
            <Input
              type="date"
              name="data_nascimento"
              id="data_nascimento"
              placeholder="Data de nascimento"
              value={data_nascimento}
              onChange={(e) => setData_nascimento(e.target.value)}
              required
            />
            <Input
              name="telefone"
              id="telefone"
              placeholder="Telefone"
              value={telefone}
              onChange={(e) => setTelefone(e.target.value)}
              maxLength={11}
              required
            />
            <select
              name="sexo"
              id="sexo"
              value={sexo}
              onChange={(e) => setSexo(e.target.value)}
            >
              <option value="">Selecione o Sexo</option>
              <option value="masculino">masculino</option>
              <option value="feminino">feminino</option>
            </select>
          </div>
        </PerfilStyled>

        <EnderecoStyled>
          <Input
            value={cep}
            onChange={(e) => setCep(e.target.value)}
            type="text"
            name="cep"
            id="cep"
            placeholder="CEP"
            maxLength={8}
            required
          />

          <Input
            type="text"
            name="bairro"
            id="bairro"
            placeholder="Bairro"
            value={bairro}
            onChange={(e) => setBairro(e.target.value)}
            required
          />
          <div className="uf">
            <Input
              type="text"
              name="numero"
              id="numero"
              placeholder="Número"
              value={numero}
              onChange={(e) => setNumero(e.target.value)}
              required
            />

            <Input
              type="text"
              name="estado"
              id="estado"
              placeholder="estado"
              value={estado}
              onChange={(e) => setEstado(e.target.value)}
              required
            />
          </div>

          <Input
            value={rua}
            onChange={(e) => setRua(e.target.value)}
            type="text"
            name="rua"
            id="rua"
            placeholder="Rua"
            required
          />
          <Input
            type="text"
            name="cidade"
            id="cidade"
            placeholder="Cidade"
            value={cidade}
            onChange={(e) => setCidade(e.target.value)}
            required
          />

          <Input
            type="text"
            name="complemento"
            id="complemento"
            placeholder="Complemento"
            value={complemento}
            onChange={(e) => setComplemento(e.target.value)}
            required
          />
        </EnderecoStyled>

      


            <Button disabled={
              !name ||
              !email ||
              !cpf ||
              !sexo ||
              !telefone ||
              !data_nascimento ||
              !rua ||
              !numero ||
              !bairro ||
              !cidade ||
              !estado ||
              !cep
            } type="submit" id="salvar">
              Salvar
            </Button>
        
            <Button disabled={!isLogin} onClick={()=> buscarDadosUser()} type="button" id="alterar">
              Editar meus Dados
            </Button>
        
      </form>
    </ContainerCadastroStyled>
  );
};
