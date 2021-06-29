import styled from 'styled-components';

export const SectionHome = styled.section`
  color: #fff;

  .bgHome {
    height: 92vh;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;

    font-style: italic;

    h1 {
      font-size: 1.5em;
      margin-left: 40px;
    }
    p {
      font-size: 1.125em;
      padding: 15px 0px 20px 0px;
      margin-left: 40px;
    }
  }
  .habilidadesHome {
    display: flex;
    align-items: center;
    margin-left: 40px;

    img {
      margin-right: 15px;
      width: 50px;
    }
  }
  .vertical {
    width: 100%;
    height: 100vh;
    /* background: linear-gradient(to top, #0e1013 1%, transparent 99%); */
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .hello {
    height: 2000px;
    top: -150px;
  }

  .portfolioHome {
    padding-top: 40px;
    h1 {
      text-align: center;
      font-size: 1.5em;
      margin-bottom: 30px;
    }
    .portfolioHomeList {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 20px;
    }
  }
`;
