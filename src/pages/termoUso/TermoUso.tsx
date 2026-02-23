import { TermosStyled } from "./styled";


export const TermosUso = () => {
  return (
    <TermosStyled>
      <section className="termos-container">

        <div className="termos-hero">
          <h1>Termos de Uso</h1>
          <p className="subtitle">
            Regras e condições para utilização do nosso site.
          </p>
        </div>

        <div className="termos-section">
          <h2>1. Aceitação dos Termos</h2>
          <p>
            Ao acessar e utilizar o site da <strong>useArkane</strong>, você concorda
            com os presentes Termos de Uso.
          </p>
        </div>

        <div className="termos-section">
          <h2>2. Cadastro e Responsabilidade</h2>
          <p>
            O usuário se compromete a fornecer informações verdadeiras,
            completas e atualizadas no momento do cadastro e da compra.
          </p>
          <p>
            A useArkane não se responsabiliza por dados incorretos fornecidos
            pelo cliente.
          </p>
        </div>

        <div className="termos-section">
          <h2>3. Produtos e Disponibilidade</h2>
          <p>
            Os produtos estão sujeitos à disponibilidade em estoque.
            As imagens são meramente ilustrativas.
          </p>
        </div>

        <div className="termos-section">
          <h2>4. Preços e Pagamentos</h2>
          <p>
            Os valores apresentados podem ser alterados sem aviso prévio.
            O pedido será processado somente após confirmação do pagamento.
          </p>
        </div>

        <div className="termos-section">
          <h2>5. Entrega</h2>
          <p>
            Os prazos informados são estimativas fornecidas pelas
            transportadoras e podem sofrer variações por fatores externos.
          </p>
        </div>

        <div className="termos-section">
          <h2>6. Propriedade Intelectual</h2>
          <p>
            Todo o conteúdo do site, incluindo imagens, textos e identidade
            visual, é de propriedade da useArkane.
          </p>
        </div>

        <div className="termos-section">
          <h2>7. Alterações</h2>
          <p>
            A useArkane poderá atualizar estes Termos a qualquer momento,
            sem aviso prévio.
          </p>
        </div>

      </section>
    </TermosStyled>
  );
};