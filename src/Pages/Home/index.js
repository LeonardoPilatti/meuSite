/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import { SectionHome } from './styled';
import background from '../../assets/bgHome.jpg';
import CSS3 from '../../assets/habilidades/css3.svg';
import HTML5 from '../../assets/habilidades/html5.svg';
import JAVASCRIPT from '../../assets/habilidades/javascript.svg';
import REACT from '../../assets/habilidades/reactjsIcon.svg';
import SASS from '../../assets/habilidades/sass.svg';
import PortfolioItem from '../../Components/PortfolioItem';

export default () => {
  const [portfolioList, setPortfolioList] = React.useState([]);

  React.useEffect(() => {
    async function fetchPortfolio(url) {
      const portfolioResponse = await fetch(url);
      const portfolioJson = await portfolioResponse.json();
      setPortfolioList(portfolioJson);
    }
    fetchPortfolio('./portfolioApi.json');
  }, []);

  return (
    <SectionHome>
      <div
        className="bgHome"
        style={{
          backgroundImage: `url("${background}")`,
        }}
      >
        <div className="vertical">
          <h1>Leonardo Pilatti Dal Puppo</h1>
          <p>Desenvolvedor FrontEnd Jr.</p>
          <div className="habilidadesHome">
            <img src={HTML5} alt="" />
            <img src={CSS3} alt="" />
            <img src={SASS} alt="" />
            <img className="ReactHome" src={JAVASCRIPT} alt="" />
            <img src={REACT} alt="" />
          </div>
        </div>
      </div>
      <section className="container portfolioHome">
        <h1>Portfólio</h1>
        <div className="portfolioHomeList">
          {portfolioList.length > 0 &&
            portfolioList
              .slice(0, 6)
              .map((item, index) => <PortfolioItem key={index} data={item} />)}
        </div>
      </section>
    </SectionHome>
  );
};
