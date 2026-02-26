import styled from "styled-components";

export const SobreStyled = styled.div`
    .sobre-container {
  max-width: 1100px;
  margin: 0 auto;
  padding: 60px 20px;
  display: flex;
  flex-direction: column;
  gap: 60px;
}

.sobre-hero {
  text-align: center;
}

.sobre-hero h1 {
  font-size: 42px;
  font-weight: 700;
  margin-bottom: 10px;
}

.subtitle {
  font-size: 18px;
  color: #777;
}

.sobre-section h2,
.sobre-diferenciais h2,
.sobre-cta h2 {
  font-size: 28px;
  margin-bottom: 15px;
}

.sobre-section p,
.sobre-cta p {
  line-height: 1.7;
  color: #555;
}

.grid-diferenciais {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 20px;
  margin-top: 20px;
}

.card-diferencial {
  background: #f5f5f548;
  padding: 25px;
  border-radius: 12px;
  transition: 0.3s ease;
  
}

.card-diferencial:hover {
  transform: translateY(-5px);
  background: #000;
  color: #fff;
}

.card-diferencial h3 {
  margin-bottom: 10px;
}

.sobre-cta {
  text-align: center;
}

.chamada-final {
  margin-top: 20px;
  font-size: 20px;
  font-weight: 600;
}

`
