import { SobreStyled } from "./style";

export const Sobre = () => {
  return (
    <SobreStyled>

    <section className="sobre-container">
      <div className="sobre-hero">
        <h1>Sobre Nós</h1>
        <p className="subtitle">
          Transformando treinos em estilo de vida.
        </p>
      </div>

      <div className="sobre-section">
        <h2>Nossa Essência</h2>
        <p>
          Nascemos da paixão pelo movimento e da crença de que a roupa certa
          pode transformar não apenas seu treino, mas sua relação com o
          fitness. Somos mais do que uma loja de roupas esportivas – somos uma
          comunidade dedicada a empoderar cada pessoa em sua jornada de
          bem-estar e superação.
        </p>
      </div>

      <div className="sobre-section">
        <h2>Nossa História</h2>
        <p>
          Fundada por atletas e entusiastas do fitness, nossa marca surgiu da
          necessidade real de encontrar peças que unissem performance técnica,
          conforto absoluto e design inspirador. Criamos roupas que acompanham
          cada movimento, do aquecimento ao pós-treino, sem abrir mão da
          estética.
        </p>
      </div>

      <div className="sobre-section">
        <h2>Nossa Missão</h2>
        <p>
          Acreditamos que cada pessoa merece se sentir confiante, confortável e
          motivada durante seus treinos. Desenvolvemos peças com tecidos
          tecnológicos, costuras estratégicas e modelagens que valorizam todos
          os corpos.
        </p>
      </div>

      <div className="sobre-diferenciais">
        <h2>O Que Nos Torna Únicos</h2>

        <div className="grid-diferenciais">
          <div className="card-diferencial">
            <h3>Tecnologia de Ponta</h3>
            <p>Secagem rápida, proteção UV e respirabilidade inteligente.</p>
          </div>

          <div className="card-diferencial">
            <h3>Design para Performance</h3>
            <p>Liberdade máxima de movimento em cada detalhe.</p>
          </div>

          <div className="card-diferencial">
            <h3>Sustentabilidade</h3>
            <p>Materiais eco-friendly e processos conscientes.</p>
          </div>

          <div className="card-diferencial">
            <h3>Inclusividade</h3>
            <p>Modelagens pensadas para todos os corpos.</p>
          </div>
        </div>
      </div>

      <div className="sobre-cta">
        <h2>Nosso Compromisso</h2>
        <p>
          Mais do que vender roupas, queremos fazer parte da sua transformação.
          Cada peça é testada por atletas reais, garantindo qualidade,
          durabilidade e performance.
        </p>

        <p className="chamada-final">
          Vista-se para vencer. Vista-se para ser você.
        </p>
      </div>
    </section>
    </SobreStyled>
  );
};