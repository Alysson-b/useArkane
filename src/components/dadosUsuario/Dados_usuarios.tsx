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
import { completarCadastro } from "../../services/usuarios.services";

export const Cadastro_completo = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [cpf, setCpf] = useState("");
  const [sexo, setSexo] = useState("");
  const [telefone, setTelefone] = useState("");
  const [data_nascimento, setData_nascimento] = useState("");
  const [rua, setRua] = useState("");
  const [numero, setNumero] = useState("");
  const [complemento, setComplemento] = useState("");
  const [bairro, setBairro] = useState("");
  const [cidade, setCidade] = useState("");
  const [estado, setEstado] = useState("");
  const [cep, setCep] = useState("");

  const { user } = useAuth();

  useEffect(() => {
    if (user) {
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
            disabled
            required
          />
          <Input
            value={email}
            disabled
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

        
            <Button disabled type="button" id="alterar">
              Alterar Dados
              </Button>

            <Button type="submit" id="salvar">
              Salvar
            </Button>
        
      </form>
    </ContainerCadastroStyled>
  );
};
