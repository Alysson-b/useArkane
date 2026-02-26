import styled from "styled-components";

export const TermosStyled = styled.div`
  .termos-container {
    max-width: 1000px;
    margin: 0 auto;
    padding: 60px 20px;
    display: flex;
    flex-direction: column;
    gap: 40px;
  }

  .termos-hero {
    text-align: center;
  }

  .termos-hero h1 {
    font-size: 38px;
    font-weight: 700;
  }

  .subtitle {
    margin-top: 10px;
    color: #777;
  }

  .termos-section h2 {
    font-size: 22px;
    margin-bottom: 10px;
  }

  .termos-section p {
    line-height: 1.6;
    margin-bottom: 10px;
  }
`;