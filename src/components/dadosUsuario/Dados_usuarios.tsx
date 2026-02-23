import { useEffect, useState } from "react";
import Button from "../common/Button";
import Input from "../common/Input";
import {
  ContainerCadastroStyled,
  EnderecoStyled,
  PerfilStyled,
} from "./styled";
import { useAuth } from "../../contexts/auth/useAuth";

export const Cadastro_completo = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const { user } = useAuth();

  useEffect(() => {
    if (user) {
      setName(user.nome);
      setEmail(user.email);
    }
  }, [user]);

  return (
    <ContainerCadastroStyled>
      <form>
        <PerfilStyled>
          <Input
            value={name}
            type="text"
            name="nome"
            id="nome"
            placeholder="Nome completo"
            onChange={(e)=> setName(e.target.value)}
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
            onChange={(e)=> setEmail(e.target.value)}
            required
          />

          <div>
            <Input type="text" name="cpf" id="cpf" placeholder="CPF" required />
            <Input
              type="date"
              name="data_nascimento"
              id="data_nascimento"
              placeholder="Data de nascimento"
              required
            />
            <Input
              name="telefone"
              id="telefone"
              placeholder="Telefone"
              required
            />
          </div>
        </PerfilStyled>

        <EnderecoStyled>
          <Input type="text" name="cep" id="cep" placeholder="CEP" required />
          <Input
            type="text"
            name="bairro"
            id="bairro"
            placeholder="Bairro"
            required
          />
          <div className="uf">
            <Input
              type="number"
              name="numero"
              id="numero"
              placeholder="Número"
              required
            />

            <Input
              type="text"
              name="estado"
              id="estado"
              placeholder="estado"
              required
            />
          </div>
          
          <Input type="text" name="rua" id="rua" placeholder="Rua" required />
          <Input
              type="text"
              name="cidade"
              id="cidade"
              placeholder="Cidade"
              required
            />
      
          <Input
            type="text"
            name="complemento"
            id="complemento"
            placeholder="Complemento"
            required
          />
        </EnderecoStyled>

        <Button id="alterar">Alterar Dados</Button>
        <Button type="submit" id="salvar">
          Salvar
        </Button>
      </form>
    </ContainerCadastroStyled>
  );
};
