import { PrivacidadeStyled } from "./styled";


export const PoliticaPrivacidade = () => {
  return (
    <PrivacidadeStyled>
      <section className="privacidade-container">

        <div className="privacidade-hero">
          <h1>Política de Privacidade</h1>
          <p className="subtitle">
            Transparência sobre o uso dos seus dados.
          </p>
        </div>

        <div className="privacidade-section">
          <h2>1. Dados Coletados</h2>
          <p>
            Podemos coletar nome, CPF, endereço, e-mail, telefone
            e dados necessários para o processamento do pagamento.
          </p>
        </div>

        <div className="privacidade-section">
          <h2>2. Finalidade da Coleta</h2>
          <p>
            Os dados são utilizados para processamento de pedidos,
            envio de produtos, emissão de nota fiscal e comunicação.
          </p>
        </div>

        <div className="privacidade-section">
          <h2>3. Compartilhamento</h2>
          <p>
            Seus dados podem ser compartilhados com operadoras de pagamento,
            transportadoras e autoridades legais quando exigido por lei.
          </p>
          <p>
            Não vendemos ou comercializamos dados pessoais.
          </p>
        </div>

        <div className="privacidade-section">
          <h2>4. Cookies</h2>
          <p>
            Utilizamos cookies para melhorar sua experiência de navegação
            e oferecer conteúdo personalizado.
          </p>
        </div>

        <div className="privacidade-section">
          <h2>5. Segurança</h2>
          <p>
            Adotamos medidas técnicas e organizacionais para proteger
            seus dados contra acessos não autorizados.
          </p>
        </div>

        <div className="privacidade-section">
          <h2>6. Direitos do Titular</h2>
          <p>
            Você pode solicitar acesso, correção ou exclusão de seus dados
            conforme previsto na legislação vigente.
          </p>
        </div>

      </section>
    </PrivacidadeStyled>
  );
};