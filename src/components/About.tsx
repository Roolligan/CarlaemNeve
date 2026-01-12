import "./About.css";

function About() {
  return (
    <section className="section about" id="sobre">
      <div className="container about__content">
        <div className="about__text">
          <div className="section__header">
            <span className="section__eyebrow">Sobre</span>
            <h2 className="section__title">Delicadeza artesanal em cada detalhe.</h2>
            <p className="section__subtitle">
              Carla em Neve nasce da paixão por criar sobremesas que traduzem afeto.
              Cada receita é preparada manualmente, com ingredientes selecionados e
              finalização cuidadosa para deixar o momento ainda mais especial.
            </p>
          </div>
          <p className="about__signature">Carla em Neve - Por Carla Capelatto</p>
        </div>
        <div className="about__accent">
          <div className="about__card card">
            <h3>Artesanal e exclusivo</h3>
            <p>
              Produções limitadas, acompanhamento próximo e personalização para
              cada evento.
            </p>
          </div>
          <div className="about__card card">
            <h3>Sabor com elegância</h3>
            <p>
              Receitas autorais com equilíbrio entre textura, aroma e apresentação.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
