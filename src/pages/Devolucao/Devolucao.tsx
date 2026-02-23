import { TrocaStyled } from "./style";

export const PoliticaTrocas = () => {
  return (
    <TrocaStyled>
      <section className="troca-container">

        <div className="troca-hero">
          <h1>Política de Trocas e Devoluções</h1>
          <p className="subtitle">
            Transparência, respeito e compromisso com você.
          </p>
        </div>

        <div className="troca-section">
          <p>
            Na <strong>useArkane</strong>, prezamos pela credibilidade e respeito aos
            nossos consumidores, seguindo rigorosamente o Código de Defesa do
            Consumidor em nossa política de troca e devolução.
          </p>
        </div>

        <div className="troca-casos">

          <div className="card-troca">
            <h2>Recebi um produto diferente</h2>
            <p>
              Caso receba um produto com erro na cor, tamanho ou modelo,
              solicitamos que entre em contato imediatamente.
            </p>
            <p>
              Faremos o reenvio do produto correto sem custos adicionais.
              Assumimos todas as despesas de envio.
            </p>
            <p>
              O produto devolvido não deve apresentar indícios de uso e,
              preferencialmente, deve ser enviado na embalagem original,
              com todos os itens acompanhantes.
            </p>
          </div>

          <div className="card-troca">
            <h2>Arrependimento da compra</h2>
            <p>
              Você tem até <strong>7 dias corridos</strong> após o recebimento
              para solicitar devolução por arrependimento.
            </p>
            <p>
              O produto não pode apresentar sinais de uso e deve ser devolvido
              na embalagem original, com todos os itens acompanhantes.
            </p>
          </div>

          <div className="card-troca">
            <h2>Produto não serviu</h2>
            <p>
              Realizamos a <strong>primeira troca gratuita</strong>, desde que
              solicitada dentro do prazo de 7 dias após o recebimento.
            </p>
            <p>
              O produto não pode ter sido utilizado. Caso o tamanho não seja
              adequado, entre em contato para iniciarmos o processo sem custos.
            </p>
          </div>

        </div>

        <div className="troca-final">
          <p>
            Estamos comprometidos em garantir sua satisfação e resolver qualquer
            questão da melhor forma possível.
          </p>

          <p className="mensagem-final">
            Equipe useArkane
          </p>
        </div>

      </section>
    </TrocaStyled>
  );
};