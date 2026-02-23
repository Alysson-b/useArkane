import { EnvioStyled } from "./styled";

export const PoliticaEnvio = () => {
  return (
    <EnvioStyled>
      <section className="envio-container">
        <div className="envio-hero">
          <h1>Política de Envio e Prazos</h1>
          <p className="subtitle">
            Transparência e compromisso em cada entrega.
          </p>
        </div>

        <div className="envio-section">
          <h2>Sobre os Envios</h2>
          <p>
            A <strong>useArkene</strong> envia todos os pedidos a partir de
            nosso centro de distribuição em Fortaleza, utilizando os Correios e
            as principais transportadoras do Brasil.
          </p>
        </div>

        <div className="envio-section">
          <h2>Prazo de Envio</h2>
          <p>
            Após a confirmação do pagamento, seu pedido será preparado e enviado
            em até <strong>7 dias úteis</strong>.
          </p>
        </div>

        <div className="envio-section">
          <h2>Rastreamento</h2>
          <p>
            Assim que o pedido for despachado, você receberá por e-mail o código
            de rastreio para acompanhar cada etapa da entrega.
          </p>
        </div>

        <div className="envio-prazos">
          <h2>Prazos Médios de Entrega</h2>

          <div className="grid-prazos">
            <div className="card-prazo">
              <h3>Nordeste</h3>
              <p>1 a 2 dias úteis</p>
            </div>

            <div className="card-prazo">
              <h3>Norte</h3>
              <p>5 a 10 dias úteis</p>
            </div>

            <div className="card-prazo">
              <h3>Centro-Oeste</h3>
              <p>3 a 8 dias úteis</p>
            </div>

            <div className="card-prazo">
              <h3>Sul</h3>
              <p>7 a 15 dias úteis</p>
            </div>

            <div className="card-prazo">
              <h3>Sudeste</h3>
              <p>8 a 12 dias úteis</p>
            </div>
          </div>
        </div>

        <div className="envio-info">
          <h2>Informações Importantes</h2>
          <p>
            Durante períodos de alta demanda, como promoções e lançamentos, pode
            haver pequenas variações nos prazos.
          </p>

          <p>
            Imprevistos externos como greves, enchentes ou restrições de entrega
            podem impactar o tempo estimado.
          </p>

          <p className="envio-final">
            Nosso compromisso é com a sua experiência do início ao fim.
          </p>
        </div>
      </section>
    </EnvioStyled>
  );
};
