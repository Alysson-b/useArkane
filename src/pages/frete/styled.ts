// style.ts
import styled from "styled-components";

export const EnvioStyled = styled.div`
  .envio-container {
    max-width: 1100px;
    margin: 0 auto;
    padding: 60px 20px;
    display: flex;
    flex-direction: column;
    gap: 60px;
  }

  .envio-hero {
    text-align: center;
  }

  .envio-hero h1 {
    font-size: 40px;
    font-weight: 700;
  }

  .envio-section h2,
  .envio-prazos h2,
  .envio-info h2 {
    font-size: 26px;
    margin-bottom: 15px;
  }

  .grid-prazos {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 20px;
  }

  .card-prazo {
    background: #f4f4f45d;
    padding: 25px;
    border-radius: 12px;
    transition: 0.3s;
  }

  .card-prazo:hover {
    transform: translateY(-5px);
  }

  .envio-final {
    margin-top: 20px;
    font-weight: 600;
  }
`;