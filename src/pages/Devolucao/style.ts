import styled from "styled-components";

export const TrocaStyled = styled.div`
  .troca-container {
    max-width: 1100px;
    margin: 0 auto;
    padding: 60px 20px;
    display: flex;
    flex-direction: column;
    gap: 50px;
  }

  .troca-hero {
    text-align: center;
  }

  .troca-hero h1 {
    font-size: 38px;
    font-weight: 700;
  }

  .subtitle {
    color: #777;
    margin-top: 10px;
  }

  .troca-section p {
    text-align: center;
    max-width: 800px;
    margin: 0 auto;
  }

  .troca-casos {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 25px;
  }

  .card-troca {
    background: #f4f4f444;
    padding: 25px;
    border-radius: 12px;
    transition: 0.3s ease;
  }

  .card-troca:hover {
    transform: translateY(-5px);
  }

  .card-troca h2 {
    font-size: 20px;
    margin-bottom: 15px;
  }

  .troca-final {
    text-align: center;
  }

  .mensagem-final {
    margin-top: 20px;
    font-weight: 600;
  }
`;